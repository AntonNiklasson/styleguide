---
name: Färger
---

# Färger

Namn | Hex | Variabel | Exempel
---|---|---|---
{{#each colors}}
	{{this.name}} | `{{ this.hex }}` | `{{ this.variable }}` | <div style="width: 50px; height: 50px; border: 1px solid black; border-radius: 2px; background-color: {{ this.hex }};">
{{/each}}
