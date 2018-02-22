---
name: Innehållsnavigering
category: Komponenter
---

Ger användaren överblick och möjlighet att hoppa direkt till innehåll på en sida.

```default.html
<div class="toc">
  <h4 class="h4 toc__title">Rubrik</h4>
  <ul class="toc__list">
    <li class="toc__list-item">
      <a href="#toc1" class="toc__list-item-link text-small">
        Innehållsrubrik nivå 1
      </a>
    </li>
    <li>
      <ul class="toc__list toc__list--sub">
        <li class="toc_list-item">
          <a href="#toc2" class="toc__list-item-link text-small">
            Innehållsrubrik nivå 2
          </a>
        </li>
        <li class="toc_list-item">
          <a href="#toc3" class="toc__list-item-link text-small">
            Innehållsrubrik nivå 2
          </a>
        </li>
      </ul>
    </li>
    <li class="toc__list-item">
      <a href="#toc4" class="toc__list-item-link text-small">
        Innehållsrubrik nivå 1
      </a>
    </li>
    <li class="toc__list-item">
      <a href="#toc5" class="toc__list-item-link text-small">
        Innehållsrubrik nivå 1
      </a>
    </li>
  </ul>
</div>
```
