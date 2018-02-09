---
name: Frågor och svar
category: Kompositioner
---

Ger användaren överblick lorem ipsum...

```default.html
<div class="box box--no-padding">
  <div class="section section--boxed">
    <header class="section__header">
      <h2 class="h3 section__header-title"><span class="section__header-title-text">Frågor och svar<span></h2>
      <div class="section__header-preamble text-secondary">
        <p>Dolarsum <a href="/press">rimpvom</a></p>
      </div>
    </header>
    <div class="section__body">
      <div class="accordion" id="accordionOne">
        <div class="accordion__item">
          <h5 class="accordion__item-header" id="headingOne">
              <a class="accordion__item-link text-medium" href="#accordion1">
                Cliche reprehenderit, enim eiusmod?
                <i class="accordion__item-icon icon-arrow icon-arrow--rotate-down"></i>
              </a>
          </h5>
          <div class="accordion__item-body" data-parent="#accordion">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </div>
        </div>
        <div class="accordion__item accordion__item--open">
          <h5 class="accordion__item-header" id="headingTwo">
              <a class="accordion__item-link text-medium" href="#accordion2">
                Coffee nulla assumenda shoreditch?
                <i class="accordion__item-icon icon-arrow icon-arrow--rotate-down"></i>
              </a>
          </h5>
          <div class="accordion__item-body" data-parent="#accordion">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </div>
        </div>
        <div class="accordion__item">
          <h5 class="accordion__item-header" id="headingThree">
              <a class="accordion__item-link text-medium" href="#accordion3">
                Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid?
                <i class="accordion__item-icon icon-arrow icon-arrow--rotate-down"></i>
              </a>
          </h5>
          <div class="accordion__item-body" data-parent="#accordion">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </div>
        </div>
      </div>  
    </div>
  </div>
</div>
```
```default:_well/purple.css hidden
```
```default.js hidden
var items = document.querySelectorAll('.accordion__item-link');

for (i = 0; i < items.length; i++) {
  items[i].addEventListener('click', function() {
    this.closest(".accordion__item").classList.toggle('accordion__item--open');
  });
}
```