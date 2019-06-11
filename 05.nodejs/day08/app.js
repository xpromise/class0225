const express = require('express');
const app = express();

app.get('/jsonp', (req, res) => {
  // 接收请求参数
  const { callback } = req.query; // 'getDataCallback'

  const data = {name: 'jack', age: 18};

  const result = `${callback}(${JSON.stringify(data)})`;  // getDataCallback({"name": "jack", "age": 18})

  res.end(result);
});

app.get('/cors', (req, res) => {
  // cors方案
  const safeWeb = ['xxx', 'xxx', 'xxx'];
  console.log(req.headers.origin);
  
  // res.set('access-control-allow-origin', '*'); // 允许所有网址进行跨域
  res.set('access-control-allow-origin', 'http://localhost:63342'); // 允许一个网址进行跨域

  res.json({name: 'jack', age: 18});
});

app.listen(3000, (err) => {
  if (!err) console.log('服务器启动成功了~');
  else console.log(err);
});