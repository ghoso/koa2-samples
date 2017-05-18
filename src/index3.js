// index3.js
// koa.jsサンプル３
//

import Koa from 'koa';
const app = new Koa();
const router = require('koa-router')(),
      serve = require('koa-static'),
      views = require('co-views'),
      marko = require('marko'),
      request = require('request-promise'),
      promise = require('bluebird');

// テンプレートディレクトリを設定。
views(__dirname + '/views');

// 静的ファイル場所指定
app.use(serve(__dirname + '/public'));

app.use(router.routes());
app.use(router.allowedMethods());

function getZipData(zipcode){
    return new promise( function (resolve, reject){
        //console.log(zipcode);
        var options = {
            method: 'GET',
            uri: 'http://zipcloud.ibsnet.co.jp/api/search?zipcode=' + zipcode,
            headers: { 'User-Agent': 'request' },
            json: true
        };

        request(options)
            .then(function(body){
                // console.log(body);
                // var data = JSON.parse(body);
                resolve(body);
            });
    });
}

// Simple marko test
router.get('/users/', async (ctx, next) => {
    let data = {
        'id': 'testuser1'
    };
    ctx.body = marko.load(__dirname + '/views/index.marko').stream(data);
    ctx.type = 'text/html';
});

// 郵便番号サービス
router.get('/zipcode/:zipcd', async (ctx, next) => {
    let zipcd = ctx.params['zipcd'];
    var gen = await getZipData(zipcd);
    // console.log('zip data = ' + gen.results[0].address1);
    ctx.body = marko.load(__dirname + '/views/zipcode.marko').stream(gen.results);
    ctx.type = 'text/html';
});

app.listen(3000);
