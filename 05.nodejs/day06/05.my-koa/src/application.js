const http = require('http');

module.exports = class Application {
  constructor() {
    // 初始化中间件数组
    this.middleware = [];
  }

  use(fn) {
    this.middleware.push(fn);
    // 为了链式调用
    return this;
  }

  listen(...args) {
    const server = http.createServer(this.callback());
    server.listen(...args);
  }

  callback() {
    const fn = compose(this.middleware);

    return (req, res) => {
      // 执行中间件函数处理请求、返回响应
      fn(req, res).then(() => {
        console.log('所有中间件函数执行完了~');
      }).catch()
    }
  }

}

// 高阶函数：执行函数返回另外一个函数。
// 给内部函数传参的
function compose(middlewareFn) {
  return function (req, res) {
    let index = -1;
    return dispatch(0);
    // dispatch函数就会调用应该触发的中间件函数，并且实现next方法
    function dispatch(i) {
      if (i <= index) return Promise.reject(new Error('一个中间件函数中不能调用多次next方法'));
      // 取出中间件数组中第i个中间件函数
      const fn = middlewareFn[i];
      index = i;
      // 处理异常，如果没有中间件函数，就不在执行
      if (!fn) return Promise.resolve();
      // dispatch.bind(null, i + 1)实现的next方法，调用下一个中间件函数
      return Promise.resolve(fn(req, res, dispatch.bind(null, i + 1)));
    }
  }
}