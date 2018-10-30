module.exports = {
	name: 'Innehållsnavigering',
	context: {
		title: 'Områdestitel',
		description: 'Kontextuell fördjupningstext.',
		columnOne: [
			{ label: 'Områdeslänk', url: '#' },
			{ label: "Phasellus mattis diam convallis lectus ultricies", url: "#" },
			{ label: 'Phasellus convallis lectus ultricies', url: '#' }
		],
    columnTwo: [
      { label: 'Områdeslänk', url: '#1' },
      { label: "Phasellus mattis diam convallis lectus ultricies", url: "#" },
      { label: 'Phasellus convallis lectus ultricies', url: '#' }
    ]
	},
  variants: [
    {
      name: 'Med länktext',
      context: {
        columnOne: [
          { label: 'Områdeslänk', url: '#', description: 'Sed ut perspiciatis unde omnis iste natus.' },
          { label: "Phasellus mattis diam convallis lectus ultricies", url: "#", description: 'Doloremque laudantium, totam rem aperiam ipsa quae ab unde omnis.' },
          { label: 'Phasellus convallis lectus ultricies', url: '#', description: 'Totam rem aperiam, eaque ipsa quae ab illo inventore.' }
        ],
        columnTwo: [
          { label: 'Områdeslänk', url: '#1', description: 'Sed ut perspiciatis unde omnis iste natus sed ut perspiciatis unde omnis iste natus.' },
          { label: "Phasellus mattis diam convallis lectus ultricies", url: "#", description: 'Doloremque totam rem aperiam.' },
          { label: 'Phasellus convallis lectus ultricies', url: '#', description: 'Totam rem aperiam, eaque ipsa quae ab illo inventore.' }
        ]
      }
    }
  ]
}
