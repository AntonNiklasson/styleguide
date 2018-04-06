---
name: Innehållsnavigering
category: Komponenter
---

Presenterar navigationsvägar inom ett område.

```default.html
<div class="box box--no-padding">
  <div class="section section--boxed">
    <header class="section__header">
      <h2 class="h3 section__header-title"><span class="section__header-title-text">Områdestitel<span></h2>
      <div class="section__header-preamble text-secondary">
        <p>Kontextuell fördjupningstext <a href="/press" class="text-link">med länk</a></p>
      </div>
    </header>
    <div class="section__body">
      <div class="row">
        <div class="col-12 col-md-6">
          <ul class="content-navigation-list">
            <li class="content-navigation-list__item">
              <a href="#1" class="content-navigation-list__item-link text-standard">
                Områdeslänk
                <i class="icon-arrow"></i>
              </a>
            </li>
            <li class="content-navigation-list__item">
              <a href="#2" class="content-navigation-list__item-link text-standard">
                Phasellus mattis diam convallis lectus ultricies
                <i class="icon-arrow"></i>
              </a>
            </li>
            <li class="content-navigation-list__item">
              <a href="#3" class="content-navigation-list__item-link text-standard">
                Phasellus convallis lectus ultricies
                <i class="icon-arrow"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="col-12 col-md-6">
          <ul class="content-navigation-list content-navigation-list">
            <li class="content-navigation-list__item">
              <a href="#4" class="content-navigation-list__item-link text-standard">
                Suspendisse potenti
                <i class="icon-arrow"></i>
              </a>
            </li>
            <li class="content-navigation-list__item">
              <a href="#5" class="content-navigation-list__item-link text-standard">
                Phasellus mattis diam convallis lectus ultricies
                <i class="icon-arrow"></i>
              </a>
            </li>
            <li class="content-navigation-list__item content-navigation-list__item--no-border">
              <a href="#6" class="content-navigation-list__item-link text-standard">
                Phasellus convallis
                <i class="icon-arrow"></i>
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

## Med text och rubrik

```text.html
<div class="box box--no-padding">
  <div class="section section--boxed">
    <header class="section__header">
      <h2 class="h3 section__header-title"><span class="section__header-title-text">Områdestitel<span></h2>
      <div class="section__header-preamble text-secondary">
        <p>Kontextuell fördjupningstext <a href="/press" class="text-link">med länk</a></p>
      </div>
    </header>
    <div class="section__body">
      <div class="row">
        <div class="col-12 col-md-6">
          <h3 class="h3 margin-tp-reset">Unde omnis</h3>
          <ul class="content-navigation-list">
            <li class="content-navigation-list__item">
              <a href="#1" class="content-navigation-list__item-link text-standard">
                Områdeslänk
                <i class="icon-arrow"></i>
              </a>
              <p class="text-small margin-bt-reset">Sed ut perspiciatis unde omnis iste natus.</p>
            </li>
            <li class="content-navigation-list__item">
              <a href="#2" class="content-navigation-list__item-link text-standard">
                Phasellus mattis diam convallis lectus ultricies
                <i class="icon-arrow"></i>
              </a>
              <p class="text-small margin-bt-reset">Doloremque laudantium, totam rem aperiam ipsa quae ab  unde omnis.</p>
            </li>
            <li class="content-navigation-list__item">
              <a href="#3" class="content-navigation-list__item-link text-standard">
                Phasellus convallis lectus ultricies
                <i class="icon-arrow"></i>
              </a>
              <p class="text-small margin-bt-reset">Totam rem aperiam, eaque ipsa quae ab illo inventore.</p>
            </li>
          </ul>
        </div>
        <div class="col-12 col-md-6">
          <ul class="content-navigation-list content-navigation-list">
          <h3 class="h3 margin-tp-reset">Rem aperia</h3>
          <ul class="content-navigation-list">
            <li class="content-navigation-list__item">
              <a href="#1" class="content-navigation-list__item-link text-standard">
                Perspiciatis natus
                <i class="icon-arrow"></i>
              </a>
              <p class="text-small margin-bt-reset">Sed ut perspiciatis unde omnis iste natus sed ut perspiciatis unde omnis iste natus.</p>
            </li>
            <li class="content-navigation-list__item">
              <a href="#2" class="content-navigation-list__item-link text-standard">
                Convallis lectus ultricies
                <i class="icon-arrow"></i>
              </a>
              <p class="text-small margin-bt-reset">Doloremque totam rem aperiam.</p>
            </li>
            <li class="content-navigation-list__item">
              <a href="#3" class="content-navigation-list__item-link text-standard">
                Phasellus convallis lectus ultricies rem aperiam
                <i class="icon-arrow"></i>
              </a>
              <p class="text-small margin-bt-reset">Totam rem aperiam, eaque ipsa quae ab illo inventore.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
```
```text.js hidden
SG_WELL_PURPLE = true;
```
