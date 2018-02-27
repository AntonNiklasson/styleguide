---
name: Nyhetslista
category: Komponenter
---

Presenterar navigationsvägar med ett publiceringsdatum.

```default.html
<div class="box box--no-padding">
  <div class="section section--boxed">
    <header class="section__header">
      <h2 class="h2 section__header-title"><span class="section__header-title-text">Sektionstitel<span></h2>
      <div class="section__header-preamble text-secondary">
        <p>Kontextuell fördjupningstext<a href="/press" class="text-link">med länk</a></p>
      </div>
    </header>
    <div class="section__body">
      <div class="row">
        <div class="col">
          <ul class="content-navigation-list">
            <li class="content-navigation-list__item">
              <div text-small">
                23 mars 2017
              </div>
              <a href="#1" class="content-navigation-list__item-link text-large">
                Phasellus mattis diam convallis lectus ultricies
                <i class="icon-arrow icon-arrow--lg"></i>
              </a>
            </li>
            <li class="content-navigation-list__item">
              <div text-small">
                23 mars 2017
              </div>
              <a href="#1" class="content-navigation-list__item-link text-large">
                Phasellus mattis diam convallis ultricies
                <i class="icon-arrow icon-arrow--lg"></i>
              </a>
            </li>
            <li class="content-navigation-list__item">
              <div text-small">
                23 mars 2017
              </div>
              <a href="#1" class="content-navigation-list__item-link text-large">
                Phasellus mattis diam ultricies
                <i class="icon-arrow icon-arrow--lg"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
```
```default.js hidden
SG_WELL_PURPLE = true;
```
