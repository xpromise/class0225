// 都可以引入其他模块内容
const count = require('./module1');

console.log(count(2, 8));

const name = 'jack';
const age = 18;

module.exports = {
  name,
  age
};