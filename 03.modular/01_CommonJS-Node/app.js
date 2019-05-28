/*
  commonjs模块化规范：
    最早是在nodejs社区使用。后来也前端实现了这个规范。
    使用：
      1. 前端
      2. 后端
        - 搭建nodejs服务器环境
        - 具体使用

    模块化：将一个大的js文件拆分一个个小js模块，最终组合在一起

    使用：
      1. 引入其他模块语法
        require(模块路径)
          模块路径：
            1. 可以省略文件后缀名, 只能省略js、json文件后缀名，别的不行
            2. 只能解析js、json文件，其他文件默认解析不了
            3. 自定义模块的模块路径必须以 ./ 或 ../ 开头，否则报错 cannot find module 'xxx'
               nodejs自带的模块（nodejs核心模块） 和 通过npm下载的模块 的模块路径直接写模块名称

      2. 暴露模块内部数据语法
        module.exports  模块暴露的内容就是 module.exports指向的值。 默认值：{}
          当模块内部只需要暴露一个内容，使用module.exports = xxx(因为使用起来更方便)
        exports.xxx
          当模块内部暴露多项内容，使用exports.xxx = xxx(过去时)
          现在暴露多个还是采用 module.exports = { mul, add }

        模块内部暴露出去：module.exports指向的值（它指向什么，就暴露什么）
        exports是module.exports简写。

 */

// 引入module1模块，才能使用模块暴露的内容
// 得到模块暴露的内容。不是整个模块
const module1 = require('./module1.js');
// const module2 = require('./module2');
// const { mul } = module2;
const { mul } = require('./module2');

const data = require('./data');

const fs = require('fs');


// console.log(fs);
console.log(data);
console.log(module1);  // sum
// console.log(module2); // { mul: xxx }
console.log(module1(1, 2, 3, 4, 5));
console.log(mul(2, 3));