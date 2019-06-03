// 引入nodejs核心模块
const http = require('http');
// 创建服务
const server = http.createServer((request, response) => {
  // 回调函数：当服务器接收到请求时，会自动调用回调函数处理请求
  // request: 请求信息
  // response: 响应信息
  // 如何访问服务器/如何发送请求：在浏览器输入服务器地址 http://localhost:3000

  // 接收请求参数，通过请求参数来判断
  console.log(request.url); // /?username=bob&age=18
  if (request.url !== '/favicon.ico') {
    const queryArr = request.url.split('?')[1].split('&'); // ['username=bob', 'age=18'] --> {username: 'bob', age: 18}
    const queryString = queryArr.reduce((prev, curr) => {
      // 数组的解构赋值
      const [ key, value ] = curr.split('=');
      prev[key] = value;
      return prev;
    }, {});
    console.log(queryString); // { username: 'bob', age: '18' }
  }
  // 告诉浏览器，请使用utf8解码
  response.setHeader('content-type', 'text/html;charset=utf-8');
  // 返回响应数据
  response.end('<h1>这是nodejs服务器返回的响应数据</h1>');
});
// 监听端口号
server.listen(3000, (err) => {
  if (!err) console.log('服务器启动成功了~');
  else console.log('服务器启动失败了', err);
});