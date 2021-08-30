const path = require("path");
const { merge } = require('webpack-merge'); 
const baseConfig = require('./base.config');

module.exports = merge(baseConfig, {
    //只有在development环境下有效
    devServer: {
        //写错不报错,与出口路径相一致
        contentBase: path.resolve(__dirname, 'dist'),
        // 行业术语：起个服务，listen port 3000 
        port: 5000,
        compress: true,
        open: false, // 服务启动后，是否开发当前操作系统的默认浏览器
        hot: true,// hmr 启动   *.js / *.ts ｜ *.css *.html *.json  热部署
    }
})
