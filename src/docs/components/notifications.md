---
name: Notifieringar
category: Komponenter
---

Beskrivning...

```default.html
<div class="notification notification--success">
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="notification__flash">
          <span class="text-standard"><strong>Allt gott!</strong> Lorem ipsum dolor sit amet.</span>
          <button class="btn btn--primary">Stäng</button>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="notification notification--warning">
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="notification__flash">
          <span class="text-standard"><strong>Varning!</strong> Lorem ipsum dolor sit amet.</span>
          <button class="btn btn--primary">Stäng</button>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="notification notification--error">
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="notification__flash">
          <span class="text-standard"><strong>Något gick fel!</strong> Lorem ipsum dolor sit amet.</span>
          <button class="btn btn--primary">Stäng</button>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="notification notification--info">
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="notification__flash">
          <span class="text-standard"><strong>Information!</strong> Lorem ipsum dolor sit amet.</span>
          <button class="btn btn--primary">Stäng</button>
        </div>
      </div>
    </div>
  </div>
</div>
```
```default.js hidden

var items = document.querySelectorAll('.btn');

for (i = 0; i < items.length; i++) {
  items[i].addEventListener('click', function() {
    this.closest(".notification").classList.toggle('close');
  });
}
```

Animerade med modifieraren `animated`.

```flash.html
<div class="notification notification--success notification--animated">
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="notification__flash">
          <span class="text-standard"><strong>Allt gott!</strong> Lorem ipsum dolor sit amet.</span>
          <button class="btn btn--primary">Stäng</button>
        </div>
      </div>
    </div>
  </div>
</div>
```
```flash.js hidden

var resetBtn = document.createElement('button');
resetBtn.appendChild(document.createTextNode('Visa animation'));
resetBtn.setAttribute('class', 'btn btn--small btn--secondary');
resetBtn.style.marginTop = '30px';
var notification = document.querySelector(".notification");
notification.parentNode.appendChild(resetBtn);

resetBtn.addEventListener('click', function() {
  notification.classList.remove('notification--animated');
  setTimeout(function () {
    notification.classList.add('notification--animated');
  }, 300)

});

```

Inuti en box.

```built-in.html
<div class="box">
<div class="notification notification--info notification--info--bordered">
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="notification__textbox">
          <span class="text-standard">
            <strong>Vivamus placerat:</strong>
            Morbi tortor mi, lobortis a pharetra eget, ultricies id elit. Curabitur gravida ex ac accumsan elementum. Vivamus placerat, neque quis rutrum feugiat, turpis turpis placerat tortor, vitae euismod quam sem eleifend turpis. Donec tristique commodo odio eu facilisis. Proin convallis risus mi, in mollis quam molestie.
          </span>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="notification notification--warning notification--warning--bordered">
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="notification__textbox">
          <span class="text-standard">
            <strong>Ej gällande kursplan:</strong> Läroplanen har reviderats med skrivningar
            om digital kompetens (se länk till den nya läroplanen nedan). Under läsåret 2017/2018
            är det möjligt att följa den nya eller den gamla läroplanen. Från och med läsåret 2018/2019
            är det däremot obligatoriskt att följa visas mer
          </span>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
```
```built-in.js hidden
SG_WELL_PURPLE = true;
```
