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
    const server = http.createServer((req, res) => {
      this.middleware.forEach((fn) => fn(req, res));
    });
    server.listen(...args);
  }

};
