---
name: TOC
category: Komponenter
---

En navigerng som används för att ge en outline av en lång sida med mycket innehåll.

```default.html
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
```
