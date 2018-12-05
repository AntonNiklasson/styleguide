var items = document.querySelectorAll('.skv-header__list-item-mobilemenu, .icon-close');

for (var i = 0; i < items.length; i++) {
	items[i].addEventListener('click', function(e) {
		e.preventDefault();
		document.querySelector('.skv-mobile-menu').classList.toggle('skv-mobile-menu--open');
		document.querySelector('.skv-header').classList.toggle('skv-header--close');
	});
}
