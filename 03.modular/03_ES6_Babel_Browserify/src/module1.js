
function sum(...args) {
  return args.reduce((prev, curr) => prev + curr, 0);
}

// 默认暴露: 只暴露一项内容
export default sum;