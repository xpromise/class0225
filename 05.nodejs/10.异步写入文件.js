
// 引入fs模块
const fs = require('fs');

// 打开文件
fs.open('./4.txt', 'w', function (err, fd) {
  /*
    err 代表错误，如果方法出错了，err就是一个对象。如果方法没有出错，就是null
    今后会发现nodejs特点，所有回调函数中第一个参数默认是err。错误优先机制
   */
  if (!err) {
    // 写入文件
    fs.write(fd, '今天天气真晴朗', function (err) {
      if (!err) {
        console.log('文件写入成功~');
      } else {
        console.log('文件写入失败', err);
      }
      // 不管成功还是失败都要关闭文件
      fs.close(fd, function (err) {
        if (!err) {
          console.log('文件关闭成功~');
        } else {
          console.log('文件关闭失败', err);
        }
      })
    })
  } else {
    console.log('文件打开失败', err);
  }

});

