---
name: Understartsida
category: Kompositioner
---

Genom att använda modifieraren `overlap` på sektionsnamnet så överlappar den bilden (eller vilken komponent som helst som råkar ligga före sektions-navigationen).

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
<img src="_styleguide/assets/img/understart.png" width="100%" alt="Error with image loading..." />
<div class="section-navigation">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h3 class="h3 section-navigation__label section-navigation__label--overlap">
          Current section
        </h3>
      </div>
      <div class="col-12 col-md-4 col-lg-3">
        <div class="section-navigation__box">
          <div class="section-navigation__box-item">
            <a href="#1" class="section-navigation__box-item-link">
              Förskola
              <i class="icon-arrow"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4 col-lg-3">
        <div class="section-navigation__box">
          <div class="section-navigation__box-item">
            <a href="#2" class="section-navigation__box-item-link">
              Förskoleklass
              <i class="icon-arrow"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4 col-lg-3">
        <div class="section-navigation__box">
          <div class="section-navigation__box-item">
            <a href="#3" class="section-navigation__box-item-link">
              Grundskola
              <i class="icon-arrow"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4 col-lg-3">
        <div class="section-navigation__box">
          <div class="section-navigation__box-item">
            <a href="#4" class="section-navigation__box-item-link">
              Grundsärskola
              <i class="icon-arrow"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4 col-lg-3">
        <div class="section-navigation__box">
          <div class="section-navigation__box-item">
            <a href="#5" class="section-navigation__box-item-link">
              Gymnasieskola
              <i class="icon-arrow"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4 col-lg-3">
        <div class="section-navigation__box">
          <div class="section-navigation__box-item">
            <a href="#6" class="section-navigation__box-item-link">
              Gymnasiesärskola
              <i class="icon-arrow"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4 col-lg-3">
        <div class="section-navigation__box">
          <div class="section-navigation__box-item section-navigation__box-item--no-border">
            <a href="#7" class="section-navigation__box-item-link">
              Inspiration och stöd i arbetet
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
        <h3 class="h3 section__header-title"><span class="section__header-title-text">Press och nyheter<span></h3>
        <div class="section__header-preamble text-secondary">
          <p>Fler nyheter i <a href="/press">pressrummet</a></p>
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
