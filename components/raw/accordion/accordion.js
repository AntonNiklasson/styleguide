var items = document.querySelectorAll('.skv-accordion__item-link');
for (var i = 0; i < items.length; i++) {
  items[i].addEventListener('click', function() {
    this.closest(".skv-accordion__item").classList.toggle('skv-accordion__item--open');
  });
}
