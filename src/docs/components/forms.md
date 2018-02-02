---
name: Formulär
category: Komponenter
---

Exempel och vägledning för använding av flera olika typer av komponenter i ett formulär.

## Exempel

Skolverkets formulär utgår från Bootstrap 4. Här följer ett enkelt exempel

```input-simple.html
<form>
  <div class="form-group">
    <label class="form-label" for="exampleInputEmail1">E-post</label>
    <small id="emailHelp" class="form-text">Beskrivning av textfält</small>
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

Ibland behöver ett fält inte kunna ändras. Lägg till `readonly` attribut på ett inputfält för att hindra modifikation av fältets värde.
```input-readonly.html
<div class="form-group">
  <label class="form-label" for="exampleInputReadonly1">Endast läsbar</label>
  <input class="form-control" id="exampleInputReadonly1" type="text" placeholder="Kan inte ändras..." readonly>
</div>
<div class="form-group">
  <label class="form-label" for="exampleInputReadonly1">Validerar<span class="text-error">*</span></label>
  <input class="form-control form-control--error icon-warning" id="exampleInputReadonly1" type="text" placeholder="Validerar...">
  <small class="text-error">Hjälpsamt felmeddelande</small>
</div>
```

## Checkbox och radioknappar

Namnkonvention med `custom-control`är baserad på Bootstrap 4 men har anpassats för att möta BEM.

```checkbox.html
<div class="custom-control custom-control--checkbox">
  <input type="checkbox" class="custom-control__input" id="customCheck1">
  <label class="custom-control__label" for="customCheck1">Lorem ipsum</label>
</div>
<div class="custom-control custom-control--checkbox">
  <input type="checkbox" class="custom-control__input" id="customCheck2">
  <label class="custom-control__label" for="customCheck2">Dollar sum</label>
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
```
