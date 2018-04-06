'use strict';
const fs = require('fs');
const path = require('path');
module.exports = {
    init: function () {
        var pt = path.resolve(__dirname,'./package.json');
        console.log(pt);
        var version = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../../package.json'),'utf-8')).version;
        console.log(version);
    }
}