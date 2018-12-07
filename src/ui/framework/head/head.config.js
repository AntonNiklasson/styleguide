const process = require('process')
const status = require('../../../dev/fractal/fractal-component-status')

module.exports = {
  status: status.ready,
  context: {
    title: 'Skolverket',
    production: process.env.NODE_ENV === 'production'
  }
}
