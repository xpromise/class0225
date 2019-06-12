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