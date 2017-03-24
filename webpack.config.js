'use strict';
var webpack = require('webpack');
var path = require('path');
var TransferWebpackPlugin = require('transfer-webpack-plugin');
var buildPath = path.resolve(__dirname,'build');
var nodeModulesPath = path.resolve(__dirname,'node_modules');

var config = {
    //入口文件配置
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:8080', 
        'webpack/hot/only-dev-server',
        path.resolve(__dirname,'src/main.js')
    ],
    resolve:{
        extensions: ["", ".js", ".jsx"]//当requrie的模块找不到时，添加这些后缀
    },
    devServer:{
        contentBase: 'build',
        devtool: 'eval',
        hot: true,
        debug: true,
        inline: true,    
        port: 3005        
    },
    //文件导出的配置
    output:{
        path:buildPath,
        filename:"app.js"
    },
    module:{
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loaders: ['react-hot', 'babel'],
                include: [path.resolve(__dirname, "src")],
                exclude: [nodeModulesPath]
            },
            {
                test: /\.html/,
                loader: 'swig',
                exclude: [nodeModulesPath]
            },
            {
                test:/\.css$/,
                loader:'style!css',
                exclude: [nodeModulesPath]
            },
            {
                test:/\.png$/,
                loader:'url?limit=10000',
                exclude: [nodeModulesPath]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        }),
        new webpack.HotModuleReplacementPlugin(),
        //压缩打包的文件
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         //supresses warnings, usually from module minification
        //         warnings: false
        //     }
        // }),
        //允许错误不打断程序
        new webpack.NoErrorsPlugin()
    ]
}
module.exports = config;