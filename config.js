/*
 * 配置文件
 */

var path = require('path');

module.exports = {
    alias: {
        pages: './src/scripts/pages'
    },
    entryList: [
        'pages/test/index.js'
    ],
    path: path.join(__dirname, 'public'),
    devPublicPath: '/',
    PrdPublicPath: '//q.qunarzz.com/path/to/project/public/'
};

