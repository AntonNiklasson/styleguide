---
name: Återkoppling
category: Kompositioner
---

Låter användaren lämna synpunkter på innehåll. Komponenten placeras längst ner i en sektion.

```default.html
<div class="box box--no-padding">
  <div class="section section--boxed">
  </div>
  <div class="section section--boxed section--compact-padding">
    <div class="feedback">
      <span class="feedback__text text-standard">
        Hjälpte informationen på den här sidan dig?
      </span>
      <div class="feedback__buttons">
        <button class="feedback__button btn btn--primary btn--small">Ja</button>
        <button class="feedback__button btn btn--primary btn--small">Nej</button>
      </div>
    </div>
  </div>
</div>
```
```default.js hidden
SG_WELL_PURPLE = true;
```
Väljer användaren ja, presenteras en tacktext.
När text visas utan knappar så använd klassen `.feedback__text--standalone` för att lägga till mer luft ovanför och under texten i mobilläge.

```standalone.html
<div class="box box--no-padding">
  <div class="section section--boxed">
  </div>
  <div class="section section--boxed section--compact-padding">
    <div class="feedback">
      <span class="feedback__text feedback__text--standalone text-standard">
        Tack för din feedback!
      </span>
    </div>
  </div>
</div>
```
```standalone.js hidden
SG_WELL_PURPLE = true;
```

Väljer användaren nej, presenteras ett formulär med möjlighet till återkoppling.

```textarea.html
<div class="box box--no-padding">
  <div class="section section--boxed">
  </div>
  <div class="section section--boxed section--compact-padding">
    <div class="feedback feedback--textarea">
      <div class="form-group form-group--margin-b-small">
        <label class="form-label" for="exampleTextarea1">Tack, berätta gärna hur vi kan förbättra den här sidan</label>
        <textarea class="form-control" id="exampleTextarea1" rows="4" aria-describedby="textareaHelp" placeholder="Platshållare"></textarea>
      </div>
      <button class="btn btn--primary btn--small">Skicka</button>
    </div>
  </div>
</div>
```
```standalone.js hidden
SG_WELL_PURPLE = true;
```
