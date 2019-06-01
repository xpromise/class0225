// nodejs的核心模块
const path = require('path');


// 专门用来处理路径问题
const src = __dirname + '/06.Buffer.js';
// console.log(src);

// 将传入的n个路径，拼接成一个绝对路径返回
console.log(path.resolve('../', '06.Buffer.js')); // C:\Users\XiongJian\Desktop\0225\class0225\05.nodejs\06.Buffer.js

console.log(path.resolve(__dirname, '../04.性能优化', '01_图片性能优化/index.html'));
// 将传入的n个路径，拼接成一个路径返回
console.log(path.join('../', '06.Buffer.js'));
