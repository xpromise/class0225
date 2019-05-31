/*
 流式写入文件：适用大文件
 */

const fs = require('fs');
// 创建一个可写流
const ws = fs.createWriteStream('./6.txt');
// on 绑定持续事件
// once 绑定一次性事件
ws.once('open', function () {
  console.log('可写流打开了~');
})

ws.once('close', function () {
  console.log('可写流关闭了~');
})

// 往可写流中写入数据
ws.write('锄禾日当午');
ws.write('汗滴禾下土');
ws.write('谁知盘中餐');
ws.write('粒粒皆辛苦');
ws.write('粒粒皆辛苦');
ws.write('粒粒皆辛苦');
ws.write('粒粒皆辛苦');
ws.write('粒粒皆辛苦');
ws.write('粒粒皆辛苦');
ws.write('粒粒皆辛苦');

// 关闭可写流
// ws.close(); 
ws.end();