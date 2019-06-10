const express = require('express');
const app = express();
// 使用内置中间件：暴露服务器的静态资源（只要在public文件夹下面文件，可以直接访问）
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.get('/ajax', (req, res) => {
  console.log('服务器接收到请求了~');
  console.log(req.query);

  res.send('这是服务器返回的响应11111111111~');

});

app.post('/ajax', (req, res) => {
  console.log('服务器接收到请求了~');
  console.log(req.body);

  res.json({name: 'jack', age: 20});

});

app.listen(3000, (err) => {
  if (!err) console.log('服务器启动成功了~');
  else console.log(err);
})