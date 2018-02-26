---
name: Box
category: Komponenter
---

Boxar är flexibla innehållsytor som kan husera en mängd olika komponenter.

```default.html
<div class="box">
</div>
```
```default.js hidden
SG_WELL_PURPLE = true;
```

I de fall där flera boxar placeras efter varandra används modifieraren `margins` för att förhindra att skuggan överlappar.


```margins.html
<div class="box box--margins">
</div>
<div class="box box--margins">
</div>
```
```margins.js hidden
SG_WELL_PURPLE = true;
```