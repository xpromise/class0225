/*
  nodejs是使用js开发的。难道是包含所有js吗？
  browser的js：
    DOM  document
    BOM  window
    ES 语法规范

  nodejs的js：
    DOM 没有
    BOM 基本没有，但是有个别：
      console
      setTimeout
      setInterval
    ES 基本全部包含

    nodejs有一个全局对象： global
      console
      setInterval
      setTimeout
      setImmediate 立即执行函数
      Buffer
      process.nextTick 立即执行函数
 */

// console.log(global);
/*
  https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/
  nodejs事件轮询机制：
    1. timers 定时器阶段
      计时，执行到点的定时器回调函数
    2. pending callbacks
    3. idle, prepare
    4. poll 轮询阶段
      轮询队列，里面放置n个回调函数。
      首先检查轮询队列是否为空：
        - 不为空：依次取出，同步执行
        - 空
          - 如果之前设置过setImmediate函数，就去下一个check阶段
          - 如果没有设置过setImmediate函数，就在当前阶段停留
          - 如果定时器到点了，也会去下一个check阶段
    5. check 检查阶段
      执行setImmediate的回调函数
    6. close callbacks 关闭阶段

    事件轮询：反复执行这6个阶段。一般来讲第四阶段停留最长（绝大部分回调函数都是第四阶段执行的）

    process.nextTick能在任意阶段优先执行
 */
process.nextTick(() => {
  console.log('process.nextTick()');
});

setImmediate(() => {
  console.log('setImmediate()');
});

setTimeout(() => {
  console.log('setTimeout()');
}, 10);


console.log('全局代码执行完了~');