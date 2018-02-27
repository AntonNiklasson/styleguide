---
name: Sidhuvud
category: Komponenter
---

Sidhuvudet hjälper användare att se vart hon är och ge en snabbt, organiserat sätt att nå huvudsektionerna på sidan.
Sidhuvudet är en viktig identitesbärare så att användare känner igen skolverkets sidor.


```default.html
<div class="mobile-menu">
  <div class="mobile-menu__header">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="mobile-menu__header-container">
            <h1 class="h1 mobile-menu__header-title">Meny</h1>
            <a href="#" class="mobile-menu__header-link icon-close">
              Stäng
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mobile-menu__links">
    <div class="container">
      <div class="row">
        <div class="col">
          <ul class="mobile-menu__list">
            <li class="mobile-menu__list-item">
              <a href="#1" class="mobile-menu__list-item-link">
                Undervisning
                <i class="icon-arrow"></i>
              </a>
            </li>
            <li class="mobile-menu__list-item">
              <a href="#2" class="mobile-menu__list-item-link">
                Skolutveckling
                <i class="icon-arrow"></i>
              </a>
            </li>
            <li class="mobile-menu__list-item">
              <a href="#3" class="mobile-menu__list-item-link">
                Lagar och regler
                <i class="icon-arrow"></i>
              </a>
            </li>
            <li class="mobile-menu__list-item">
              <a href="#4" class="mobile-menu__list-item-link">
                Innehåll A-Ö
                <i class="icon-arrow"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="header">
  <div class="header__top">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="header__top-container">
            <a href="#/">
              <img src="_styleguide/assets/img/skolverket-logotype.svg" alt="Skolverket" class="header__top-logo" />
            </a>
            <ul class="header__list">
              <li class="header__list-item">
              <a href="#1" class="header__list-item-listen text-small">
                Lyssna
              </a>
              </li>
              <li class="header__list-item">
                <a href="#2" class="header__list-item-translate">
                  Languages
                </a>
              </li>
              <li class="header__list-item">
                <a href="#3" class="header__list-item-search">
                  Sök
                </a>
              </li>
              <li class="header__list-item">
                <a href="#4" class="header__list-item-mobilemenu">
                  Meny
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="header__links">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="header__links-container">
            <ul class="header__list header__list--absolute">
              <li class="header__list-item">
                <a href="#5" class="header__list-item-link">
                  Undervisning
                </a>
              </li>
              <li class="header__list-item">
                <a href="#6" class="header__list-item-link">
                  Skolutveckling
                </a>
              </li>
              <li class="header__list-item">
                <a href="#7" class="header__list-item-link">
                  Lagar och regler
                </a>
              </li>
              <li class="header__list-item">
                <a href="#8" class="header__list-item-link">
                  Innehåll A-Ö
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```
```default.js hidden

var items = document.querySelectorAll('.header__list-item-mobilemenu, .icon-close');
for (i = 0; i < items.length; i++) {
  items[i].addEventListener('click', function() {
    document.querySelector('.mobile-menu').classList.toggle('mobile-menu--open');
    document.querySelector('.header').classList.toggle('header--close');
  });
}
```
