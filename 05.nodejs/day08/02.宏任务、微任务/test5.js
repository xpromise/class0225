// 请说说以下代码的执行顺序
const fs = require('fs');

fs.readFile('test5.js', function () {
  console.log('readFile() 111');
});

setTimeout(() => {
  console.log('setTimeout() 111');
}, 0);

setImmediate(() => {
  console.log('setImmediate() 111');

  process.nextTick(() => {
    console.log('process.nextTick() 222');
  });

  fs.readFile('宏任务和微任务.md', function () {
    console.log('readFile() 222');
  });

  setTimeout(() => {
    console.log('setTimeout() 222');
  }, 0);

  setImmediate(() => {
    console.log('setImmediate() 222');
  });

});

process.nextTick(() => {
  console.log('process.nextTick() 111');
});

Promise.resolve()
  .then(() => {
    console.log('then() 111');
  });

Promise.reject()
  .catch(() => {
    console.log('catch() 111');
    process.nextTick(() => {
      console.log('process.nextTick() 333');
    });

    fs.readFile('宏任务和微任务.md', function () {
      console.log('readFile() 333');
    });

    setTimeout(() => {
      console.log('setTimeout() 333');
    }, 0);

    setImmediate(() => {
      console.log('setImmediate() 333');
    });
  });



