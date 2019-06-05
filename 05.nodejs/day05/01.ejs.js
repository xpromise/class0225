const express = require('express');
const app = express();

/*
  1. 服务器渲染技术： ejs：一个js的模板引擎
    服务器将数据渲染到页面上，再将渲染完成的页面返回给前端
  2. 使用：
    1. 下载ejs (不需要引入)
      npm i ejs
    2. 配置ejs
      app.set('view engine', 'ejs');
      app.set('views', 'views');
    3. 将服务器的数据渲染指定模板资源上
      res.render(模板资源, 数据);
  3. 作用：
    - 加快首屏渲染速度
    - 做SEO

 */
// 配置使用哪个模板引擎
app.set('view engine', 'ejs');
// 配置模板资源目录（模板引擎就会去模板资源目录下找指定资源文件，然后解析）
app.set('views', 'views');

app.get('/ejs', (req, res) => {
  const person = {name: '<p>jack</p>', age: '<p>18</p>'};
  const arr = [1, 2, 3, 4, 5, 6];
  // 将服务器的数据渲染指定模板资源上，并返回给前端
  res.render('index', {person, arr});
});

app.listen(3000, (err) => {
  if (!err) console.log('服务器启动成功了~');
  else console.log(err);
})