const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const _ = require('koa-route');

const router1 = require('./router');

// 创建app应用对象
const app = new Koa();
// 解析post请求体数据，挂载到context.request.body上
app.use(bodyParser());

app.use(_.get('/login', (ctx) => {
  ctx.body = '这是login路由返回的响应~';
}));

app
  .use(router1.routes())
  .use(router1.allowedMethods());

// 设置中间件
app.use((context, next) => {
  /*
    context 相当于 req和res集合体
   */
  // 获取请求参数
  console.log(context.query); // 查询字符串参数
  console.log(context.request.body); // 请求体参数
  console.log(context.headers);

  console.log('中间件1触发了~');
  // context.body = '这是服务器返回响应~';
  next();
});

app.use((context, next) => {
  /*
    context 相当于 req和res集合体
   */
  console.log('中间件2触发了~');
  context.body = '这是服务器返回响应~';
});

// 监听端口号
app.listen(3000, (err) => {
  if (!err) console.log('服务器启动成功了~');
  else console.log(err);
});