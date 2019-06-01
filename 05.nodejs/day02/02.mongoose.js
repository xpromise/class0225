/*
  npm init -y
  npm i mongoose

  使用mongoose：
    1. 连接上数据库
    2. 创建约束对象
    3. 创建模型对象
    4. 创建文件对象

 */
// 引入mongoose模块
const mongoose = require('mongoose');
// 1. 连接上数据库
const promise = new Promise((resolve, reject) => {
  mongoose.connect('mongodb://localhost:27017/mongoose_test', { useNewUrlParser: true });
  mongoose.connection.once('open', (err) => {
    if (!err) {
      console.log('数据库连接成功~');
      resolve();
    } else {
      console.log('数据库连接失败', err);
      reject();
    }
  });
});

(async () => {
  // 等等promise状态变成成功，才执行后面代码
  await promise;
  // 2. 创建约束对象
  // 3. 创建模型对象
  // 4. 创建文档对象

})();

