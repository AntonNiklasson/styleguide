module.exports = {
  name: "Sektion",
  handle: 'section',
	context: {
		sections: [
      {
        title: 'Sektionstitel',
        description: '<p>Kontextuell fördjupningstext <a href="#" class="text-link">med länk</a></p>',
        body: '<p>Sektionens innehåll</p>'
      }
    ]
	},
  variants: [
    {
      name: 'flera-sektioner',
      context: {
        sections: [
          {
            title: 'Sektionstitel 1',
            description: '<p>Kontextuell fördjupningstext <a href="#" class="text-link">med länk</a></p>',
            body: '<p>Sektionens innehåll</p>'
          },
          {
            title: 'Sektionstitel 2',
            description: '<p>Kontextuell fördjupningstext <a href="#" class="text-link">med länk</a></p>',
            body: '<p>Sektionens innehåll</p>'
          }
        ]
      }
    }
  ]
}
