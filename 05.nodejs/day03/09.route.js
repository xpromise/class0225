const express = require('express');
const { resolve }  = require('path');

const app = express();
/*
  设置路由 route
    1. 组成：
      请求方式：get、post、put、delete
      请求路径/路由路径：
        '/'  '/home'  -->  http://localhost:3000/home  (一一对应)
        '/hotel/:id' --> http://localhost:3000/hotel/123456  http://localhost:3000/hotel/aaaa (多对一)
        '/\/food\/(1\d{2}|200)/' --> http://localhost:3000/food/100 http://localhost:3000/food/200 (多对一)
      回调函数（句柄函数、钩子函数） 用来处理请求、返回响应的
        request 请求报文信息
          请求参数
            request.query 获取查询字符串参数
            request.params 获取:id参数
            request.body 获取请求体参数（但是默认不能获取，需要借助中间件解析）
          请求头信息
            request.headers 获取所有请求头信息
        response 响应报文信息
          返回响应：
            response.end()  返回快速响应。 1. 响应内容不做任何处理  2. 直接返回响应
            response.json() 返回响应，先将返回响应的对象/数组转换成json数据，再返回响应
            response.send() 返回响应。对响应的数据做相应的处理：
                1. 如果响应数据是对象，就会转换成json数据
                2. 如果响应数据是字符串，会加上content-type: text/html;charset=utf-8
                ....

            response.download() 返回响应，让客户端下载当前内容
            response.sendFile() 返回响应，让客户端打开当前内容
            response.redirect() 返回响应，请求资源重定向到新的网址，默认状态码302
         设置响应信息:
            response.status() 设置响应状态码
            response.get() 获取响应头信息
            response.set() 设置响应头信息

      注意：返回响应只能做一次，否则就会报错
 */
app.get('/home', (request, response) => {
  // console.log(request.headers.host);
  // response.send('这是服务器返回的响应');
  // response.end('error');
  // response.json({name: 'jack', age: 18});

  // response.download('./index.html');
  // response.sendFile(resolve(__dirname, './index.html'));
  // response.redirect('https://www.baidu.com');


  response.set('xxx', 'yyyyy');
  console.log(response.get('xxx'));

  response.status(500).end('https://www.baidu.com');
});

app.get('/hotel/:id', (request, response) => {
  // 获取到id，去数据库中查找数据，返回给用户
  console.log(request.params);
  response.send('这是服务器返回的响应');
});

app.get(/\/food\/(1\d{2}|200)/, (request, response) => {
  // 获取到id，去数据库中查找数据，返回给用户
  console.log(request.params);
  response.send('这是服务器返回的响应');
});

app.post('/', (request, response) => {

});

app.listen(3000, (err) => {
  if (!err) console.log('服务器启动成功了~');
  else console.log(err);
});