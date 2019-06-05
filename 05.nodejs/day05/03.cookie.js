const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
/*
  cookie:
    1. 是什么？
      本质上储存在浏览器的文本，key-value
    2. 作用：
      存储少量数据
      解决http协议无状态的问题
    3. 工作原理：
      首次：客户端发送请求到服务端，服务端判断是否成功，成功就返回一个代表加密后用户信息的cookie给客户端，客户端接收到就会保存下载
      下次；客户端再次发送请求，会自动携带上cookie，服务端通过分析cookie就能判断是哪个用户进行的操作，从而给指定用户做出特定的响应
    4. 使用：
      设置cookie
        res.cookie(key, value[, options])
      获取cookie
        req.cookies
      删除cookie
        res.clearCookie(key)
    5. 时效性
      临时/会话存储： 当服务器返回cookie开始会话，关闭浏览器就会结束会话
        res.cookie('user', 'sunwukong');
      持久化cookie
        res.cookie('user', 'sunwukong', {maxAge: 1000 * 3600 * 24 * 365 * 10});
 */

// 使用第三方中间件，解析cookie数据
app.use(cookieParser());  // 解析请求头cookie数据称为一个对象，将对象挂载到req.cookies

app.get('/cookie1', (req, res) => {
  // 设置cookie
  res.cookie('user', 'sunwukong');
  // 返回响应
  res.end('success1');
});

app.get('/cookie2', (req, res) => {
  // 获取cookie, 一般会借助第三方中间件帮助我们解析cookie数据：cookie-parser
  // console.log(req.headers);
  console.log(req.cookies);
  /*
    { 'Webstorm-d632f404': '6dd4cb30-4200-4430-b5a8-a4ca17524f5d',
  'Webstorm-ef037c84': '6dd4cb30-4200-4430-b5a8-a4ca17524f5d',
  user: 'sunwukong' }
   */
  // 返回响应
  res.end('success2');
});

app.get('/cookie3', (req, res) => {
  // res.clearCookie('user');
  res.cookie('user', 'sunwukong', { maxAge: 0 });
  res.end('success3');
});

app.listen(3000, (err) => {
  if (!err) console.log('服务器启动成功了~');
  else console.log(err);
});