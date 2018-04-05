---
name: Bildpuffar
category: Komponenter
---

## Exempel med varianter med tre, två eller en bildpuff

```default.html
<div class="box box--no-padding">
  <div class="section section--boxed">
    <header class="section__header">
      <h2 class="h3 section__header-title"><span class="section__header-title-text">Tre bildpuffar<span></h2>
    </header>
    <div class="section__body">
      <div class="row">
        <div class="col-12 col-md-4">
          <ul class="content-navigation-list">
            <li class="content-navigation-list__item">
              <a href="#1" class="hide-medium-below">
                <img src="_styleguide/assets/img/image16-9.png" class="content-navigation-list__item-image" />
              </a>
              <a href="#1" class="content-navigation-list__item-link text-standard">
                Vivamus placerat, neque quis rutrum feugiat turpis
                <i class="icon-arrow"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="col-12 col-md-4">
          <ul class="content-navigation-list">
            <li class="content-navigation-list__item">
              <a href="#2" class="hide-medium-below">
                <img src="_styleguide/assets/img/image16-9.png" class="content-navigation-list__item-image" />
              </a>
              <a href="#2" class="content-navigation-list__item-link text-standard">
                Vivamus placerat, neque quis
                <i class="icon-arrow"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="col-12 col-md-4">
          <ul class="content-navigation-list">
            <li class="content-navigation-list__item content-navigation-list__item--no-border">
              <a href="#3" class="hide-medium-below">
                <img src="_styleguide/assets/img/image16-9.png" class="content-navigation-list__item-image" />
              </a>
              <a href="#3" class="content-navigation-list__item-link text-standard">
                Vivamus placerat, neque quis rutrum feugiat, turpis turpis placerat
                <i class="icon-arrow"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="section section--boxed">
    <header class="section__header">
      <h2 class="h3 section__header-title"><span class="section__header-title-text">Två bildpuffar<span></h2>
    </header>
    <div class="section__body">
      <div class="row">
        <div class="col-12 col-md-6">
          <ul class="content-navigation-list">
            <li class="content-navigation-list__item content-navigation-list__item--no-border">
            <div class="row">
              <div class="col-4 push-8 col-md-12 push-md-0">
                <img src="_styleguide/assets/img/image16-9.png" class="content-navigation-list__item-image-large" />
              </div>
              <div class="col-8 pull-4 col-md-12 pull-md-0">
                <a href="#1" class="content-navigation-list__item-link text-large">
                  Quisque augue dui suscipit consequat
                  <i class="icon-arrow icon-arrow--lg"></i>
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div class="col-12 col-md-6">
          <ul class="content-navigation-list">
            <li class="content-navigation-list__item content-navigation-list__item--no-border">
            <div class="row">
              <div class="col-4 push-8 col-md-12 push-md-0">
                <img src="_styleguide/assets/img/image16-9.png" class="content-navigation-list__item-image-large" />
              </div>
              <div class="col-8 pull-4 col-md-12 pull-md-0">
                <a href="#2" class="content-navigation-list__item-link text-large">
                  Suscipit consequat quisque augue dui
                  <i class="icon-arrow icon-arrow--lg"></i>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="section section--boxed">
    <header class="section__header">
      <h2 class="h3 section__header-title"><span class="section__header-title-text">En bildpuff<span></h2>
    </header>
    <div class="section__body">
    <div class="row">
      <div class="col-12 col-md-6">
        <div class="content-navigation-list">
          <div class="content-navigation-list__item content-navigation-list__item--no-border">
            <img src="_styleguide/assets/img/image16-9.png" class="content-navigation-list__item-image-large" />
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6">
      <div class="content-navigation-list">
        <a href="#1" class="content-navigation-list__item-link text-large">
        Quisque augue dui suscipit consequat <i class="icon-arrow icon-arrow--lg"></i>
        </a>
        <p class="content-navigation-list__item-text text-standard">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.</p>
      </div>
      </div>
    </div>
    </div>
  </div>
</div>
```
```default.js hidden
SG_WELL_PURPLE = true;
```
