---
name: Återkoppling
category: Kompositioner
---

Återkopplngs-komponenten läggs längs ner i en sektion.

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
```default:_well/purple.css hidden
```

När text visas utan knappar så använd klassen `.feedback__text--standalone` för att lägga till mer luft ovanför och under texten i mobilläge.

```standalone.html
<div class="box box--no-padding">
  <div class="section section--boxed">
  </div>
  <div class="section section--boxed section--compact-padding">
    <div class="feedback">
      <span class="feedback__text feedback__text--standalone text-standard">
        Hjälpte informationen på den här sidan dig?
      </span>
    </div>
  </div>
</div>
```
```standalone:_well/purple.css hidden
```

Med en textruta som användaren kan fylla i
                    
```textarea.html
<div class="box box--no-padding">
  <div class="section section--boxed">
  </div>
  <div class="section section--boxed section--compact-padding">
    <div class="feedback feedback--textarea">
      <div class="form-group">
        <label class="form-label" for="exampleTextarea1">Textområde med beskrivning</label>
        <textarea class="form-control" id="exampleTextarea1" rows="4" aria-describedby="textareaHelp" placeholder="Platshållare"></textarea>
      </div>
      <button class="btn btn--primary btn--small">Knapp normal</button>
    </div>
  </div>
</div>
```
```standalone:_well/purple.css hidden
```