// 1. 引入express
const express = require('express');
const { resolve } = require('path');
const cookieParser = require('cookie-parser');
const Users = require('../models/users');
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
// 为了重定向能够找到当前路由，返回user-center页面
router.get('/usercenter', cookieParser(), async (req, res) => {
  // 获取cookie，判断用户是否登录成功过。就能访问，失败不能访问，就请先登录
  const { user } = req.cookies;

  if (user) {
    // 判断user是否合法
    const result = await Users.findById({_id: user});
    if (result) {
      // 返回注册页面
      res.render('user-center', {username: result.username});
    } else {
      // 没有找到id，去登录
      res.redirect('/login');
    }
  } else {
    // id不存在，去登录
    res.redirect('/login');
  }


});
// 5. 暴露出去
module.exports = router;