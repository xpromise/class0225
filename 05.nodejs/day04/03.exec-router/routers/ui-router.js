// 1. 引入express
const express = require('express');
const { resolve } = require('path');
// 2. 获取路由器构造函数
const Router = express.Router;
// 3. 创建路由器实例对象
const router = new Router();
// 4. 使用路由器实例对象：可以看做小型app应用对象，有app应用对象部分方法（设置路由和中间件的方法）
// 登录路由
router.get('/login', (req, res) => {
  // 返回登录页面
  res.sendFile(resolve(__dirname, '../public/login.html'));
});

// 注册路由
router.get('/register', (req, res) => {
  // 返回注册页面
  res.sendFile(resolve(__dirname, '../public/register.html'));
});
// 5. 暴露出去
module.exports = router;