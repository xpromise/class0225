const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const db = require('./db');

const uiRouter = require('./routers/ui-router');
const userRouter = require('./routers/user-router');

const app = express();
/*
  路由器router：
    用来分类管理路由
 */
app.set('view engine', 'ejs');
app.set('views', 'views');

/*
  cookie: 用于在浏览器端存储用户非敏感数据
  session：用于在服务器端存储用户敏感数据
 */

app.use(session({
  secret: 'hello atguigu 0225', // 参与session_id加密的字段
  saveUninitialized: false, // 如果请求没有使用上session保存数据，这次请求就不会创建session对象
  resave: false, // 没有修改session对象，就不会重新保存
  store: new MongoStore({  // 保存session对象的仓库
    url: 'mongodb://localhost:27017/exec',
    touchAfter: 24 * 3600, // 24小时只更新一次
    ttl: 3600 * 24 * 7  // 7天后自动清除所有数据
  }),
  cookie: {
    maxAge: 1000 * 3600 * 24 * 7  // 7天过期
  }
}));

// 7. 在app上应用路由器
app.use(uiRouter);

(async () => {
  await db;
  app.use(userRouter);
})();

app.listen(3000, (err) => {
  if (!err) console.log('服务器启动成功了~');
  else console.log(err);
});