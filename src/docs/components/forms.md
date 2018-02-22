---
name: Formulär
category: Komponenter
---

Skolverkets formulär utgår från Bootstrap 4. Det bygger på att varje formulärelement är omslutet av den `.form-group`-element.

```input-simple.html
<form>
  <div class="form-group">
    <label class="form-label form-label--margin-reset" for="exampleInputEmail1">E-post</label>
    <span id="emailHelp" class="form-text">Beskrivning av textfält</span>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Fyll i e-post">
  </div>
  <div class="form-group">
    <label class="form-label" for="exampleInputPassword1">Lösenord</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Lösenord">
  </div>
  <button type="submit" class="btn btn--primary">Skicka</button>
</form>
```

## Fler varianter

Fältet går både att låsa helt (`disabled`), tillåtas att kopieras/läsas (`readonly`) eller markeras att det inte klarat validering.

```input-readonly.html
<div class="form-group">
  <label class="form-label" for="exampleInputDisabled1">Går ej att redigera</label>
  <input class="form-control" id="exampleInputDisabled1" type="text" placeholder="Kan inte redigeras..." disabled>
</div>
<div class="form-group">
  <label class="form-label" for="exampleInputReadonly1">Endast läsbar</label>
  <input class="form-control" id="exampleInputReadonly1" type="text" value="Den här texten kan kopieras men inte ändras" placeholder="Kan inte ändras..." readonly>
</div>
<div class="form-group">
  <label class="form-label" for="exampleInputReadonly1">Validerar<span class="text-error">*</span></label>
  <input class="form-control form-control--error icon-error" id="exampleInputReadonly1" type="text" placeholder="Validerar...">
  <span class="text-error text-small">Hjälpsamt felmeddelande</span>
</div>
```

## Textruta

Flerradiga textfält har stöd för samtliga tillstånd.

```textarea.html
<div class="form-group">
  <label class="form-label form-label--margin-reset" for="exampleTextarea1">Textområde med beskrivning</label>
  <span id="textareaHelp" class="form-text">Beskrivning av textområde</span>
  <textarea class="form-control" id="exampleTextarea1" rows="4" aria-describedby="textareaHelp" placeholder="Platshållare"></textarea>
</div>
<div class="form-group">
  <label class="form-label" for="exampleTextarea2">Textområde som är avstängt</label>
  <textarea class="form-control" id="exampleTextarea2" rows="4" placeholder="Kan inte ändras..." disabled></textarea>
</div>
<div class="form-group">
  <label class="form-label" for="exampleTextarea3">Textområde som bara går att kopiera</label>
  <textarea class="form-control" id="exampleTextarea3" rows="2"  readonly>1bd8994b8f2998e2216d846ed40bffd62493b5cb</textarea>
</div>
<div class="form-group">
  <label class="form-label" for="exampleTextarea3">Textområde med validering<span class="text-error">*</span>
  </label>
  <textarea class="form-control form-control--error form-control--error-textarea icon-error"
    id="exampleTextarea3" rows="4" placeholder="Validerar..."></textarea>
  <span class="text-error text-small">Hjälpsamt felmeddelande</span>
</div>
```

## Checkbox och radioknappar

Namnkonvention med `.custom-control` är baserad på Bootstrap 4 men har anpassats för att möta [BEM](#konventioner).

```checkbox.html
<div class="custom-control custom-control--checkbox">
  <input type="checkbox" class="custom-control__input" id="customCheck1">
  <label class="custom-control__label" for="customCheck1">Lorem ipsum</label>
</div>
<div class="custom-control custom-control--checkbox">
  <input type="checkbox" class="custom-control__input" id="customCheck2">
  <label class="custom-control__label" for="customCheck2">Dollar sum</label>
</div>
<div class="custom-control custom-control--checkbox">
  <input type="checkbox" class="custom-control__input" id="customCheck3" disabled>
  <label class="custom-control__label" for="customCheck3">Ej valbar</label>
</div>
```

```radio.html
<div class="custom-control custom-control--radio">
  <input type="radio" id="customRadio1" name="customRadio" class="custom-control__input">
  <label class="custom-control__label" for="customRadio1">Lorem</label>
</div>
<div class="custom-control custom-control--radio">
  <input type="radio" id="customRadio2" name="customRadio" class="custom-control__input">
  <label class="custom-control__label" for="customRadio2">Ipsum</label>
</div>
<div class="custom-control custom-control--radio">
  <input type="radio" id="customRadio3" name="customRadio" class="custom-control__input" disabled>
  <label class="custom-control__label" for="customRadio3">Ej valbar</label>
</div>
```

## Rullgardin

Den här komponenten använder webbläsarens inbyggda `<select>`-element i bakgrunden av tillgänglighetsskäl men designats för att hänga ihop med andra formulärelement.

```dropdown.html
<div class="form-group">
  <label class="text-standard" for="exampleDropdown1">Rullgardin</label>
  <select class="form-control icon-dropdown-arrow" id="exampleDropdown1">
    <option value="1">Val 1</option>
    <option value="1">Val 2</option>
  </select>
</div>
<div class="form-group">
  <label class="text-standard" for="exampleDropdown2">Rullgardin ej valbar</label>
  <select class="form-control icon-dropdown-arrow-disabled"
    id="exampleDropdown2" disabled>
    <option value="1">Platshållare</option>
  </select>
</div>
```

## Sökfält / textfält med ikon

Beskrivning ...

```searchfield.html
<div class="form-group">
  <label class="text-standard" for="inputSearch">Sökfält / textfält med ikon</label>
  <div class="display-flex">
    <input type="text" class="form-control form-control--search icon-search"
      id="inputSearch" placeholder="Platshållare" />
    <button class="btn btn--primary">Sök</button>
  </div>
</div>
```
