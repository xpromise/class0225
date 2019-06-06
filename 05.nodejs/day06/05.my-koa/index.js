const Koa = require('./src/application');

const app = new Koa();


app.use((req, res, next) => {
  console.log('中间件函数1触发了~');
  next(); // dispatch(1)
  // next(); // dispatch(1)
  // next(); // dispatch(1)
  // next(); // dispatch(1)
});

app.use((req, res, next) => {
  console.log('中间件函数2触发了~');
  // 返回响应
  res.end('success');
  next(); // dispatch(2)
});

app.listen(3000, (err) => {
  if (!err) console.log('服务器启动成功~');
  else console.log(err);
})