
const sum = (...args) => args.reduce((p, c) => p + c, 0);

// es6的模块化: 默认暴露
export default sum;