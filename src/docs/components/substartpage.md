---
name: Understartsida
category: Komponenter
---

Genom att använda modifieraren `overlap` på sektionsnamnet så överlappar den bilden (eller vilken komponent som helst som råkar ligga före sektions-navigationen).

```default.html
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
                <a href="#1" class="header__list-item-listen">
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
                <a href="#5" class="header__list-item-link header__list-item-link--active">
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
<img src="_styleguide/assets/img/understart.png" width="100%" alt="Error with image loading..." />
<div class="section-navigation">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h3 class="h3 section-navigation__label section-navigation__label--overlap">
          Sektionstitel
        </h3>
      </div>
      <div class="col-12 col-md-4 col-lg-3">
        <div class="section-navigation__box">
          <div class="section-navigation__box-item">
            <a href="#1" class="section-navigation__box-item-link">
              Navigationsval 1
              <i class="icon-arrow"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4 col-lg-3">
        <div class="section-navigation__box">
          <div class="section-navigation__box-item">
            <a href="#2" class="section-navigation__box-item-link">
              Navigationsval 2
              <i class="icon-arrow"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4 col-lg-3">
        <div class="section-navigation__box">
          <div class="section-navigation__box-item">
            <a href="#3" class="section-navigation__box-item-link">
              Navigationsval 3
              <i class="icon-arrow"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4 col-lg-3">
        <div class="section-navigation__box">
          <div class="section-navigation__box-item">
            <a href="#4" class="section-navigation__box-item-link">
              Navigationsval 4
              <i class="icon-arrow"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4 col-lg-3">
        <div class="section-navigation__box">
          <div class="section-navigation__box-item">
            <a href="#5" class="section-navigation__box-item-link">
              Navigationsval 5
              <i class="icon-arrow"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4 col-lg-3">
        <div class="section-navigation__box">
          <div class="section-navigation__box-item section-navigation__box-item--no-border">
            <a href="#6" class="section-navigation__box-item-link">
              Navigationsval med extra mycket text
              <i class="icon-arrow"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="container container--no-padding">
  <div class="box box--no-padding">
    <div class="section section--boxed">
      <header class="section__header">
        <h2 class="h3 section__header-title"><span class="section__header-title-text">Sektionstitel<span></h2>
        <div class="section__header-preamble text-secondary">
          <p>Kontextuell fördjupningstext <a href="/press" class="text-link">med länk</a></p>
        </div>
      </header>
      <div class="section__body">
        <img src="http://placehold.it/800x250/ffffff/E8D3E0?text=(Sektionens innehåll)" style="max-width: 100%"  />
      </div>
    </div>
  </div>
</div>
```
```default.js hidden
SG_WELL_PURPLE = true;
SG_WELL_NOT_PADDED = true;
```
