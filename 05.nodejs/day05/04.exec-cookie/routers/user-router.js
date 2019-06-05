const express = require('express');
const sha1 = require('sha1');

const { resolve } = require('path');

const Users = require('../models/users');

const router = new express.Router();

// 内置中间件：解析请求体数据
router.use(express.urlencoded({extended: true}));
// 应用级中间件：提取公共代码
router.use((req, res, next) => {
  const { username, password, rePassword, email } = req.body;
  // 2. 对用户提交的数据校验，正则验证
  // 创建正则规则
  const usernameReg = /^[a-zA-Z0-9_]{5,10}$/;  // 用户名可以包含英文、数字、下划线，长度为5-10位
  const passwordReg = /^[a-zA-Z0-9_]{5,15}$/;  // 密码可以包含英文、数字、下划线，长度为5-15位
  const emailReg = /^\w{3,10}@\w{2,5}\.c(om|n)$/;

  // console.log(req.url);
  const isRegister = req.url === '/register';

  // 定义错误对象
  const errMsg = {
    username,
    email
  };

  // 分别对数据进行校验
  if (!usernameReg.test(username)) {
    // 说明用户名有问题，提示错误问题
    errMsg.usernameErr = '用户名可以包含英文、数字、下划线，长度为5-10位';
  }

  if (!passwordReg.test(password)) {
    errMsg.passwordErr = '密码可以包含英文、数字、下划线，长度为5-15位';
  }

  if (isRegister && !emailReg.test(email)) {
    errMsg.emailErr = '邮箱不合法，请重新输入';
  }

  if (isRegister && password !== rePassword) {
    errMsg.rePasswordErr = '两次输入密码不一致，请重新输入';
  }

  // 判断是否出错，出错就直接返回响应。不去下一步（优化少进行数据库操作）
  if (errMsg.usernameErr || errMsg.passwordErr || errMsg.emailErr || errMsg.rePasswordErr) {
    if (isRegister) {
      res.render('register', {errMsg});
    } else {
      res.render('login', {errMsg});
    }
    return;
  }

  next();
});

// 提交登录请求访问的路由
router.post('/login', async (req, res) => {
  // 1. 获取用户提交请求参数
  const { username, password } = req.body;
  /*
    sha1加密：
      1. 不可逆方式加密。理论上不能逆向破解
      2. 同样的明文加密后会得到相同的密文。

      atguigu0225_H   bc609bf58fb76a7b2a10af54a15dfb47ad90678f
   */
  const result = await Users.findOne({username, password: sha1(password)});

  if (result) {
    // 有值说明用户存在
    // 设置cookie：代表当前用户
    res.cookie('user', result.id, {maxAge: 1000 * 3600 * 24 * 7});
    // res.redirect('http://localhost:3000/usercenter');
    // 当访问的地址和当前服务器地址一样，就可以省略前面部分
    res.redirect('/usercenter');
    // 不会修改网址。
    // res.sendFile(resolve(__dirname, '../public/user-center.html'));
  } else {
    // 一般不会具体返回是用户名错误还是密码错误
    // 反正别人试密码
    res.render('login', {errMsg: {err: '登录失败，用户名或密码错误', username}});
  }

});

// 提交注册请求访问的路由
router.post('/register', async (req, res) => {
  const { username, password, email } = req.body;

  // 3. 判断用户名是否存在，存在返回错误  Users.findOne
  const result = await Users.findOne({username});

  if (result) {
    // 有值说明用户存在
    res.render('register', {errMsg: {usernameErr: '用户名已存在', username, email}});
  } else {
    // 4. 不存在才能注册，保存在数据库中 Users.create
    const result = await Users.create({username, password: sha1(password), email});
    console.log(result);
    res.send(`${username}注册成功`);
  }

});

module.exports = router;