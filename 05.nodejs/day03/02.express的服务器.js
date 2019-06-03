// 引入express模块 （npm i express）
const express = require('express');
// 创建app应用对象
const app = express();
// 设置路由/中间件  来处理请求-返回响应
/*
  请求地址：
    http://localhost:3000/test
    协议名://域名（ip地址）:端口号/路径
      localhost 代表本机默认域名
      127.0.0.1 代表本机默认ip地址
      192.168.1.2 代表本机在局域网的ip地址

    默认端口号：
      https 443
      http 80
    默认资源名
      index.html
  请求方式：
    get 查
    post 增
    put 改
    delete 删
 */
app.get('/test', (request, response) => {
  /*
    request 请求信息：浏览器发送服务器
    response 响应信息：服务器发送给浏览器
   */
  // 接收请求参数
  const queryString = request.query; // 查询字符串参数
  console.log(queryString); // { username: 'bob', age: '18' }
  // 返回响应
  response.send('<h1>这是express服务器返回的响应</h1>');
});

// 监听端口号
app.listen(3000, (err) => {
  if (!err) console.log('服务器启动成功了~');
  else console.log(err);
});
