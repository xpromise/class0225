const express = require('express');
const app = express();

/*
  middleware中间件
    1. 是什么： 本质上就是一个函数
    2. 组成: (req, res, next) => {}
      req: request对象
      res: response对象
      next: 函数，用来执行堆栈中下一个中间件函数
    3. 作用：
      - 执行任意代码
      - 接收请求、处理请求、返回响应
      - 执行堆栈中下一个中间件/路由函数
      - 修改请求req和响应res对象: 一次请求中，所有中间件共享同一个req和res
    4. 服务器执行
      服务器启动时，会将所有中间件/路由都按照代码的先后顺序添加到一个数组中。
      当访问服务器时（向服务器发送请求），遍历这个数组，依次取出其中的中间件/路由。
        如果取出中间件。中间件默认接收处理所有请求，就会执行。
          如果中间件调用了next方法，还会接下去遍历这个数组
          如果没有调用，就终止了
        如果取出路由，看请求方式和请求路径是否匹配上，匹配上就执行，终止。
          没有匹配上，还会接下去遍历这个数组，
          所有都没有匹配上，就返回404

    解决反复重启服务器问题：
      npm i nodemon -g
      作为指令：启动服务器通过 nodemon app.js来启动
      监听app.js里面所有文件的变化，一旦文件发生变化，会自动重启服务器
 */


// 能接收处理所有类型的请求
app.use((req, res, next) => {
  console.log('中间件函数触发了111~');
  // console.log(req.query);
  // res.end('success');
  // req.xxx = 123;
  // 执行下一个中间件/路由函数
  next();
});

app.get('/', (req, res) => {
  console.log('路由触发了~');
  res.end('success');
});


/*app.use((req, res, next) => {
  console.log('中间件函数触发了222~');
  console.log(req.xxx);
  next();
});

app.use((req, res, next) => {
  console.log('中间件函数触发了333~');
});*/



app.listen(3000, (err) => {
  if (!err) console.log('服务器启动成功了~');
  else console.log(err);
});