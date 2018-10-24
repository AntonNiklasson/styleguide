const config = require('./patch-config')

const files = [
  {
    note: 'Fixed language for tab panels',
    path: '../../node_modules/@frctl/mandelbrot/views/partials/browser/controls.nunj',
    patches: [
      {
        pattern: `<a href="#browser-{{ entity.id }}-panel-{{ collection.name }}">{{ collection.label }}</a>`,
        replace: `<a href="#browser-{{ entity.id }}-panel-{{ collection.name }}">${ config.lang.assets }</a>`
      },
      {
        pattern: `<a href="#browser-{{ entity.id }}-panel-{{ panel }}">{% if panel == 'html' %}HTML{% else %}{{ panel | capitalize }}{% endif %}</a>`,
        replace: `<a href="#browser-{{ entity.id }}-panel-{{ panel }}">{% if panel == 'html' %}${ config.lang.html }{% endif %}{% if panel == 'notes' %}${ config.lang.notes }{% endif %}{% if panel == 'context' %}${ config.lang.context }{% endif %}{% if panel == 'view' %}${ config.lang.view }{% endif %}{% if panel == 'info' %}${ config.lang.info }{% endif %}</a>`
      }
    ]
  },
  {
    note: 'Added displayName as property on the entity object',
    path: '../../node_modules/@frctl/fractal/src/core/mixins/entity.js',
    patches: [
      {
        // TODO: THIS DOESNT MATCH!!! MUST COME AFTER NAME PROP. FIX HEADLINE FOR DOCS in /Users/adarland/Development/creuna/skolverket/styleguide/node_modules/@frctl/fractal/src/api/docs/doc.js. Titile should use displayName
        pattern: `this.name = utils.slugify(name.toLowerCase());\n        this.handle`,
        replace: `this.name = utils.slugify(name.toLowerCase());\n        this.displayName = name.charAt(0).toUpperCase() + name.substr(1).replace(/[-[\\]{}()*+?.,\\\\^$|#\\s]/g, ' ').toLowerCase();\n        this.handle`
      }
    ]
  },
  {
    note: 'Navigation now displays displayName instead of label',
    path: '../../node_modules/@frctl/mandelbrot/views/macros/navigation.nunj',
    patches: [
      {
        pattern: `<span>{{ item.label }}</span>`,
        replace: `<span>{{ item.displayName }}</span>`
      }
    ]
  },
  {
    note: 'Documenation model now uses displayName instead of label',
    path: '../../node_modules/@frctl/fractal/src/api/docs/doc.js',
    patches: [
      {
        pattern: `return config.title || this.label;`,
        replace: `return config.title || this.displayName;`
      }
    ]
  },
  {
    note: 'Preview link now uses diplayName instead of title',
    path: '../../node_modules/@frctl/mandelbrot/views/partials/pen/header.nunj',
    patches: [
      {
        pattern: `{{ entity.title }}`,
        replace: `{{ entity.displayName }}`
      }
    ]
  }
]

module.exports = files
