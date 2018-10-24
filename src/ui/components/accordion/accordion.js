var items = document.querySelectorAll('.accordion__item-link');
for (var i = 0; i < items.length; i++) {
  items[i].addEventListener('click', function() {
    this.closest(".accordion__item").classList.toggle('accordion__item--open');
  });
}
