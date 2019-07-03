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
          _self.callbacks.forEach((fnObj) => fnObj.onFulfilled(value))
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

  Promise.prototype.then = function (onFulfilled, onRejected) {
    const status = this.status;
    const _self = this;

    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : function (value) { return value };
    onRejected = typeof onRejected === 'function' ? onRejected : function (reason) { throw reason };

    let promise;

    if (status === 'pending') {
      // 当前处理的promise对象的状态为初始化状态
      promise = new Promise(function (resolve, reject) {
        _self.callbacks.push({
          onFulfilled: function (value) {
            /*try {
              const result = onFulfilled(value);
              if (result instanceof Promise) {
                result.then(resolve, reject);
              } else {
                resolve(result);
              }
            } catch (e) {
              reject(e);
            }*/
            handlePromiseStatus(resolve, reject, onFulfilled, value);
          },
          onRejected: function (reason) {
            /*try {
              const result = onRejected(reason);
              if (result instanceof Promise) {
                result.then(resolve, reject);
              } else {
                resolve(result);
              }
            } catch (e) {
              reject(e);
            }*/
            handlePromiseStatus(resolve, reject, onRejected, reason);
          }
        })
      });

    } else if (status === 'fulfilled') {
      // 当前处理的promise对象的状态为成功状态
      promise = new Promise((resolve, reject) => {
        setTimeout(function () {
          /*try {
            // 执行成功的回调函数 - 异步执行
            // 将前面resolve(value),传入进成功回调
            const result = onFulfilled(_self.data);

            if (result instanceof Promise) {
              // 说明成功的回调函数返回值是promise对象
              /!*result.then(function (value) {
                resolve(value)
              }, function (reason) {
                reject(reason)
              })*!/
              result.then(resolve, reject);
            } else {
              // 说明不是promise对象，默认返回成功状态的promise
              resolve(result);
            }
          } catch (e) {
            reject(e);
          }*/
          handlePromiseStatus(resolve, reject, onFulfilled, _self.data);
        });
      });
    } else {
      // 当前处理的promise对象的状态为失败状态
      promise = new Promise((resolve, reject) => {
        setTimeout(function () {
          /*try {
            const result = onRejected(_self.data);
            if (result instanceof Promise) {
              result.then(resolve, reject);
            } else {
              resolve(result);
            }
          } catch (e) {
            reject(e);
          }*/
          handlePromiseStatus(resolve, reject, onRejected, _self.data);
        })
      });
    }

    return promise;
  };

  function handlePromiseStatus(resolve, reject, fn, data) {
    try {
      const result = fn(data);
      if (result instanceof Promise) {
        result.then(resolve, reject);
      } else {
        resolve(result);
      }
    } catch (e) {
      reject(e);
    }
  }

  Promise.prototype.catch = function (onRejeced) {
    return this.then(null, onRejeced);
  };

  Promise.resolve = function (value) {
    if (value instanceof Promise) return value;

    return new Promise((resolve, reject) => {
      resolve(value);
    })
  };

  Promise.reject = function (reason) {
    return new Promise((resolve, reject) => {
      reject(reason);
    })
  };

  Promise.all = function (promises) {
    let resolvedNum = 0;
    const promisesLength = promises.length;
    const results = new Array(promisesLength);

    return new Promise((resolve, reject) => {
      promises.forEach((promise, index) => {
        promise.then((value) => {
          // 成功
          // 保证对应的添加数据
          results[index] = value;
          resolvedNum++;
          if (resolvedNum === promisesLength) {
            // 全部成功
            resolve(results);
          }
        }, (reason) => {
          // 失败
          reject(reason);
        })
      })

    })

  };

  Promise.race = function (promises) {

    // return new Promise((resolve, reject) => promises.forEach((promise) => promise.then(resolve, reject)))
    return new Promise((resolve, reject) => {
      promises.forEach((promise) => {
        promise.then((value) => {
          // 成功
          resolve(value);
        }, (reason) => {
          // 失败
          reject(reason);
        })
      })

    })

  };

  return Promise;

})));