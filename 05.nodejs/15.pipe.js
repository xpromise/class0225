
const fs = require('fs');
// 创建可读流
const rs = fs.createReadStream('C:\\Users\\XiongJian\\Desktop\\异步写入文件.avi');
// 创建可写流
const ws = fs.createWriteStream('./a.avi');


rs.pipe(ws);

