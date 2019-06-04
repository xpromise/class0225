const express = require('express');
const { resolve } = require('path');

const db = require('./db');
const Users = require('./models/users');

const app = express();

/*
  1. 需要通过自己服务器访问登录/注册页面
    设置路由

  2. Error: Cannot find module 'xxx'
    - 第一个模块没有下载，使用npm下载
    - 第二个模块路径写错了。写正确路径
 */

// 登录路由
app.get('/login', (req, res) => {
  // 返回登录页面
  res.sendFile(resolve(__dirname, 'public/login.html'));
});

// 注册路由
app.get('/register', (req, res) => {
  // 返回注册页面
  res.sendFile(resolve(__dirname, 'public/register.html'));
});

(async () => {
  await db;

  // 提交登录请求访问的路由
  app.get('/req/login', (req, res) => {

  });

  // 提交注册请求访问的路由
  app.get('/req/register', async (req, res) => {
    /*
      1. 获取用户提交请求参数 req.query
      2. 对用户提交的数据校验，正则验证
      3. 判断用户名是否存在，存在返回错误  Users.findOne
      4. 不存在才能注册，保存在数据库中 Users.create
     */

    // 1. 获取用户提交请求参数 req.query
    const { username, password, rePassword, email } = req.query;
    // 2. 对用户提交的数据校验，正则验证
    // 创建正则规则
    const usernameReg = /^[a-zA-Z0-9_]{5,10}$/;  // 用户名可以包含英文、数字、下划线，长度为5-10位
    const passwordReg = /^[a-zA-Z0-9_]{5,15}$/;  // 密码可以包含英文、数字、下划线，长度为5-15位
    const emailReg = /^\w{3,10}@\w{2,5}\.c(om|n)$/;
    // 分别对数据进行校验
    if (!usernameReg.test(username)) {
      // 说明用户名有问题，提示错误问题
      res.send('用户名可以包含英文、数字、下划线，长度为5-10位');
      return;
    }

    if (!passwordReg.test(password)) {
      res.send('密码可以包含英文、数字、下划线，长度为5-15位');
      return;
    }

    if (!emailReg.test(email)) {
      res.send('邮箱不合法，请重新输入');
      return;
    }

    if (password !== rePassword) {
      res.send('两次输入密码不一致，请重新输入');
      return;
    }

    // 3. 判断用户名是否存在，存在返回错误  Users.findOne
    const result = await Users.findOne({username});

    if (result) {
      // 有值说明用户存在
      res.send('用户名已存在');
    } else {
      // 4. 不存在才能注册，保存在数据库中 Users.create
      const result = await Users.create({username, password, email});
      console.log(result);
      res.send(`${username}注册成功`);
    }

  });

})();


app.listen(3000, (err) => {
  if (!err) console.log('服务器启动成功了~');
  else console.log(err);
});