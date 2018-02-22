---
name: Dragspelsmeny
category: Komponenter
---

Dragspelsmenyer låter användare öppna och stänga sektioner av innehåll. Använd klassen `.accordion` och leverera din egen JavaScript-kod för att hantera öppning och stängning.

```default.html
<div class="box">
  <div class="accordion" id="accordionOne">
    <div class="accordion__item">
      <h2 class="h3 accordion__item-header" id="headingOne">
          <a class="accordion__item-link text-medium" href="#accordion1">
            Sektionstitel 1
            <i class="accordion__item-icon icon-arrow icon-arrow--down"></i>
          </a>
      </h2>
      <div class="accordion__item-body text-standard" data-parent="#accordion">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
      </div>
    </div>
    <div class="accordion__item accordion__item--open">
      <h2 class="h3 accordion__item-header" id="headingTwo">
          <a class="accordion__item-link text-medium" href="#accordion2">
            Sektionstitel 2
            <i class="accordion__item-icon icon-arrow icon-arrow--down"></i>
          </a>
      </h2>
      <div class="accordion__item-body text-standard" data-parent="#accordion">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
      </div>
    </div>
    <div class="accordion__item">
      <h2 class="h3 accordion__item-header" id="headingThree">
          <a class="accordion__item-link text-medium" href="#accordion3">
            Sektionstitel 3
            <i class="accordion__item-icon icon-arrow icon-arrow--down"></i>
          </a>
      </h2>
      <div class="accordion__item-body text-standard" data-parent="#accordion">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
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
