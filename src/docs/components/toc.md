---
name: TOC
category: Komponenter
---

En navigerng som används för att ge en outline av en lång sida med mycket innehåll.

```default.html
<div class="toc">
  <div class="toc__title text-standard">På denna sida</div>
  <ul class="toc__list">
    <li class="toc__list-item">
      <a href="#" class="toc__list-item-link text-standard">
        Vad är yrkesprogram och högskoleförberedande program?
      </a>
    </li>
    <li class="toc__list-item">
      <ul class="toc__list toc__list--sub">
        <li class="toc_list-item">
          <a href="#" class="toc__list-item-link text-standard">
            Yrkesprogram
          </a>
        </li>
        <li class="toc_list-item">
          <a href="#" class="toc__list-item-link text-standard">
            Högskoleförberedande program
          </a>
        </li>
      </ul>
    </li>
    <li class="toc__list-item">
      <a href="#" class="toc__list-item-link text-standard">
        Introduktionsprogram för dig som inte har tillräckliga betyg
      </a>
    </li>
    <li class="toc__list-item">
      <a href="#" class="toc__list-item-link text-standard">
        Kontakta utbildningsförvaltningen
      </a>
    </li>
  </ul>
</div>
```
