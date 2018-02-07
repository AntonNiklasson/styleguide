---
name: Sektioner
category: Kompositioner
---

Sektioner används för att skapa en tydlig och lättöverskådlig struktur på en sida. Den används ofta för att  särklilja olika typer av innehåll eller innehåll för olika målgrupper.

#### Begränsningar
- Sektioner används uteslutande inom en [box](#box) som omger sidan.
- Sektionen skall *alltid* använda inledande rubrik

#### Tillgänglighet och semantik
Även om vi exemplet nedan använder en `div` så används inte sällan HTML-elementet `section` för sektioner på sidan. Om det används så är det viktigt att sektionen alltid har rubrik och att rubrikhierarkin nollställs, alltså bör första rubriken vara en `h1`-rubrik.

```boxed.html
<div class="box">
  <div class="section">
    <header class="section__header">
      <h2 class="h3 section__header-title">Press och nyheter</h2>
      <div class="section__header-preamble text-secondary">
        <p>Fler nyheter i <a href="/press">pressrummet</a></p>
      </div>
    </header>
    <div class="section__body">
      <img src="http://placehold.it/800x250/ffffff/E8D3E0?text=(Sektionens innehåll)" style="max-width: 100%"  />
    </div>
  </div>
</div>
```
```boxed:_well/padded-purple.css hidden
```
