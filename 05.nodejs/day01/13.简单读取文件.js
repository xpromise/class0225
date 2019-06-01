

const fs = require('fs');

fs.readFile('./6.txt', function (err, data) {
  if (!err) {
    // 读取文件的数据。 默认是二进制数据。
    console.log(data.toString());
  } else {
    console.log(err);
  }
});