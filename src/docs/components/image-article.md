---
name: Bildpuffar
category: Kompositioner
---

## Exempel med tre bildpuffar

```default.html
<div class="box box--no-padding">
  <div class="section section--boxed">
    <header class="section__header">
      <h2 class="h3 section__header-title"><span class="section__header-title-text">Sektionsrubrik<span></h2>
      <div class="section__header-preamble text-secondary">
        <p>Kontextuell fördjupningstext<a href="/press" class="text-link">med länk</a></p>
      </div>
    </header>
    <div class="section__body">
      <div class="row">
        <div class="col-12 col-md-4">
          <ul class="content-navigation-list">
            <li class="content-navigation-list__item">
              <div class="row">
                <div class="col-4 push-8 col-md-12 push-md-0">
                  <a href="#1">
                    <img src="_styleguide/assets/img/image16-9.png" class="content-navigation-list__item-image" />
                  </a>
                </div>
                <div class="col-8 pull-4 col-md-12 pull-md-0">
                  <a href="#1" class="content-navigation-list__item-link text-standard">
                    Vivamus placerat, neque quis rutrum feugiat turpis
                    <i class="icon-arrow"></i>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="col-12 col-md-4">
          <ul class="content-navigation-list">
            <li class="content-navigation-list__item">
              <div class="row">
                <div class="col-4 push-8 col-md-12 push-md-0">
                  <a href="#2">
                    <img src="_styleguide/assets/img/image16-9.png" class="content-navigation-list__item-image" />
                  </a>
                </div>
                <div class="col-8 pull-4 col-md-12 pull-md-0">
                  <a href="#2" class="content-navigation-list__item-link text-standard">
                    Vivamus placerat, neque quis
                    <i class="icon-arrow"></i>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="col-12 col-md-4">
          <ul class="content-navigation-list">
            <li class="content-navigation-list__item content-navigation-list__item--no-border">
              <div class="row">
                <div class="col-4 push-8 col-md-12 push-md-0">
                  <a href="#3">
                    <img src="_styleguide/assets/img/image16-9.png" class="content-navigation-list__item-image" />
                  </a>
                </div>
                <div class="col-8 pull-4 col-md-12 pull-md-0">
                  <a href="#3" class="content-navigation-list__item-link text-standard">
                    Vivamus placerat, neque quis rutrum feugiat, turpis turpis placerat
                    <i class="icon-arrow"></i>
                  </a>
                </div>
              </div>
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

## Exempel med två bildpuffar

```secondary.html
<div class="box">
  <div class="row">
    <div class="col-12 col-md-6">
      <ul class="content-navigation-list">
        <li class="content-navigation-list__item content-navigation-list__item--no-border">
          <img src="_styleguide/assets/img/image16-9.png" class="content-navigation-list__item-image-large" />
          <a href="#1" class="content-navigation-list__item-link text-big">
            Quisque augue dui, suscipit consequat
            <i class="icon-arrow icon-arrow--lg"></i>
          </a>
        </li>
      </ul>
    </div>
    <div class="col-12 col-md-6">
      <ul class="content-navigation-list">
        <li class="content-navigation-list__item content-navigation-list__item--no-border">
          <img src="_styleguide/assets/img/image16-9.png" class="content-navigation-list__item-image-large" />
          <a href="#2" class="content-navigation-list__item-link text-big">
            Quisque augue dui, suscipit consequat metus nec, bibendum
            <i class="icon-arrow icon-arrow--lg"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>
```
```secondary.js hidden
SG_WELL_PURPLE = true;
```
