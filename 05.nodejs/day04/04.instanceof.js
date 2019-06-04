/*
  A instanceof B
  检查A.__ptoto__是否与B.prototype相等
 */

function myInstanceof(A, B) {
  // 检查B必须是一个函数类型。 只有函数有prototype
  if (typeof B !== 'function') {
    // 抛异常错误
    throw new Error('B is not a function');
  }
  // 如果A不是对象，就不用检查，直接返回false。
  if (typeof A !== 'object' || A === null) {
    return false;
  }
  // 缓存
  const b = B.prototype;
  // 缓存
  let a = A.__proto__;

  while (a) {
    if (a === b) {
      return true;
    } else {
      // 接着读取原型上的原型
      a = a.__proto__;
      // if (a === null) return false;
    }
  }
  // 如果上面条件都不满足，就一定不是true，那就是false
  return false;
}

console.log(myInstanceof({}, Object));
console.log(myInstanceof([], Object));
console.log(myInstanceof(123, Object));
console.log(myInstanceof(123, Number));

const num = 123;
console.log([] instanceof Object);
console.log({} instanceof Object);
console.log(num instanceof Object);
console.log(num instanceof Number);


