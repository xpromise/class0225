/*
  当前文件就是webpack的配置文件。
  当执行webpack指令时，会默认找的配置文件
 */

const { resolve } = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  // 入口
  // 使用HMR功能，需要手动引入index.html文件，否则结构不会自动更新
  entry: ['./src/js/app.js', './src/index.html'], // webpack会自动解析依赖关系
  // 输出
  output: {
    path: resolve(__dirname, 'build'), // 打包后文件输出的目录，绝对路径
    filename: './js/built.js', // 输出后文件名称：只指js文件
  },
  // 加载器
  module: { // loader处理的资源需要引入才能找到
    rules: [ // 在数组中写所有loader规则
      {
        // 错误：Module not found: Error: Can't resolve 'style-loader'。  /  cannot find module 'css-loader'
        // 解决: style-loader没有安装，使用 npm i style-loader -D
        test: /\.less$/, // 检查文件是否是以.less结尾。 为了匹配less文件
        use: [{ // 一旦匹配上，就会使用use中的规则对文件进行处理  （loader中use执行顺序都是从右到左，依次执行）
          loader: "style-loader" // 找到css字符串，创建style标签，让css生效
        }, {
          loader: "css-loader" // 将css变成字符串，以commonjs模块化方式插入到js文件中
        }, {
          loader: "less-loader" // 将less编译成css
        }]
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        use: [ // 使用多个loader时，用use
          {
            loader: 'url-loader',
            options: {
              limit: 8192, // 限制 8 * 1024 = 8 kb。 8kb以下的图片会被base64处理
              publicPath: 'images', // less文件中图片的url会加上publicPath的值 和图片的url路径一起处理
              outputPath: 'images', // 只改变图片输出到本地的位置。不会修改url路径  和output.path一起处理
              name: '[hash:8].[ext]' // 修改输出的文件名称
            }
          }
        ]
      },
      /*{ // 需要在package.json加上配置
        test: /\.js$/,
        exclude: /node_modules/, // 排除指定目录下所有文件
        loader: "eslint-loader",  // 使用一个loader，就直接写loader
      },
      // npm install babel-loader @babel/core @babel/preset-env -D
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'] // 告诉babel使用什么规则编译js代码
          }
        }
      },*/
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'] // 告诉babel使用什么规则编译js代码
            }
          },
          "eslint-loader"
        ]
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader'  // 处理html中图片
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|mp3|mp4)$/,
        // exclude: /\.(js|less|json|png|jpe?g|gif|webp)$/,
        use: {
          loader: 'file-loader', // 复制文件输出到另外一个地方
          options: {
            outputPath: 'media',
            name: '[hash:8].[ext]'
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ // 不能处理html中的图片
      template: './src/index.html', // 以指定html文件为模板，创建新的html文件。 会自动引入打包后输出的js/css文件
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  // 模式
  mode: 'development',
  // 开发服务器：用来实现自动化任务
  // 特点：在内存中编译运行的。不会有任何输出到本地
  // npm i webpack-dev-server -D 本地安装
  // 运行指令： webpack-dev-server
  devServer: {
    contentBase: resolve(__dirname, "build"), // 资源根目录
    compress: true, // gzip压缩
    port: 3000, // 端口号
    open: true, // 自动打开浏览器
    hot: true, // 开启HMR功能
  }
};