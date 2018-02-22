---
name: Box
category: Komponenter
---

En generell box som används för att skapa tydliga sektioner på en sida.

```default.html
<div class="box">
  <p class="text-standard">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
</div>
```
```default.js hidden
SG_WELL_PURPLE = true;
```

I fall där två eller flera boxar behöver ligga efter varandra eller där du vill förhindra att skuggan överlappar andra element används modifieraren `margins`.

```margins.html
<div class="box box--margins">
  <p class="text-standard">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
</div>
<div class="box box--margins">
  <p class="text-standard">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
</div>
```
```margins.js hidden
SG_WELL_PURPLE = true;
```

Det går att lägga vilket innehål som helst i en box.


```toc.html
<div class="box">
  <div class="toc">
    <h4 class="h4 toc__title">På denna sida</h4>
    <ul class="toc__list">
      <li class="toc__list-item">
        <a href="#toc1" class="toc__list-item-link text-small">
          Vad är yrkesprogram och högskoleförberedande program?
        </a>
      </li>
      <li>
        <ul class="toc__list toc__list--sub">
          <li class="toc__list-item">
            <a href="#toc2" class="toc__list-item-link text-small">
              Yrkesprogram
            </a>
          </li>
          <li class="toc__list-item">
            <a href="#toc3" class="toc__list-item-link text-small">
              Högskoleförberedande program
            </a>
          </li>
        </ul>
      </li>
      <li class="toc__list-item">
        <a href="#toc4" class="toc__list-item-link text-small">
          Introduktionsprogram för dig som inte har tillräckliga betyg
        </a>
      </li>
      <li class="toc__list-item">
        <a href="#toc5" class="toc__list-item-link text-small">
          Kontakta utbildningsförvaltningen
        </a>
      </li>
    </ul>
  </div>
</div>
```
```toc.js hidden
SG_WELL_PURPLE = true;
```
