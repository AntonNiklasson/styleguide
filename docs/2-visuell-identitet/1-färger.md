---
name: Färger
---

# Färger

Använd alltid ett kontrastvärde på minst 4:5:1 som är [rekommenderat av W3C](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html). Du behöver testa att din tjänst uppfyller denna riktlinje.

Namn | Hex | Variabel | Exempel
---|---|---|---
{{#each colors}}
	{{this.name}} | `{{ this.hex }}` | `{{ this.variable }}` | <div style="width: 50px; height: 50px; border: 1px solid black; border-radius: 2px; background-color: {{ this.hex }};">
{{/each}}
