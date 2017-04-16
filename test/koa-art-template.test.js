'use strict';

const render = require('..');
const request = require('supertest');
const Koa = require('koa');

describe('test/koa-art-template.test.js', function () {
  describe('init()', function () {
    const app = new Koa();
    it('should init ok', function () {
      render(app, {
        root: __dirname,
        open: '{{',
        close: '}}'
      });
      app.context.render.should.be.Function;
    });
  });

  describe('server', function () {
    it('should render page ok', function (done) {
      const app = require('../example/app');
      request(app)
        .get('/')
        .expect(200)
        .expect('content-type', 'text/html; charset=utf-8')
        .expect(/Dead Horse/)
        .expect(/Jack/, done);
    });
    it('should render page ok with custom open/close', function (done) {
      const app = new Koa();
      render(app, {
        root: 'example/view'
      });

      app.use(async function (ctx) {
        await ctx.render('user-oc', {
          user: {
            name: '😊'
          }
        });
      });
      request(app.callback())
        .get('/')
        .expect(200)
        .expect('content-type', 'text/html; charset=utf-8')
        .expect(/😊/, done);
    });
  });
});