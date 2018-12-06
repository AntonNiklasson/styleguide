const mandelbrot = require('@frctl/mandelbrot');

const customTheme = mandelbrot({
  skin: "black",
  nav: ['docs', 'components'],
  panels: ["notes", "resources", "context", "view", "html", "info"],
  styles: ['default', '/theme/main.css']
})

customTheme.addLoadPath(__dirname + '/views');
customTheme.addStatic(__dirname + '/assets', '/theme');

module.exports = customTheme;