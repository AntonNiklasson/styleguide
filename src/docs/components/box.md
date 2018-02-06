---
name: Box
category: Komponenter
---

En generell box som används för att skapa tydliga sektioner på en sida.

```default.html
<div class="box">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
</div>
```
```default:well/padded.css hidden
```

I fall där två eller flera boxar behöver ligga efter varandra eller där du vill förhindra att skuggan överlappar andra element används modifieraren `margins`.

```margins.html
<div class="box box--margins">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
</div>
<div class="box box--margins">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
</div>
```
```margins:well/padded.css hidden
```

Det går att lägga vilket innehål som helst i en box.


```toc.html
<div class="box">
  <div class="toc">
    <div class="toc__title text-standard">På denna sida</div>
    <ul class="toc__list">
      <li class="toc__list-item">
        <a href="#toc1" class="toc__list-item-link text-standard">
          Vad är yrkesprogram och högskoleförberedande program?
        </a>
      </li>
      <li class="toc__list-item">
        <ul class="toc__list toc__list--sub">
          <li class="toc_list-item">
            <a href="#toc2" class="toc__list-item-link text-standard">
              Yrkesprogram
            </a>
          </li>
          <li class="toc_list-item">
            <a href="#toc3" class="toc__list-item-link text-standard">
              Högskoleförberedande program
            </a>
          </li>
        </ul>
      </li>
      <li class="toc__list-item">
        <a href="#toc4" class="toc__list-item-link text-standard">
          Introduktionsprogram för dig som inte har tillräckliga betyg
        </a>
      </li>
      <li class="toc__list-item">
        <a href="#toc5" class="toc__list-item-link text-standard">
          Kontakta utbildningsförvaltningen
        </a>
      </li>
    </ul>
  </div>
</div>
```
```toc:well/padded.css hidden
```
