/*
  定义有依赖的模块
 */

define(['module1'], function (m1) {

  function alertMsg() {
    alert(m1.name);
  }

  // 暴露出去
  return alertMsg;

})