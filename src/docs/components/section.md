---
name: Sektioner
category: Kompositioner
---

Sektioner används för att skapa en tydlig och lättöverskådlig struktur på en sida.

#### Begränsningar
- Sektioner används uteslutande inom en [box](#box).

#### Tillgänglighet och semantik
Även om vi exemplet nedan använder en `div` så används inte sällan HTML-elementet `section` för sektioner på sidan. Om det används så är det viktigt att sektionen alltid har rubrik och att rubrikhierarkin nollställs, alltså bör första rubriken vara en `h1`-rubrik.

```boxed.html
<div class="box box--no-padding">
  <div class="section section--boxed">
    <header class="section__header">
      <h2 class="h3 section__header-title"><span class="section__header-title-text">Sektionstitel<span></h2>
      <div class="section__header-preamble text-secondary">
        <p>Kontextuell fördjupningstext<a href="/press" class="text-link">med länk</a></p>
      </div>
    </header>
    <div class="section__body">
      <img src="http://placehold.it/800x250/ffffff/E8D3E0?text=(Sektionens innehåll)" style="max-width: 100%"  />
    </div>
  </div>
</div>
```
```boxed.js hidden
SG_WELL_PURPLE = true;
```

När flera sektioner läggs bredvid varandra läggs en horisontell avdelare till automatiskt.

```multiple.html
<div class="container">
  <div class="box box--no-padding">
    <div class="section section--boxed">
      <header class="section__header">
        <h2 class="h3 section__header-title"><span class="section__header-title-text">Sektionstitel 1<span></h2>
      </header>
      <div class="section__body">
        <img src="http://placehold.it/800x150/ffffff/E8D3E0?text=(Sektionens innehåll)" style="max-width: 100%"  />
      </div>
    </div>
    <div class="section section--boxed">
      <header class="section__header">
        <h2 class="h3 section__header-title"><span class="section__header-title-text">Sektionstitel 2<span></h2>
      </header>
      <div class="section__body">
        <img src="http://placehold.it/800x150/ffffff/E8D3E0?text=(Sektionens innehåll)" style="max-width: 100%"  />
      </div>
    </div>
  </div>
</div>
```
```multiple.js hidden
SG_WELL_PURPLE = true;
```
