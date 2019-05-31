/*
  commonjs模块化规范
    - 引入
      require(模块路径)
    - 暴露
      exports
      module.exports
        最终暴露的是module.exports指向的值

   所有模块化都有一个特点，每一个模块都包裹了一层函数。
    function (exports, require, module, __filename, __dirname) {xxx}
      exports 暴露
      require 引入
      module 暴露
      __filename 当前文件的绝对路径
      __dirname  当前文件夹的绝对路径
 */

console.log(arguments.callee.toString());
console.log(__filename); // C:\Users\XiongJian\Desktop\0225\class0225\05.nodejs\02.module.js
console.log(__dirname); // C:\Users\XiongJian\Desktop\0225\class0225\05.nodejs