---
name: Färger
category: Komponenter
---

Använd alltid Skolverkets färgpalett.

### Färgkontrast

Använd alltid ett kontrastvärde på minst 4:5:1 som är [rekommenderat av W3C](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html). Du behöver testa att din tjänst uppfyller denna riktlinje.

```base.html hidden
<div id="swatches-container"></div>
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
```base.js hidden

  var palette_colors = [
    {
      type: "Text",
      colors: [
        {
          label: "Textfärg",
          hex: "#292929"
        },
        {
          label: "Sekundär textfärg",
          hex: "#666666"
        },
        {
          label: "Text mot mörkt",
          hex: "#FFFFFF",
          border: true
        }
      ]
    },
    {
      type: "Länkar",
      colors: [
        {
          label: "Länkfärg",
          hex: "#0079C2"
        },
        {
          label: "Länkfärg hover",
          hex: "#005182"
        },
        {
          label: "Länkfärg besökt",
          hex: "#386406"
        }
      ]
    },
    {
      type: "Bakgrunder",
      colors: [
        {
          label: "Mörk bakgrund",
          hex: "#692969"
        },
        {
          label: "Ramfärg",
          hex: "#E1D4E1"
        },
        {
          label: "Ljus bakgrund",
          hex: "#F8F4F8"
        }
      ]
    },
    {
      type: "Statusfärger",
      colors: [
        {
          label: "Felmeddelande",
          hex: "#CD2126"
        },
        {
          label: "Fokus",
          hex: "#FCB933"
        }
      ]
    },
    {
      type: "Gråskala",
      colors: [
        {
          label: "",
          hex: "#292929"
        },
        {
          label: "",
          hex: "#666666"
        },
        {
          label: "",
          hex: "#CFCFCF"
        },
        {
          label: "",
          hex: "#F3F3F3"
        }
      ]
    }
  ]

  SG_VIEW = {
    name: 'swatches',
    args: [
      palette_colors,
      'swatches-container'
    ]
  }

```

## Utökad färgpalett
Används för komplement ex. i grafer och grafik.

```extended.html hidden
<div id="swatches-container"></div>
```
```extended.sass
// Complementary
$color-turq: #178079 !default;
```
```extended.js hidden

  var palette_colors = [
    {
      type: "Turkos",
      colors: [
        {
          label: "",
          hex: "#178079"
        }
      ]
    }
  ]

  SG_VIEW = {
    name: 'swatches',
    args: [
      palette_colors,
      'swatches-container'
    ]
  }

```
