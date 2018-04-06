'use strict';

const request = require('request');
const chalk = require('chalk');
const cheerio = require('cheerio');

function errors(text){
    console.error(chalk.red(text));
}

module.exports = {
    init: function (argv) {
        if(argv.z.toString() === 'true') {
            errors("输入错误，检查后重新输入！");
        }
        let keywords = encodeURI(argv.z);
        request.get(`http://man.linuxde.net/?s=${keywords}`, function(error, response, body) {
            
            if (!error && response.statusCode === 200) {
              //console.log(body);
                var $ = cheerio.load(body);
                // console.log(body);
                
                // console.log($('title').text());
                console.log($('#result-list').text())
                // console.log($('#arc-body pre').eq(1).text())
            }else if(!error && response.statusCode === 404) {
                errors("命令不存在，或尚未收录！");
            }
          });
    }
}