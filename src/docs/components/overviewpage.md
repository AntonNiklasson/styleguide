---
name: Översiktsida
category: Komponenter
---

Beskrivning...

```default.html
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
                <a href="#1" class="navigation__list-item-listen">
                  Lyssna
                </a>
              </li>
              <li class="navigation__list-item">
                <a href="#2" class="navigation__list-item-translate">
                  Languages
                </a>
              </li>
              <li class="navigation__list-item">
                <a href="#3" class="navigation__list-item-search">
                  Sök
                </a>
              </li>
              <li class="navigation__list-item">
                <a href="#4" class="navigation__list-item-mobilemenu">
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
                <a href="#5" class="navigation__list-item-link">
                  Undervisning
                </a>
              </li>
              <li class="navigation__list-item">
                <a href="#6" class="navigation__list-item-link">
                  Skolutveckling
                </a>
              </li>
              <li class="navigation__list-item">
                <a href="#7" class="navigation__list-item-link">
                  Lagar och regler
                </a>
              </li>
              <li class="navigation__list-item">
                <a href="#8" class="navigation__list-item-link">
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
<div class="container container--margins">
  <div class="row row-reverse">
    <div class="col-12 col-md-4">
      <img src="_styleguide/assets/img/overview.png" width="100%" alt="Error with image loading..." />
    </div>
    <div class="col-12 col-md-8">
      <div class="box box--compact box--no-border">
        <h2 class="h2 margin-tp-reset">En tydlig områdersrubrik</h2>
        <p class="text-standard">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <ul class="content-navigation-list">
          <li class="content-navigation-list__item">
            <a href="#1" class="content-navigation-list__item-link text-big">
              Navigationsval 1
              <i class="icon-arrow icon-arrow--lg"></i>
            </a>
          </li>
          <li class="content-navigation-list__item">
            <a href="#2" class="content-navigation-list__item-link text-big">
              Navigationsval 2
              <i class="icon-arrow icon-arrow--lg"></i>
            </a>
          </li>
          <li class="content-navigation-list__item">
            <a href="#3" class="content-navigation-list__item-link text-big">
              Navigationsval 3
              <i class="icon-arrow icon-arrow--lg"></i>
            </a>
          </li>
          <li class="content-navigation-list__item content-navigation-list__item--no-border">
            <a href="#4" class="content-navigation-list__item-link text-big">
              Navigationsval med extra mycket text
              <i class="icon-arrow icon-arrow--lg"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
<div class="container container--no-padding">
  <div class="box box--no-padding box--mb-large">
    <div class="section section--boxed">
      <header class="section__header">
        <h2 class="h3 section__header-title"><span class="section__header-title-text">Sektionstitel<span></h2>
        <div class="section__header-preamble text-secondary">
          <p>Kontextuell fördjupningstext<a href="/press" class="text-link">med länk</a></p>
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
