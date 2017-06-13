const debug = require('debug')('art-template');
const template = require('art-template');


const defaultSettings = {
    debug: process.env.NODE_ENV !== 'production',
    writeResp: true
};

/**
 * set app.context.render
 * @param {Application} app      koa application instance
 * @param {Object}      settings user settings
 */
exports = module.exports = function (app, settings = {}) {
    if (app.context.render) {
        return;
    }

    settings = Object.assign({}, defaultSettings, settings);

    function render(filename, data) {
        debug(`render: ${filename}`);
        settings.filename = filename;
        const render = template.compile(settings);
        return render(data);
    }


    app.context.render = function (view, _context) {
        const ctx = this;
        const context = Object.assign({}, ctx.state, _context);
        const html = render(view, context);
        const writeResp = context.writeResp === false ? false : (context.writeResp || settings.writeResp);

        if (writeResp) {
            ctx.type = 'html';
            ctx.body = html;
        } else {
            return html;
        }

    };
};


exports.template = template;