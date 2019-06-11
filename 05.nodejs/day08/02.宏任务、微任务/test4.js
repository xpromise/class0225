const fs = require('fs');

setImmediate(() => {
  console.log('setImmediate() 111');
});

fs.readFile('test5.js', (err, data) => {
  if (!err) {
    setImmediate(() => {
      console.log('setImmediate() 222');
    });

    console.log('readFile() 333');

    setTimeout(() => {
      console.log('setTimeout() 444');
    }, 0);
  }
  else console.log(err);
});

setTimeout(() => {
  console.log('setTimeout() 555');
}, 0);

/*
  setTimeout 和 setImmediate  正常是从前到后。先是timers阶段，再是check阶段。所以先定时器回调函数，在执行setImmediate回调函数
  但是，如果是在I/O回调中设定的。因为I/O在poll阶段，执行完poll阶段代码，会来到check阶段，所以这时候会优先执行setImmediate回调函数
  再来到timers阶段执行定时器回调函数
 */



