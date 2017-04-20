# koa-art-template

[![NPM Version](https://img.shields.io/npm/v/koa-art-template.svg)](https://npmjs.org/package/koa-art-template)
[![Node.js Version](https://img.shields.io/node/v/koa-art-template.svg)](http://nodejs.org/download/)

Koa art-template view render middleware. support all feature of [art-template](https://github.com/aui/art-template).

## Install

```shell
npm install --save art-template
npm install --save koa-art-template
```

## Usage

### Example

```js
const Koa = require('koa');
const render = require('koa-art-template');

const app = new Koa();
render(app, {
  root: path.join(__dirname, 'view'),
  extname: '.art',
  debug: process.env.NODE_ENV !== 'production'
});

app.use(async function (ctx) {
  await ctx.render('user');
});

app.listen(8080);
```

Or you can checkout the [example](https://github.com/aui/koa-art-template/tree/master/example).

## Options

Supports [art-template options](https://github.com/aui/art-template#Options).

## State

Support [`ctx.state` in koa](https://github.com/koajs/koa/blob/master/docs/api/context.md#ctxstate).