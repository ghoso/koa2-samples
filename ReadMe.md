# koa.js サンプルプログラム
## プログラム
### index.js

Hello World

### index2.js

パラメータ取得

### index3.js

Markoテスト

## 実行方法

NodeJS7.9.0をインストール。

NodeJSはnodebrewでインストールする。

nodebrewについては以下を参照。

node.jsのversionを管理するためにnodebrewを利用する

http://qiita.com/sinmetal/items/154e81823f386279b33c

NodeJSモジュールをインストールする。

```$ npm install``` 

ウェブアプリを実行する。

```$ ./node_modules/babel-cli/bin/babel-node.js ./src/index.js```

ES6でかいているため、babel-nodeで実行する。

ブラウザでhttp://localhost:3000 にアクセスする。

```$ ./node_modules/babel-cli/bin/babel-node.js ./src/index2.js```

ブラウザでhttp://localhost:3000/users/(ユーザー名) にアクセスする。

```$ ./node_modules/babel-cli/bin/babel-node.js ./src/index3.js```

ブラウザでhttp://localhost:3000/users/ にアクセスする。

ブラウザでhttp://localhost:3000/zipcode/(郵便番号) にアクセスする。
