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