
function sum(...args) {
  return args.reduce((prev, curr) => prev + curr, 0);
}

console.log(module.exports === exports); // true

// 将模块内部数据暴露出去，外面才能使用
// 模块暴露的内容就是 module.exports指向的值。 默认值：{}
module.exports = sum;  // sum
// module.exports.sum = sum;  // { sum }