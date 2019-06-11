const fs = require('fs');

setImmediate(() => {
  console.log('setImmediate() 222');
});
// 读取文件是要消耗时间
fs.readFile('test5.js', (err, data) => {
  if (!err) console.log('readFile() 333');
  else console.log(err);
});

setTimeout(() => {
  console.log('setTimeout() 444');
}, 0);



