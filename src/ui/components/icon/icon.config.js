const fs = require('fs')
const path = require('path')
const icons = fs.readdirSync(path.join(__dirname, '../../assets/svg'))
const status = require('../../../dev/fractal/fractal-component-status')

const getIconVariants = () => {
  return icons.filter(file => file.includes('.svg')).map(icon => {
    const name = icon.split('.')[0]
    return { name, status: status.ready, context: { name, label: null } }
  })
}

module.exports = {
  status: status.ready,
  name: 'Ikon',
  handle: 'icon',
  context: {
    name: 'expand-more',
    label: 'Högerpil',
    inline: false,
    block: false,
    middle: false,
    class: null,
    attr: null
  },
  variants: getIconVariants()
}
