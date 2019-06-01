

const fs = require('fs');

fs.writeFile('5.txt', 'hello fs', {flags: 'w', mode: 0o666, encoding: 'utf-8'}, function (err) {
  if (!err) {
    console.log('文件写入成功~');
  } else {
    console.log(err);
  }
})