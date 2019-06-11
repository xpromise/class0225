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

  fs.readFile('test5.js', function () {
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

    fs.readFile('test5.js', function () {
      console.log('readFile() 333');
    });

    setTimeout(() => {
      console.log('setTimeout() 333');
    }, 0);

    setImmediate(() => {
      console.log('setImmediate() 333');
    });
  });

/*
  先执行微任务：nextTick 111  then 111  catch 111  nextTick 333
    队列中还有6个宏任务[setTimeout 111 333  setImmediate 111 333  fs 111 333]
  再执行宏任务 setTimeout 111  setTimeout 333 setImmediate 111  setImmediate 333
    队列中还有1个微任务  还有5个宏任务 [setTimeout 222 setImmediate 222 fs 111 222 333]
  执行微任务: nextTick 222
  执行宏任务: setTimeout 222 setImmediate 222   fs 111 333 222

  微任务、宏任务中设置的相应的任务，要下一次轮询才执行。
 */



