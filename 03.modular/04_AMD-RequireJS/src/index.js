
// 配置
requirejs.config({
  baseUrl: './src', // 公共路径
  paths: { // 放置所有模块的路径
    module1: 'module1',  // 不能加文件后缀名
    module2: 'module2',
  }
})

// 引入其他模块
define(['module2'], function (m2) {
  m2();
})