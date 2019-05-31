
const fs = require('fs');
// 创建可读流
const rs = fs.createReadStream('C:\\Users\\XiongJian\\Desktop\\异步写入文件.avi');
// 创建可写流
const ws = fs.createWriteStream('./a.avi');

rs.once('open', function () {
  console.log('可读流打开了~');
})

rs.once('close', function () {
  console.log('可读流关闭了~');
  // 读取完数据，就说明写入完成。就关闭可写流
  ws.end();
})

// 绑定data事件，读取数据
rs.on('data', function (data) {
  // console.log(data);
  // console.log(data.length); // 65536 byte = 64 kb
  // 将读取的数据写入新的文件
  ws.write(data);
});

