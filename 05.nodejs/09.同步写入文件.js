// nodejs中核心模块
// fs文件系统 --> 操作计算机系统的文件（CRUD）
const fs = require('fs');
/*
  同步写入文件
    1. fs.openSync(path, flags[, mode]);
      path 文件路径
      flags 要执行的操作
        'w' write
        'r' read
      mode 设置文件的权限。可选值（可传可不传，一定有默认值） 0o666 可读可写
        0o111  文件可执行
        0o222  文件可写入
        0o444  文件可读取
    2. fs.writeSync(fd, string[, position[, encoding]])
      fd 文件描述符
      string 要写入的内容
      position 从哪个位置开始写入 默认值0
      encoding 编码方式 utf-8
 */

// 1. 打开文件
const fd = fs.openSync('./3.txt', 'w', 0o666);
console.log(fd); // 文件描述符，代表当前读取的文件
// 2. 写入文件   中文占三个字节，英文占一个字节
const result = fs.writeSync(fd, '下雨，真烦', 10);
console.log(result);
// 3. 关闭文件
fs.closeSync(fd);