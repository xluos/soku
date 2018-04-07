'use strict';

const cheerio = require('cheerio');
const chalk = require('chalk');

function e(text){
    console.error(chalk.red(text));
}
module.exports = {
    cmd: function(data) {
        var $ = cheerio.load(data);
        let title = $('title').text();
        if(title === '404错误') {
            e("命令不存在或尚未收录！");
            return false;
        }
        title = title.split('：')[1];
        console.log(chalk.magenta(title));
        
        var $h3 = $('#arc-body h3');//.find('h3');
        var $pre = $('#arc-body pre');
        for(let i=0;i < $h3.length;i++) {
            // console.log(i);
            // console.log($h3.eq(i).text());
            let $h3String = $h3.eq(i).text();
            if(~$h3String.search(/(语法|选项|参数)/)) {
                console.log(chalk.yellow($h3String));
                console.log(chalk.cyan($pre.eq(i).text()));
            }
            // console.log($f[i]);
        }
        
        
    },
    list: function(data) {
        var $ = cheerio.load(data);
        let title = $('title').text();
        if(title === '404错误') {
            e("命令不存在或尚未收录！");
            return false;
        }

        console.log(chalk.yellow('搜索到的相关命令'));

        var list = $("#result-list .clearfix");

        for(let i = 1;i < list.length;i++)
        {
            var item = list.eq(i).text().split('\n');
            console.log(chalk.cyan(item[1]) + '\t\t' + chalk.gray(item[2]));
            console.log();
        }
    },
    errors: e
}