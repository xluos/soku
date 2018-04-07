'use strict';

const request = require('request');
const print = require('../../lib/print.js');


function errors(text){
    console.error(chalk.red(text));
}

module.exports = {
    init: function (argv) {
        if (argv.z.toString() === 'true') {
            print.errors("参数错误，检查后重新输入！");
        } else {
            let keywords = encodeURI(argv.z);
            request.get(`http://man.linuxde.net/?s=${keywords}`, function (error, response, body) {

                if (!error && response.statusCode === 200) {;
                    print.list(body);

                    // console.log($('#result-list').text())
                }else {
                    print.errors("错误！");
                }
            });
        }
    }
}