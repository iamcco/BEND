'use strict';

// system module
let path = require('path');
// webpack module
let webpack = require('webpack');
// webpack plugin module
let CleanPlugin = require('clean-webpack-plugin');
let HTMLWebpackPlugin = require('html-webpack-plugin');

// entry
let entry = require('./entry.js');

// setting
let isProduction = process.env.NODE_ENV === 'production';

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
    entry: entry,
    output: {
        path: path.join(__dirname, 'public'),
        filename: '[name]/bundle@[hash].js',
        publicPath: '/'                  // 图片等静态资源的打包连接
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

