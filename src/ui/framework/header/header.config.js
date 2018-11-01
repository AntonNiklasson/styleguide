const status = require('../../../dev/fractal/fractal-component-status')

module.exports = {
  status: status.ready,
  name: 'Sidhuvud',
  handle: 'header',
  context: {
    rootUrl: '#',
    logo: {
      src: '/assets/img/skolverket-logotype.svg',
      alt: 'Skolverket'
    },
    utilities: [
      {
        text: 'Lyssna',
        url: '#',
        type: 'listen'
      },
      {
        text: 'Languages',
        url: '#',
        type: 'translate'
      },
      {
        text: 'Sök',
        url: '#',
        type: 'search'
      },
      {
        text: 'Meny',
        url: '#',
        type: 'mobilemenu'
      }
    ],
    links: [
      {
        text: 'Undervisning',
        url: '#',
        isActive: true
      },
      {
        text: 'Skolutveckling',
        url: '#',
        isActive: false
      },
      {
        text: 'Lagar och regler',
        url: '#',
        isActive: false
      },
      {
        text: 'Innehåll A-Ö',
        url: '#',
        isActive: false
      }
    ]
  }
}
