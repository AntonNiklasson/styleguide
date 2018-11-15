var items = document.querySelectorAll('.reveal__toggle');

for (var i = 0; i < items.length; i++) {
  items[i].addEventListener('click', function() {
    var reveal = this.closest('.reveal');

    if(reveal.classList.toggle('reveal--open')) {
      var contentHeight = reveal.querySelector('.reveal__content').clientHeight + 1;
      reveal.querySelector('.reveal__content-wrapper').style.maxHeight = contentHeight + 'px';
    } else {
      reveal.querySelector('.reveal__content-wrapper').style.maxHeight = 0;
    }
  });
}
