/*
  当前文件就是webpack的配置文件。
  当执行webpack指令时，会默认找的配置文件
 */

const { resolve } = require('path');

module.exports = {
  // 入口
  entry: './src/js/app.js', // webpack会自动解析依赖关系
  // 输出
  output: {
    path: resolve(__dirname, 'build'), // 打包后文件输出的目录，绝对路径
    filename: './js/built.js', // 输出后文件名称：只指js文件
  },
  // 加载器
  module: {
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
      }
    ]
  },
  // 模式
  mode: 'development'
};