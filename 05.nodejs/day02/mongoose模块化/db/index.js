/*
  用来连接数据库模块
 */
// 引入mongoose模块
const mongoose = require('mongoose');

const promise = new Promise((resolve, reject) => {
  // 连接数据库
  mongoose.connect('mongodb://localhost:27017/mongoose_test', { useNewUrlParser: true, useCreateIndex: true });
  // 监听数据库是否连接成功
  mongoose.connection.once('open', (err) => {
    if (!err) {
      console.log('数据库连接成功了~');
      resolve();
    } else {
      console.log('数据库连接失败', err);
      reject();
    }
  })
});

// 暴露promise
module.exports = promise;

