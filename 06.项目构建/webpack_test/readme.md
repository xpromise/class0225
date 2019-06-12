## webpack
* webpack本身能处理js和json文件. 其他文件需要借助loader解析。

* 开发环境指令：webpack ./src/js/app.js -o ./build/js/built.js --mode=development
  * 只能将es6模块化语法编译成浏览器能识别语法
  * 不能编译es6的其他语法
* 生产环境指令：webpack ./src/js/app.js -o ./build/js/built.js --mode=production
  * 将es6模块化语法编译成浏览器能识别语法
  * 压缩js代码
  
* 需要处理其他文件，就需要使用配置文件：webpack.config.js
* 配置：
  * entry 入口
    * 指示webpack从哪个文件开始打包
  * output
    * 打包后文件输出到哪里去
  * loader
    * 帮助webpack解析非js/json文件
  * plugins
    * 做功能更加强大的工作
  * mode
    * development 开发环境
    * production 生产环境（压缩代码）