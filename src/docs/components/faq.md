---
name: Frågor och svar
category: Kompositioner
---

Ger användaren överblick lorem ipsum...

```default.html
<div class="box box--no-padding">
  <div class="section section--boxed">
    <header class="section__header">
      <h3 class="h3 section__header-title"><span class="section__header-title-text">Frågor och svar<span></h3>
      <div class="section__header-preamble text-secondary">
        <p>Dolarsum <a href="/press" class="text-link">rimpvom</a></p>
      </div>
    </header>
    <div class="section__body">
      <div class="accordion" id="accordionOne">
        <div class="accordion__item">
          <h3 class="h3 accordion__item-header" id="headingOne">
              <a class="accordion__item-link" href="#accordion1">
                Grupp 1
                <i class="accordion__item-icon icon-arrow icon-arrow--down"></i>
              </a>
          </h3>
          <div class="accordion__item-body text-standard" data-parent="#accordion">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </div>
        </div>
        <div class="accordion__item accordion__item--open">
          <h3 class="h3 accordion__item-header" id="headingTwo">
              <a class="accordion__item-link" href="#accordion2">
                Grupp 2
                <i class="accordion__item-icon icon-arrow icon-arrow--down"></i>
              </a>
          </h3>
          <div class="accordion__item-body text-standard" data-parent="#accordion">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </div>
        </div>
        <div class="accordion__item">
          <h3 class="h3 accordion__item-header" id="headingThree">
              <a class="accordion__item-link" href="#accordion3">
                Grupp 3
                <i class="accordion__item-icon icon-arrow icon-arrow--down"></i>
              </a>
          </h3>
          <div class="accordion__item-body text-standard" data-parent="#accordion">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```
```default.js hidden
SG_WELL_PURPLE = true;

var items = document.querySelectorAll('.accordion__item-link');
for (i = 0; i < items.length; i++) {
  items[i].addEventListener('click', function() {
    this.closest(".accordion__item").classList.toggle('accordion__item--open');
  });
}
```