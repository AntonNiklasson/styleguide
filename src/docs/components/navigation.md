---
name: Sidhuvud
category: Komponenter
---

Beskrivning...

```default.html
<div class="mobile-menu">
  <div class="mobile-menu__header">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="mobile-menu__header-container">
            <h1 class="h1 mobile-menu__header-title">Meny</h1>
            <a href="#" class="icon-close text-small">
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
              <a href="#1" class="mobile-menu__list-item-link text-medium">
                Undervisning
                <i class="icon-arrow"></i>
              </a>
            </li>
            <li class="mobile-menu__list-item">
              <a href="#2" class="mobile-menu__list-item-link text-medium">
                Skolutveckling
                <i class="icon-arrow"></i>
              </a>
            </li>
            <li class="mobile-menu__list-item">
              <a href="#3" class="mobile-menu__list-item-link text-medium">
                Lagar och regler
                <i class="icon-arrow"></i>
              </a>
            </li>
            <li class="mobile-menu__list-item">
              <a href="#4" class="mobile-menu__list-item-link text-medium">
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
<div class="navigation">
  <div class="navigation__header">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="navigation__header-container">
            <a href="#/">
              <img src="_styleguide/assets/img/skolverket-logotype.svg" alt="Skolverket" class="navigation__header-logo" />
            </a>
            <ul class="navigation__list">
              <li class="navigation__list-item">
                <a href="#1" class="navigation__list-item-listen text-small">
                  Lyssna
                </a>
              </li>
              <li class="navigation__list-item">
                <a href="#2" class="navigation__list-item-translate text-small">
                  Languages
                </a>
              </li>
              <li class="navigation__list-item">
                <a href="#3" class="navigation__list-item-search text-small">
                  Sök
                </a>
              </li>
              <li class="navigation__list-item">
                <a href="#4" class="navigation__list-item-mobilemenu text-small">
                  Meny
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="navigation__links">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="navigation__links-container">
            <ul class="navigation__list navigation__list--absolute">
              <li class="navigation__list-item">
                <a href="#5" class="navigation__list-item-link text-medium">
                  Undervisning
                </a>
              </li>
              <li class="navigation__list-item">
                <a href="#6" class="navigation__list-item-link text-medium">
                  Skolutveckling
                </a>
              </li>
              <li class="navigation__list-item">
                <a href="#7" class="navigation__list-item-link text-medium">
                  Lagar och regler
                </a>
              </li>
              <li class="navigation__list-item">
                <a href="#8" class="navigation__list-item-link text-standard">
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

var items = document.querySelectorAll('.navigation__list-item-mobilemenu, .icon-close');
for (i = 0; i < items.length; i++) {
  items[i].addEventListener('click', function() {
    document.querySelector('.mobile-menu').classList.toggle('mobile-menu--open');
  });
}
```
