const Router = require('koa-router');

const router = new Router();

router.get('/register', (ctx) => {
  ctx.body = '这是register路由返回的响应'
})

module.exports = router;