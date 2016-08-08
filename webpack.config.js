'use strict';

const path = require('path');   // system module
const webpack = require('webpack');     // webpack module
const CleanPlugin = require('clean-webpack-plugin');    // webpack plugin module
const HTMLWebpackPlugin = require('html-webpack-plugin');

const config = require('./config.js');  // config
const isProduction = process.env.NODE_ENV === 'production';     // setting

// 根据 alias 获取入口文件的真实路径
let getEntryList = function(entryList, alias) {
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
};

let plugins = [
    new HTMLWebpackPlugin({
        path: 'public',
        template: 'src/html/index.ejs',
        filename: 'index.html'
    })
];

if(isProduction) {
    plugins = plugins.concat([
        new CleanPlugin(['public'], {             // 删除 plugin 文件夹
            root: path.join(__dirname, './'),
            verbose: true,
            dry: false
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            test: /\.jsx?$/,
            output: {
                comments: false  // remove all comments
            },
            compress: {
                warnings: false  // remove all warnings
            }
        })
    ]);
}

module.exports = {
    devtool: isProduction ? false : 'source-map',
    entry: getEntryList(config.entryList, config.alias),
    output: {
        path: config.path,
        filename: '[name]/bundle@[hash].js',
        publicPath: isProduction && config.prdPublicPath || config.devPublicPath  // 图片等静态资源的打包连接
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react'],
            exclude: /node_modules/,
            include: path.join(__dirname, 'src', 'scripts')
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.(png|jpg|jpeg|ico)$/,
            loader: 'url-loader?limit=8192'
        }]
    },
    plugins: plugins,
    resolve: {
        extensions: ['', '.js', 'jsx'],
        alias: {
            components: path.join(__dirname, 'src/scripts/components'),
            lib: path.join(__dirname, 'src/scripts/lib'),
            styles: path.join(__dirname, 'src/styles')
        }
    }
};
