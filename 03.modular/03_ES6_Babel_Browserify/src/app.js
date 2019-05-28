/*
  ES6的模块化规范：一般只用于浏览器平台

  用法：
    1. 引入模块
      import
        模块路径必须符合commonjs模块化规范
        如果是默认暴露，可以直接用变量接收
        如果是统一/分别暴露，就必须用解构赋值，否则就是undefined
    2. 暴露模块
      export
        默认暴露： 只暴露一项内容
        统一/分别暴露： 暴露多项内容
   特点：
    默认情况下：浏览器和服务器都不支持，所以编译处理
   解决：
     下载：npm install --save-dev @babel/core @babel/cli @babel/preset-env
     babel： 是一个下一代js编译器。 将ES6以上高级语法编译成ES5以下浏览器能识别的语法
     添加文件： .babelrc (运行babel指令，会默认读取配置文件)
     使用： npx babel ./src -d ./build
     作用： 1. 将ES6模块化语法转化为commonjs模块化语法 2. 将ES6以上高级语法编译成ES5以下浏览器能识别的语法
     使用： browserify ./build/app.js -o ./dist/dist.js

     npx babel ./src -d ./build && browserify ./build/app.js -o ./dist/dist.js

 */

// 引入其他模块
// 引入默认暴露
import sum from './module1';
// 引入统一暴露, 必须用对象的解构赋值，否则就是undefined
import { name, age } from './module2';
// 引入分别暴露, 必须用对象的解构赋值，否则就是undefined
import { count, data } from './module3';


console.log(sum(1, 2, 3, 4));
// console.log(name, age);
console.log(person); // undefined
console.log(data);
console.log(count(1, 2));
