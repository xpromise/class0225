
define(function (require, exports, module) {
  // 引入
  const m1 = require('./module1');

  function showMsg() {
    console.log(m1(2, 3));
  }

  // 暴露
  exports.showMsg = showMsg;
});