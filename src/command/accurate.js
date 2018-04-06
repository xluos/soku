'use strict';

const request = require('request');
const chalk = require('chalk');
const xpath = require('xpath.js');
const dom = require('xmldom').DOMParser;
const cheerio = require('cheerio');

function errors(text){
    console.error(chalk.red(text));
}

module.exports = {
    init: function (argv) {
        if(argv.l.toString() === 'true') {
            errors("输入错误，检查后重新输入！");
        }
        let keywords = argv.l;
        request.get(`http://man.linuxde.net/${keywords}`, function(error, response, body) {
            
            if (!error && response.statusCode === 200) {
              //console.log(body);
                // var doc = new dom().parseFromString(body);
                // var nodes = xpath(doc,"//*[@id=\"arc-body\"]/pre[1]");
                // console.log(nodes[0].firstChild.data);
                var $ = cheerio.load(body);
                console.log($('title').text());
                console.log($('#arc-body pre').eq(0).text())
                console.log($('#arc-body pre').eq(1).text())
            }else if(!error && response.statusCode === 404) {
                errors("命令不存在，或尚未收录！");
            }
          });
    }
}