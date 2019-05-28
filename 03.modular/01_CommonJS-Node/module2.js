
function mul(x, y) {
  return x * y;
}

// 暴露出去
exports.mul = mul; // { mul }
// exports.add = add; // { mul }
// exports.aaa = aaa; // { mul }
// exports.bbb = bbb; // { mul }

// module.exports.mul = mul;
/*module.exports = {
  mul: mul,
  add: add,
}*/

// exports = mul;  // {}