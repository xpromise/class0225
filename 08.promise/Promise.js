(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : // 检测是否是commonjs，如果是就以commonjs方式暴露
    typeof define === 'function' && define.amd ? define(factory) :  // 检测是否是AMD / requirejs，如果是就以AMD方式定义模块
      (global.Promise = factory()); // 既不是commonjs 也不是AMD，就是window.Promise = factory()
}(this, (function () {
  'use strict';

  function Promise() {

  }

  Promise.prototype.then = function () {

  };

  Promise.prototype.catch = function () {

  };

  Promise.resolve = function () {

  };

  Promise.reject = function () {

  };

  Promise.all = function () {

  };

  return Promise;

})));