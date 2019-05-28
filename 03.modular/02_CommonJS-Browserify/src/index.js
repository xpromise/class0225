/*
  主模块：app main index
    负责引入其他模块内容使用

  让浏览器平台认识commonjs模块化语法：
    将commonjs语法通过工具编译成浏览器能识别的语法
    工具： browserify
    下载并安装：在cmd中输入指令： npm i browserify -g
     使用： 在cmd中输入指令：browserify ./src/index.js -o ./build/built.js
 */
// 同步加载，有缓存
const count = require('./module1');
const { name, age } = require('./module2');

console.log(count(2,3));
console.log(name, age);