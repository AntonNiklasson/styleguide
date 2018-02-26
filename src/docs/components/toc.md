---
name: Innehållsnavigering
category: Komponenter
---

Ger användaren överblick och möjlighet att hoppa direkt till innehåll på en sida.

```default.html
<div class="toc">
  <div class="toc__title text-standard">Rubrik</div>
  <ul class="toc__list">
    <li class="toc__list-item">
      <a href="#" class="toc__list-item-link text-standard">
        Innehållsrubrik nivå 1
      </a>
    </li>
    <li class="toc__list-item">
      <ul class="toc__list toc__list--sub">
        <li class="toc_list-item">
          <a href="#" class="toc__list-item-link text-standard">
            Innehållsrubrik nivå 2
          </a>
        </li>
        <li class="toc_list-item">
          <a href="#" class="toc__list-item-link text-standard">
            Innehållsrubrik nivå 2
          </a>
        </li>
      </ul>
    </li>
    <li class="toc__list-item">
      <a href="#" class="toc__list-item-link text-standard">
        Innehållsrubrik nivå 1
      </a>
    </li>
    <li class="toc__list-item">
      <a href="#" class="toc__list-item-link text-standard">
        Innehållsrubrik nivå 1
      </a>
    </li>
  </ul>
</div>
```
