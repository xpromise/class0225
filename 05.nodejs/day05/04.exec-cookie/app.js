const express = require('express');

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