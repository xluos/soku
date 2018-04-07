'use strict';

const request = require('request');
const print = require('../../lib/print.js');

module.exports = {
    init: function (argv) {
        if (argv.l.toString() === 'true') {
            print.errors("参数错误，检查后重新输入！");
        } else {
            let keywords = argv.l;
            request.get(`http://man.linuxde.net/${keywords}`, function (error, response, body) {

                if (!error && response.statusCode === 200) {
                    
                    print.cmd(body);

                }else {
                    print.errors("错误！");
                }
            });
        }
    }
}