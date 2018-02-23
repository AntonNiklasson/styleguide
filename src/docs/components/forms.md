---
name: Formulär
category: Komponenter
---

Formulär används för att skicka data. Varje formulärelement är omslutet av ett `.form-group`-element.

## Textfält
Textfält låter användaren skriva in en kombination av bokstäver, siffror och symboler.
Textfält kan vara enradiga eller på flera rader.

Fältet går både att låsa helt `disabled`, tillåtas att kopieras/läsas `readonly` eller markera eventuella valideringsfel.

```input-simple.html
<form>
  <div class="form-group">
    <label class="form-label form-label--margin-reset" for="exampleInputEmail1">Textfältstitel</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Platshållare">
  </div>
  <div class="form-group">
    <label class="form-label form-label--margin-reset" for="exampleInputEmail1">Textfältstitel</label>
    <span id="emailHelp" class="form-text">Kontextuell hjälptext</span>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Platshållare">
  </div>
  <div class="form-group">
    <label class="form-label" for="exampleInputDisabled1">Textfältstitel</label>
    <input class="form-control" id="exampleInputDisabled1" type="text" placeholder="Inaktivt textfält" disabled>
  </div>
  <div class="form-group">
    <label class="form-label" for="exampleInputReadonly1">Textfältstitel</label>
    <input class="form-control" id="exampleInputReadonly1" type="text" value="Inaktivt textfält där texten kan kopieras men inte ändras" placeholder="Inaktivt textfält" readonly>
  </div>
  <div class="form-group">
    <label class="form-label" for="exampleInputReadonly1">Textfältstitel<span class="text-error">*</span></label>
    <input class="form-control form-control--error icon-error" id="exampleInputReadonly1" type="text" placeholder="">
    <span class="text-error text-small">Hjälpsamt felmeddelande</span>
  </div>
  <div class="form-group">
    <label class="form-label form-label--margin-reset" for="exampleTextarea1">Textfältstitel</label>
    <textarea class="form-control" id="exampleTextarea1" rows="4" aria-describedby="textareaHelp" placeholder="Platshållare"></textarea>
  </div>
</form>
```

## Kryssrutor

Kryssrytor låter användaren göra ett eller flera val från en lista.
Namnkonvention med `.custom-control` är baserad på Bootstrap 4 men har anpassats för att möta [BEM](#konventioner).

```checkbox.html
<div class="custom-control custom-control--checkbox">
  <input type="checkbox" class="custom-control__input" id="customCheck1">
  <label class="custom-control__label" for="customCheck1">Kryssboxval 1</label>
</div>
<div class="custom-control custom-control--checkbox">
  <input type="checkbox" class="custom-control__input" id="customCheck2">
  <label class="custom-control__label" for="customCheck2">Kryssboxval 1</label>
</div>
<div class="custom-control custom-control--checkbox">
  <input type="checkbox" class="custom-control__input" id="customCheck3" disabled>
  <label class="custom-control__label" for="customCheck3">Inaktiv kryssbox</label>
</div>
```

## Radioknappar

Radioknappar låter användaren göra ett val från en synlig lista.
Namnkonvention med `.custom-control` är baserad på Bootstrap 4 men har anpassats för att möta [BEM](#konventioner).

```radio.html
<div class="custom-control custom-control--radio">
  <input type="radio" id="customRadio1" name="customRadio" class="custom-control__input">
  <label class="custom-control__label" for="customRadio1">Radioknappsval 1</label>
</div>
<div class="custom-control custom-control--radio">
  <input type="radio" id="customRadio2" name="customRadio" class="custom-control__input">
  <label class="custom-control__label" for="customRadio2">Radioknappsval 2</label>
</div>
<div class="custom-control custom-control--radio">
  <input type="radio" id="customRadio3" name="customRadio" class="custom-control__input" disabled>
  <label class="custom-control__label" for="customRadio3">Inaktiv radioknapp</label>
</div>
```

## Rullgardinsmenyer

Rullgardinsmenyer låter användaren göra ett val från en lista.
Komponenten använder webbläsarens `<select>`-element i bakgrunden av tillgänglighetsskäl.

```dropdown.html
<div class="form-group">
  <label class="text-standard" for="exampleDropdown1">Rullgardinsrubrik</label>
  <select class="form-control icon-dropdown-arrow" id="exampleDropdown1">
    <option value="1">Rullgardinsval 1</option>
    <option value="1">Rullgardinsval 2</option>
    <option value="1">Rullgardinsval 3</option>
  </select>
</div>
<div class="form-group">
  <label class="text-standard" for="exampleDropdown2">Rullgardinsrubrik</label>
  <select class="form-control icon-dropdown-arrow-disabled"
    id="exampleDropdown2" disabled>
    <option value="1">Inaktiv rullgardin</option>
  </select>
</div>
```

## Sökfält

Ett sökfält låter användaren söka efter specifikt innehåll.

```searchfield.html
<div class="form-group">
  <label class="text-standard" for="inputSearch">Sökfältsrubrik</label>
  <div class="form-group-search">
    <input type="text" class="form-control form-control--search icon-search"
      id="inputSearch" placeholder="Platshållare" />
    <button class="btn btn--primary">Sök</button>
  </div>
</div>
```
