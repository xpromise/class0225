(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : // 检测是否是commonjs，如果是就以commonjs方式暴露
    typeof define === 'function' && define.amd ? define(factory) :  // 检测是否是AMD / requirejs，如果是就以AMD方式定义模块
      (global.Promise = factory()); // 既不是commonjs 也不是AMD，就是window.Promise = factory()
}(this, (function () {
  'use strict';

  function Promise(executor) {
    // 定义promise初始化状态
    this.status = 'pending';
    // 定义异步结果返回值
    this.data = undefined;
    // 定义回调函数数组
    this.callbacks = [];
    // 缓存this
    const _self = this;

    try {
      // 立即调用executor，传入resolve，reject
      executor(resolve, reject);
    } catch (e) {
      // 处理executor函数中throw异常。一旦异常，就改为失败状态
      reject(e);
    }

    // 将promise对象改为成功的状态
    function resolve(value) {
      // promise对象状态只能有初始化变成成功/失败，不能由成功变成失败。
      if (_self.status === 'pending') {
        _self.status = 'fulfilled';
        _self.data = value;

        // 执行成功的回调函数 -> 必须异步执行
        setTimeout(function () {
          _self.callbacks.forEach((fnObj) => fnObj.onFulFilled(value))
        }, 0)
      }
    }
    
    function reject(reason) {
      if (_self.status === 'pending') {
        _self.status = 'rejected';
        _self.data = reason;

        // 失败的回调函数 -> 必须异步执行
        setTimeout(function () {
          _self.callbacks.forEach((fnObj) => fnObj.onRejected(reason))
        }, 0)
      }
    }
    

  }

  Promise.prototype.then = function (onFulFilled, onRejected) {
    this.callbacks.push({
      onFulFilled: onFulFilled,
      onRejected: onRejected
    })
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