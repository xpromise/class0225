const express = require('express');
const { resolve } = require('path');
const sha1 = require('sha1');

const db = require('./db');
const Users = require('./models/users');

const app = express();

/*
  1. 将登陆请求改为post请求方式
    将请求方式改为post方式
    加上内置中间件解析请求头数据
  2. 提取公共代码
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
  // 内置中间件：解析请求体数据
  app.use(express.urlencoded({extended: true}));
  // 应用级中间件：提取公共代码
  app.use((req, res, next) => {
    const { username, password, rePassword, email } = req.body;
    // 2. 对用户提交的数据校验，正则验证
    // 创建正则规则
    const usernameReg = /^[a-zA-Z0-9_]{5,10}$/;  // 用户名可以包含英文、数字、下划线，长度为5-10位
    const passwordReg = /^[a-zA-Z0-9_]{5,15}$/;  // 密码可以包含英文、数字、下划线，长度为5-15位
    const emailReg = /^\w{3,10}@\w{2,5}\.c(om|n)$/;

    // console.log(req.url);
    const isRegister = req.url === '/register';

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

    if (isRegister && !emailReg.test(email)) {
      res.send('邮箱不合法，请重新输入');
      return;
    }

    if (isRegister && password !== rePassword) {
      res.send('两次输入密码不一致，请重新输入');
      return;
    }

    next();
  });

  // 提交登录请求访问的路由
  app.post('/login', async (req, res) => {
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
      res.send(`${username}登录成功`);
    } else {
      // 一般不会具体返回是用户名错误还是密码错误
      // 反正别人试密码
      res.send(`${username}登录失败，用户名或密码错误`);
    }

  });

  // 提交注册请求访问的路由
  app.post('/register', async (req, res) => {
    const { username, password, email } = req.body;

    // 3. 判断用户名是否存在，存在返回错误  Users.findOne
    const result = await Users.findOne({username});

    if (result) {
      // 有值说明用户存在
      res.send('用户名已存在');
    } else {
      // 4. 不存在才能注册，保存在数据库中 Users.create
      const result = await Users.create({username, password: sha1(password), email});
      console.log(result);
      res.send(`${username}注册成功`);
    }

  });

})();


app.listen(3000, (err) => {
  if (!err) console.log('服务器启动成功了~');
  else console.log(err);
});