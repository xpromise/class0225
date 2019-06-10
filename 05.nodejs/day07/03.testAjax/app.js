const express = require('express');
const db = require('./db');
const Cities = require('./models/cities');

const app = express();

(async () => {
  await db;
  // 响应省份数据
  app.get('/province', async (req, res) => {
    try {
      // try中放置可能出错的代码。 一旦代码出错，立即中断try中的代码，执行catch中的代码

      // 去数据库中查找所有省份的数据，返回回去
      // 使用投影过滤一些不需要的数据
      const result = await Cities.find({level: 1}, {province: 1, name: 1, _id: 0});
      // 返回成功响应
      res.json({code: 0, data: result});

    } catch (error) {
      // 捕获错误
      // 返回失败响应
      res.json({code: 1, error});
    }
  });
  // 响应城市数据
  app.get('/city', async (req, res) => {
    try {
      // 获取请求参数
      const { province } = req.query;
      const result = await Cities.find({level: 2, province}, {name: 1, city: 1, _id: 0});
      res.json({code: 0, data: result});
    } catch (error) {
      res.json({code: 1, error});
    }
  })
  // 响应区县数据


})();

app.listen(3000, (err) => {
  if (!err) console.log('服务器启动成功了~');
  else console.log(err);
});