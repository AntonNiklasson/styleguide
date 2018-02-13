---
name: Dragspel
category: Komponenter
---

Med ett så kallat dragspel kan du dela upp en sida med mycket innehåll i tydligt avgränsade stycken. Använd klassen `.accordion` och leverera din egen JavaScript-kod för att hantera öppning och stängning.

```default.html
<div class="box">
  <div class="accordion" id="accordionOne">
    <div class="accordion__item">
      <h5 class="accordion__item-header" id="headingOne">
          <a class="accordion__item-link text-medium" href="#accordion1">
            Grupp 1
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
            Grupp 2
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
            Grupp 3
            <i class="accordion__item-icon icon-arrow icon-arrow--rotate-down"></i>
          </a>
      </h5>
      <div class="accordion__item-body" data-parent="#accordion">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
</div>
```
```default.js hidden

SG_WELL_PURPLE = true;

var items = document.querySelectorAll('.accordion__item-link');
console.log(items)
for (i = 0; i < items.length; i++) {
  items[i].addEventListener('click', function() {
    this.closest(".accordion__item").classList.toggle('accordion__item--open');
  });
}
```
