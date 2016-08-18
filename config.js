/*
 * 配置文件
 */

var path = require('path');

module.exports = {
    alias: {
        pages: './src/scripts/pages',
        scripts: './src/scripts'
    },
    entryList: [
        //'pages/test/index.js'//,
        'scripts/index.js'
    ],
    path: path.join(__dirname, 'public'),
    devPublicPath: '/',
    prdPublicPath: '//q.qunarzz.com/path/to/project/public/'
};

