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
<p class="text-big">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
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
  <a href="#link1" class="text-link disabled">En blockerad länk</a>
</p>
```

## Listor
* punktlistor börjar med gemen bokstav och avslutas inte med punkt
* i numrerade listor är det viktigt att skriva fullständiga meningar

```lists.html
<ul>
  <li>perspiciatis unde omnis iste</li>
  <li>consequuntur magni dolores eos qui ratione</li>
  <li>quis nostrum exercitationem</li>
</ul>

<ol>
  <li>Perspiciatis unde omnis iste.</li>
  <li>Consequuntur magni dolores eos qui ratione.</li>
  <li>Quis nostrum exercitationem.</li>
</ol>
```
