const express = require('express');
const { resolve } = require('path');
const { readFile } = require('fs');

const app = express();

/*
  缓存策略：
    1. 强制缓存
      cache-control http1.1
      expires http1.0
    2. 协商缓存
      etag / last-modified
      if-none-match / if-modified-since
 */

app.get('/', (req, res) => {

  readFile('./public/index.html', function (err, data) {
    if (!err) {
      // data就是读取成功的数据。 buffer
      res.end(data);
    } else {
      console.log(err);
    }
  });
  // res.sendFile(resolve(__dirname, 'public/index.html'));

});

// 响应样式资源
app.get('/css/index.css', (req, res) => {
  // 实现强制缓存
  // 返回样式资源
  readFile('./public/css/index.css', function (err, data) {
    if (!err) {
      // 返回响应之前，设置强制缓存.设置响应头
      res.set('cache-control', 'max-age=86400'); // 强制资源缓存一天
      res.set('expires', new Date().toGMTString());
      // data就是读取成功的数据。 buffer
      res.end(data);
    } else {
      console.log(err);
    }
  });
});

let etag = 'test1';
let lastModified = new Date();

// 响应js资源
app.get('/js/index.js', (req, res) => {
  // 实现协商缓存
  readFile('./public/js/index.js', function (err, data) {
    if (!err) {
      // 返回响应之前，设置协商缓存.设置响应头

      // 第二次以后。 先判断etag再判断last-modified
      // 先获取请求头，看是否有指定字段，有说明不是第一次，没有说明是第一次
      const ifNoneMatch = req.headers['if-none-match'];

      if (ifNoneMatch) {
        // 第二次请求
        // 判断是否与etag相等
        if (ifNoneMatch === etag) {
          // 命中了协商缓存
          res.status(304).end();
        } else {
          // 在看last-modified
          const ifModifiedSince = req.headers['if-modified-since'];
          if (ifModifiedSince === lastModified) {
            // 命中了协商缓存
            res.status(304).end();
          } else {
            // 没有命中协商缓存
            res.set('etag', etag);
            res.set('last-modified', lastModified.toGMTString());
            res.end(data);
          }
        }
      } else {
        // 第一次请求, 没有命中协商缓存
        // 首次
        res.set('cache-control', 'max-age=10'); // 强制资源缓存一天
        res.set('expires', new Date().toGMTString());
        res.set('etag', etag);
        res.set('last-modified', lastModified.toGMTString());
        // data就是读取成功的数据。 buffer
        res.end(data);
      }
    } else {
      console.log(err);
    }
  });
});

app.listen(3000, (err) => {
  if (!err) console.log('服务器启动成功了~');
  else console.log(err);
})