module.exports = {
  name: 'Sök',
  preview: '@layout--page',
  context: {
    searchModel: {
      placeholder: 'Sök på hela skolverket.se'
    },
    searchModel: {
      title: 'anton niklasson',
      placeholder: 'Sök på sidor och innehåll i detta filter'
    },
    checkboxGroups: [
      {
        title: 'Skolform eller verksamhet',
        checkboxes: [
          { label:'Annan pedagogisk verksamhet', id: 'lorem' },
          { label:'Dansarutbildning', id: 'lorem' },
          { label:'Fritidshem', id: 'lorem' },
          { label:'Förskola', id: 'lorem' },
          { label:'Förskoleklass', id: 'lorem' },
          { label:'Grundskoleutbildning', id: 'lorem' },
          { label:'Gymnasieutbildning', id: 'lorem' },
          { label:'Utbildning utomlands', id: 'lorem' },
          { label:'Vuxenutbildning', id: 'lorem' },
        ]
      },
      {
        title: 'Vem kan söka?',
        checkboxes: [
          { label:'Fristående huvudman', id: 'lorem' },
          { label:'Kommunal huvudman', id: 'lorem' },
          { label:'Organisation Statlig huvudman', id: 'lorem' },
        ]
      },
      {
        title: 'Fokusområde',
        checkboxes: [
          { label:'Arbetsplatsförlagt lärande', id: 'lorem' },
          { label:'Bedömning och betyg', id: 'lorem' },
          { label:'Didaktik', id: 'lorem' },
          { label:'Digitalisering', id: 'lorem' },
          { label:'Elevhälsa', id: 'lorem' },
          { label:'Entreprenörskap', id: 'lorem' },
        ]
      }
    ]
  }
}
