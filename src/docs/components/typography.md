---
name: Typografi
category: Komponenter
---

På skolverkets domäner, använd alltid Source Sans Pro i vikterna Regular och Bold.

## Rubriker

* använd Source Sans Pro Bold
* använd versalisering för rubriker
* använd rubriker konsekvent för att skapa en tydlig hierarki

```headlines.html
    <h1 class="h1">En 45px Bold rubrik</h1>
    <h2 class="h2">En 36px Bold rubrik</h2>
    <h3 class="h3">En 25px Bold rubrik</h3>
    <h4 class="h4">En 20px Bold rubrik</h4>
```

## Ingress

* använd 25px för en ingress
* det bör bara finnas en ingress per sida

```leading.html
<p class="text-large">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
```

## Brödtext

* använd 20px Regular – 18px på mindre skärmar
* undvik fetstil eller kursiv text
* använd mindre storlekar enbart om det finns ett användarbehov (ex. 16px, 14px, 12px)
* se till att spaltbredden inte överstiger 80 tecken, läsbarheten blir sämre över den gränsen.

```body.html
<p class="text-standard">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
```

## Länkar
* länkar i brödtext ska vara blåa och understrukna

```links.html
<p class="text-standard"><a href="#link1" class="text-link">En länk utan omgivande text</a></p>
<p class="text-standard"><a href="#link2" class="text-link">En länk med omgivande text</a> sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
<p class="text-standard">
  <a href="#link1" class="text-link">En extern länk <i class="icon-lock"></i></a>
</p>
<p class="text-standard">
  <a href="#link1" class="text-link">En länk som kräver inloggning <i class="icon-hyperlink"></i></a>
</p>
<p class="text-standard">
  <a href="#link1" class="text-link text-link--disabled">En blockerad länk</a>
</p>
```

## Listor
* punktlistor börjar med gemen bokstav och avslutas inte med punkt
* i numrerade listor är det viktigt att skriva fullständiga meningar

```lists.html
<ul class="list text-standard">
  <li>perspiciatis unde omnis iste</li>
  <li>consequuntur magni dolores eos qui ratione</li>
  <li>quis nostrum exercitationem</li>
</ul>

<ol class="list text-standard">
  <li>Perspiciatis unde omnis iste.</li>
  <li>Consequuntur magni dolores eos qui ratione.</li>
  <li>Quis nostrum exercitationem.</li>
</ol>
```

## Exempelsida

```page.html
<h1 class="h1">En 45px Bold rubrik</h1>
<p class="text-large">Det här är en ingress på 25px. Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Curabitur blandit tempus porttitor. Vestibulum id ligula porta felis euismod semper.</p>

<h2 class="h2">En 36px Bold rubrik</h2>
<p class="text-standard">Det här är en brödtextparagraf på 20px. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur. Aenean lacinia bibendum nulla sed consectetur. Sed posuere consectetur est at lobortis.</p>

<h3 class="h3">En 25px Bold rubrik</h3>
<p class="text-standard">Etiam porta sem malesuada magna mollis euismod. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Maecenas faucibus mollis interdum. Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus.</p>

<h4 class="h4">En 20px Bold rubrik</h4>
<p class="text-standard">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec sed odio dui. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget urna mollis ornare vel eu leo.</p>

<ul class="list text-standard">
  <li>here is a bulleted list</li>
  <li>this is another item in the list</li>
  <li>and another item with a bit more text</li>
</ul>

<ol class="list text-standard">
  <li>Understand that this is a numbered list.</li>
  <li>Follow the second step in this numbered list.</li>
  <li>Make sure each item is a full sentence ending with a full stop.</li>
</ol>

<ul class="list list--reset text-standard">
  <li><a href="#" class="text-link">Related link</a></li>
  <li><a href="#" class="text-link">Another related link</a></li>
  <li><a href="#" class="text-link">And another link</a></li>
  <li><a href="#" class="text-link">More</a></li>
</ul>

<p class="text-standard">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec sed odio dui. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
<p class="text-small">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec sed odio dui. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
<hr>
<p class="text-standard">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec sed odio dui. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
```
