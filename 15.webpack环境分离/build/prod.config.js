const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { merge } = require('webpack-merge'); 
const baseConfig = require('./base.config');
//开发环境和运行环境的合并
module.exports = merge(baseConfig,{
    plugins:[
        new UglifyJsPlugin()
    ]
})
 