//
// index2.js
// koa.js サンプル２
//

import Koa from 'koa';
import Router from 'koa-router';
const app = new Koa();
const router = Router();

router.get('/users/:id', function (ctx, next) {
    ctx.body = ctx.params['id'];
});

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000);
