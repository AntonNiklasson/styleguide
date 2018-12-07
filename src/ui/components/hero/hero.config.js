module.exports = {
  context: {
    background: '/styleguide/tmp/img/bildstartsida.png',
    title: 'En lång rubrik som sträcker sig över flera rader',
    url: '#',
    shouldOverlap: false
  },
  variants: [
    {
      name: 'Without title',
      context: {
        title: null,
        background: '/styleguide/tmp/img/bildstartsida.png',
      }
    }
  ]
};
