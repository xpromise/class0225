// 请说说以下代码的执行顺序
const promise = new Promise((resolve, reject) => {
  reject(true);
});

promise
  .then(() => {
    process.nextTick(() => {
      console.log('process.nextTick() 111');
    });
    console.log('then() 111');
  })
  .catch(() => {
    process.nextTick(() => {
      console.log('process.nextTick() 222');
    });
    console.log('catch() 222');
  })
  .then(() => {
    process.nextTick(() => {
      console.log('process.nextTick() 333');
    });
    console.log('then() 333');
  })
  .catch(() => {
    process.nextTick(() => {
      console.log('process.nextTick() 444');
    });
    console.log('catch() 444');
  })
  .finally(() => {
    process.nextTick(() => {
      console.log('process.nextTick() 555');
    });
    console.log('finally() 555');
  });

process.nextTick(() => {
  console.log('process.nextTick() 666');
});

/*
  第一梯队设置了4个微任务 [nextTick, catch, then, finally]
  执行第一梯队微任务时，又创建了第二梯队的微任务 [nextTick, nextTick, nextTick]

  先执行完第一梯队所有微任务，再执行第二梯队的微任务
 */
