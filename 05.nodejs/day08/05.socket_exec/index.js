const express = require('express');
// 引入socket. 为了执行里面代码
require('./socket');

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.post('/login', (req, res) => {
  // 获取请求参数
  const { username } = req.body;
  // 返回一个cookie
  res.cookie('username', username, { maxAge: 1000 * 3600 * 24 });
  // 返回一个聊天页面
  res.redirect('/chat.html');
});

app.listen(4000, (err) => {
  if (!err) console.log('服务器启动成功了~', 4000);
  else console.log(err);
})