const process = require('process')
const helpers = require('./src/ui/core/hbs/helpers')
const hbs = require('@frctl/handlebars')({ helpers })
const path = require('path')
const theme = require('./theme');
const fractal = module.exports = require('@frctl/fractal').create()

const PRODUCTION = process.env.NODE_ENV === 'production';

console.log('FRACTAL CONFIG FILE', { PRODUCTION })

fractal.set('project.title', 'Skolverkets Komponentbilbiotek')
fractal.components.engine(hbs)
fractal.components.set('path', path.join(__dirname, 'src/ui'))
fractal.components.set('default.preview', '@layout')
fractal.docs.set('path', path.join(__dirname, 'docs'))
fractal.web.theme(theme);
fractal.web.set('static.path', path.join(__dirname, 'dist'))
fractal.web.set('server.syncOptions', {
    files: ["dist/**/*", 'src/**/*.hbs', 'src/dev/**/*', 'theme/**/*.nunj']
})

fractal.web.set('builder.dest', __dirname + '/site')

if (!PRODUCTION) {
  fractal.web.set('static.mount', 'styleguide');
}
