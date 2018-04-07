'use strict';

const msee = require('msee');
const path = require('path');
const fs = require('fs');

module.exports = {
    init: function (args) {
        let cmd = 'help';
        
        // if (args.h && args.h !== 'true') {
        //     cmd = args.h;
        // }else if (args.help && args.help !== 'true') {
        //     cmd = args.help;
        // }
        // console.log(cmd);
        
        const file = path.join(__dirname, '../../doc', `${cmd}.md`);
        let doc;

        if (fs.existsSync(file)) {
            doc = msee.parseFile(file);
            console.log(doc);
        } else {
            console.log('oh! I can\'t help you');
        }
    }
}