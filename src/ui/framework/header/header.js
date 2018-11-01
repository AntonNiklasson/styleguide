var items = document.querySelectorAll('.header__list-item-mobilemenu, .icon-close');

for (var i = 0; i < items.length; i++) {
	items[i].addEventListener('click', function(e) {
		e.preventDefault();
		document.querySelector('.mobile-menu').classList.toggle('mobile-menu--open');
		document.querySelector('.header').classList.toggle('header--close');
	});
}
