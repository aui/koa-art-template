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

Or you can checkout the [example](https://github.com/aui/art-template/tree/master/example).

## Options

Supports [art-template options](https://github.com/aui/art-template#Options).


## Inlcude

```
<div>
  <% include('user') %>
</div>
```

## Layout

layout.art:

```html
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>{{block 'title'}}My Site{{/block}}</title>

    {{block 'head'}}
    <link rel="stylesheet" href="main.css">
    {{/block}}
</head>
<body>
    {{block 'content'}}{{/block}}
</body>
</html>
```

index.art:

```html
{{extend './layout.art'}}

{{block 'title'}}My Page{{/block}}

{{block 'head'}}
    {{@parent}}
    <link rel="stylesheet" href="custom.css">
{{/block}}

{{block 'content'}}
<p>This is just an awesome page.</p>
{{/block}}
```

## State

Support [`ctx.state` in koa](https://github.com/koajs/koa/blob/master/docs/api/context.md#ctxstate).