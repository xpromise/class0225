(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _module = _interopRequireDefault(require("./module1"));

var _module2 = require("./module2");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 引入
console.log((0, _module["default"])(1, 2, 3, 4));
console.log(_module2.name, _module2.age);
},{"./module1":2,"./module2":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var sum = function sum() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.reduce(function (p, c) {
    return p + c;
  }, 0);
}; // es6的模块化: 默认暴露


var _default = sum;
exports["default"] = _default;
},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.age = exports.name = void 0;
// 分别暴露
var name = 'jack';
exports.name = name;
var age = 18; // 统一暴露

/*
export {
  name,
  age
}
*/

exports.age = age;
},{}]},{},[1])