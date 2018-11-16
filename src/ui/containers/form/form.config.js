module.exports = {
  name: 'Formulär',
  handle: 'form',
  variants: [
    {
      name: 'checkboxes',
      context: {
        checkboxes: [
          { label: 'Kryssboxval 1', id: 'option-1' },
          { label: 'Kryssboxval 2', id: 'option-2' },
          { label: 'Lorem', id: 'lorem' },
          { label: 'Ipsum', id: 'ipsum' },
          { label: 'Dolor sit amet', id: 'dolor-sit-amet' }
        ]
      }
    }
  ]
}
