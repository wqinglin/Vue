const path = require("path");//path 可以结构赋值  
const HtmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    //js模块化源头
    entry: './src/js/main.js',
    //出口为对象,路径和文件名，通过__dirname获得当前文件的绝对路径
    output: {
        //必须为绝对路径
        path: path.resolve(__dirname, 'dist'),
        // filename: 'js/bundle.js',
        filename: "js/bundle.[name].js",
        // publicPath:'dist/'
        //publicPath会自动在输出的静态资源的路径前加上我们写的值，
        //而加上publicPath:'./'的原因就是让我们html中img标签的路径正确，
        //涉及url的东西开头自动添加
        // chunkFilename:"chunk/chunk.js"
        //不写此句话,直接加载到js文件，如果写了，文件单独打包
        chunkFilename: "chunks/chunk.[name].js"
        //有下面必须改上面，否则命名冲突
    },
    module: {
        rules: [
            //统一打包
            //     {
            //         test: /\.css$/,
            //         //style-loader负责将css样式添加到Dom中
            //         // css-loader:只负责css文件的加载，编程commonjs模块加载到js中
            //         use: ['style-loader', 'css-loader'],
            //     },
            // ],


            //单独打包
            {
                test: /\.css$/,  //配置正则表达式用来匹配规则
                //use数组中loader执行顺序，是从下到上依次执行
                use: [
                    {
                        loader: miniCssExtractPlugin.loader,
                        options: {
                            //在打包导出的css文件内，如果遇到了相对路径，那么就在这个url前加上这个前缀
                            //  images/15ce7.jpg   不添加如下操作
                            //../images/15ce7.jpg  添加后才能加载Css
                            publicPath: "../",
                        }
                    },
                    "css-loader",
                ]
            },
            //url 背景图片打包   用到url-loader  必须先加载html-loader
            {
                test: /\.(png|jpg)$/,
                use: [
                    {
                        // 加载图片用到url-loader
                        loader: 'url-loader',
                        options: {
                            //当加载图片时,小于limit时,会将图片编译成base64字符串形式,在css中显示，小图片会提高加载速度,
                            // 在打包后的文件夹中不显示该图片，只是会加载到css中
                            //当加载图片时，大于limit时，需要使用file-loader 转化为哈希，目的是不重复
                            //小于8kb  /不配置options时 默认会把图片转为base64
                            //加入outputPath:  C:\Users\Administrator\Desktop\黑马vue\09.webpack\dist\images\[name]
                            //不加outputPath:  C:\Users\Administrator\Desktop\黑马vue\09.webpack\dist\[name]
                            limit: 19 * 1024,
                            outputPath: "./images",  //生成的

                            name: "[hash:5].[ext]"
                            //原文件名进行打包
                            // name:"[name].[ext]"
                        },

                    }
                ]
            },
            //<html>页面中的img打包
            {
                test: /\.html$/,
                loader: "html-loader",
                options: {
                    //false按照自己的路径导入导出
                    // 通过配置文件告诉webpack打包图片不需要它通过es的语法单独按module模块进行打包
                    esModule: false
                }
            },

            //图标字体
            //HTML-loader得先按装url-loader最先安装file-loader
            {
                test: /\.(ttf|woff|woff2)$/,
                loader: "file-loader",
                options: {
                    //name:"[name].[ext]",
                    name: "[hash:5].[ext]",
                    outputPath: "./fonts"
                }
            },

            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              }

        ]
    },
    mode: "development",
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",  //自己的
            minify: {
                collapseWhitespace: false, //移出空格
                removeComments: true, //移出注释
            }
        }),
        new miniCssExtractPlugin({
            filename: 'css/normal.css',  //生成的
        }),
        // new CleanWebpackPlugin(),
    ],

    //只有在development环境下有效
    devServer: {
        //写错不报错,与出口路径相一致
        contentBase: path.resolve(__dirname, 'dist'),
        // 行业术语：起个服务，listen port 3000 
        port: 5000,
        compress: true,
        open: false, // 服务启动后，是否开发当前操作系统的默认浏览器
        hot: true,// hmr 启动   *.js / *.ts ｜ *.css *.html *.json  热部署
    },
    // 通常我们编写的源代码会经过多重处理（编译、封装、压缩等），最后形成产物代码。  映射
    devtool: 'source-map',
    // 起别名
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        }
    },

    //最优的，最佳的
    optimization: {
        //split 打包
        splitChunks: {
            chunks: 'all',
        }
    },
}