module.exports = {
	name: "Sektion",
	context: {
		sections: [
      {
        title: 'Sektionstitel',
        description: '<p>Kontextuell fördjupningstext <a href="/press" class="text-link">med länk</a></p>',
        body: '<p>Sektionens innehåll</p>'
      }
    ]
	},
  variants: [
    {
      name: 'flera-sektionär',
      context: {
        sections: [
          {
            title: 'Sektionstitel 1',
            description: '<p>Kontextuell fördjupningstext <a href="/press" class="text-link">med länk</a></p>',
            body: '<p>Sektionens innehåll</p>'
          },
          {
            title: 'Sektionstitel 2',
            description: '<p>Kontextuell fördjupningstext <a href="/press" class="text-link">med länk</a></p>',
            body: '<p>Sektionens innehåll</p>'
          }
        ]
      }
    }
  ]
}
