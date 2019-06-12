"use strict";

var _module = _interopRequireDefault(require("./module1"));

var _module2 = require("./module2");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 引入
console.log((0, _module["default"])(1, 2, 3, 4));
console.log(_module2.name, _module2.age);