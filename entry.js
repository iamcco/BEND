/*
 * 管理入口文件
 */

'use strict';

var alias = {
    pages: './src/scripts/pages'
};

var entryList = [
    'pages/test/index.js'//,
    //'pages/other/index.js'
];

module.exports = (function() {
    var entry = {};
    entryList.forEach(function(item) {
        var key, name;

        // 替换 alias
        for(key in alias) {
            if(alias.hasOwnProperty(key)) {
                if(item.indexOf(key) === 0) {
                    item = item.replace(key, alias[key]);
                }
            }
        }

        // 配置入口文件
        name = item.replace(/(\.\/)?src\//, '').split('/').slice(0, -1).join('/');
        entry[name] = item;
    });
    return entry;
})();
