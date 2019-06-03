const express = require('express');
const { resolve } = require('path');
const app = express();

/*
  1. 需要通过自己服务器访问登录/注册页面
    设置路由
 */

// 登录路由
app.get('/login', (req, res) => {
  // 返回登录页面
  res.sendFile(resolve(__dirname, 'public/login.html'));
});
// 提交登录请求访问的路由
app.get('/req/login', (req, res) => {

});

// 注册路由
app.get('/register', (req, res) => {
  // 返回注册页面
  res.sendFile(resolve(__dirname, 'public/register.html'));
});
// 提交注册请求访问的路由
app.get('/req/register', (req, res) => {
  /*
    1. 获取用户提交请求参数 req.query
    2. 对用户提交的数据校验，正则验证
    3. 判断用户名是否存在，存在返回错误  Users.findOne
    4. 不存在才能注册，保存在数据库中 Users.create
   */
});


app.listen(3000, (err) => {
  if (!err) console.log('服务器启动成功了~');
  else console.log(err);
});