/*
  主模块
 */

// 引入其他模块
const db = require('./db'); // index.js可以省略。默认找
const students = require('./models/students');

// 保证先连接成功数据库，在进行操作
(async () => {
  await db;
  // 连接成功再去操作数据库
  const result = await students.create({
    name: '沛华',
    age: 35,
    sex: '女',
    hobby: ['抽烟', '喝酒', '烫头'],
    info: '头发掉得很快'
  });

  console.log(result);
})();
