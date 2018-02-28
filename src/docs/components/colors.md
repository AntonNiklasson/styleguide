---
name: Färger
category: Komponenter
---

Använd alltid Skolverkets färgpalett.

### Färgkontrast

Använd alltid ett kontrastvärde på minst 4:5:1 som är [rekommenderat av W3C](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html). Du behöver testa att din tjänst uppfyller denna riktlinje.

```base.html hidden
<div class="row">
  <div class="col" style="text-align: center;">
    <h2 class="h4">Text</h2><br>
    <div class="swatch">
      <div class="swatch__preview" style="background: #292929;"></div>
      <div class="swatch__value">#292929</div>
      <div class="swatch__label">Textfärg</div>
    </div>
    <div class="swatch">
      <div class="swatch__preview" style="background: #666666;"></div>
      <div class="swatch__value">#666666</div>
      <div class="swatch__label">Sekundär textfärg</div>
    </div>
    <div class="swatch">
      <div class="swatch__preview swatch__preview--bordered" style="background: #FFFFFF;"></div>
      <div class="swatch__value">#FFFFFF</div>
      <div class="swatch__label">Text mot mörkt</div>
    </div>
  </div>

  <div class="col" style="text-align: center;">
    <h2 class="h4">Länkar</h2><br>
    <div class="swatch">
      <div class="swatch__preview" style="background: #0079C2;"></div>
      <div class="swatch__value">#0079C2</div>
      <div class="swatch__label">Länkfärg</div>
    </div>
    <div class="swatch">
      <div class="swatch__preview" style="background: #005182;"></div>
      <div class="swatch__value">#005182</div>
      <div class="swatch__label">Länkfärg hover</div>
    </div>
    <div class="swatch">
      <div class="swatch__preview" style="background: #386406;"></div>
      <div class="swatch__value">#386406</div>
      <div class="swatch__label">Länkfärg besökt</div>
    </div>
  </div>

  <div class="col" style="text-align: center;">
    <h2 class="h4">Bakgrunder</h2><br>
    <div class="swatch">
      <div class="swatch__preview" style="background: #692969;"></div>
      <div class="swatch__value">#692969</div>
      <div class="swatch__label">Mörk bakgrund</div>
    </div>
    <div class="swatch">
      <div class="swatch__preview" style="background: #E1D4E1;"></div>
      <div class="swatch__value">#E1D4E1</div>
      <div class="swatch__label">Ramfärg</div>
    </div>
    <div class="swatch">
      <div class="swatch__preview" style="background: #F8F4F8;"></div>
      <div class="swatch__value">#F8F4F8</div>
      <div class="swatch__label">Ljus bakgrund</div>
    </div>
  </div>

  <div class="col" style="text-align: center;">
    <h2 class="h4">Statusfärger</h2><br>
    <div class="swatch">
      <div class="swatch__preview" style="background: #CD2126;"></div>
      <div class="swatch__value">#CD2126</div>
      <div class="swatch__label">Felmeddelande</div>
    </div>
    <div class="swatch">
      <div class="swatch__preview" style="background: #FCB933;"></div>
      <div class="swatch__value">#FCB933</div>
      <div class="swatch__label">Fokus</div>
    </div>
  </div>

  <div class="col" style="text-align: center;">
    <h2 class="h4">Gråskala</h2><br>
    <div class="swatch">
      <div class="swatch__preview" style="background: #292929;"></div>
      <div class="swatch__value">#292929</div>
      <div class="swatch__label"></div>
    </div>
    <div class="swatch">
      <div class="swatch__preview" style="background: #666666;"></div>
      <div class="swatch__value">#666666</div>
      <div class="swatch__label"></div>
    </div>
    <div class="swatch">
      <div class="swatch__preview" style="background: #CFCFCF;"></div>
      <div class="swatch__value">#CFCFCF</div>
      <div class="swatch__label"></div>
    </div>
    <div class="swatch">
      <div class="swatch__preview" style="background: #F3F3F3;"></div>
      <div class="swatch__value">#F3F3F3</div>
      <div class="swatch__label"></div>
    </div>
  </div>
</div>
```
```base.sass
// Links
$color-blue: #0079C2 !default;
$color-blue-dark: #005182 !default;
$color-grass: #386406 !default;

// Backgrounds and decoration
$color-purple-dark: #692969 !default;
$color-purple-light: #F8F4F8 !default;
$color-purple: #E1D4E1 !default;

// Greys and base
$color-black: #000000 !default;
$color-white: #FFFFFF !default;
$color-gray: #666666 !default;
$color-gray-lighter: #CFCFCF !default;
$color-gray-light: #F3F3F3 !default;
$color-gray-dark: #292929 !default;

// Status
$color-error: #CD2126 !default;

// Focus
$color-yellow: #FCB933 !default;
```

## Utökad färgpalett
Används för komplement ex. i grafer och grafik.

```extended.html hidden
<div class="row">
  <div class="col" style="text-align: center;">
    <h2 class="h4">Turkos</h2><br>
    <div class="swatch">
      <div class="swatch__preview" style="background: #178079;"></div>
      <div class="swatch__value">#178079</div>
      <div class="swatch__label"></div>
    </div>
  </div>
</div>
```
```extended.sass
// Complementary
$color-turq: #178079 !default;
```
