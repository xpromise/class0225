const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/ajax', (req, res) => {
  console.log('接收到请求了~');
  res.end('9527');
});

app.listen(3000, (err) => {
  if (!err) console.log('服务器启动成功了~');
  else console.log(err);
});