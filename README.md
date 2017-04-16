koa-art-template

Koa art-template view render middleware. support all feature of [art-template](https://github.com/aui/art-template).

## Install

```
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
  extname: '.art'
});

app.use(async function (ctx) {
  await ctx.render('user');
});

app.listen(8080);
```

Or you can checkout the [example](https://github.com/aui/art-template/tree/master/example).

## Options

@see [art-template](https://github.com/aui/art-template) options


## Inlcude

Supports art-template includes.

```
<div>
  <% include('user') %>
</div>
```

## State

Support [`ctx.state` in koa](https://github.com/koajs/koa/blob/master/docs/api/context.md#ctxstate).