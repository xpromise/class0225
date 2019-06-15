function throttle(fn, time) {
  // 开始时间
  let startTime = 0;
  // 实际上下面函数就是DOM事件回调函数
  return function () {

    // 结束时间: 调用当前函数的时间
    const endTime = Date.now();
    // fn函数的this指向问题，参数有问题（少event）
    if (endTime - startTime >= time) {
      // 大于1s, 可以触发， 小于1s就不触发
      fn.apply(this, arguments);
      // 重置开始时间
      startTime = endTime;
    }
  }
}

function debounce(fn, time) {
  let timerId = null;
  // 实际上下面函数就是DOM事件回调函数
  return function () {
    clearTimeout(timerId);
    const args = arguments;
    timerId = setTimeout(() => {
      // fn函数的this指向问题，参数有问题（少event）
      // 大于1s, 可以触发， 小于1s就不触发
      fn.apply(this, args);
    }, time);
  }
}

export {throttle, debounce};