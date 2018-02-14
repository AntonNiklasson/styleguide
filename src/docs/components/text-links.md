---
name: Textlänkar
category: Komponenter
---

Beskrivning...

## Default

Textlänkar states:
- Standard
- Visited
- Disabled

```default.html
<a href="#1" class="text-link">
  <span class="text-standard">Textlänkar</span>
</a>
<a href="#2" class="text-link">
  <span class="text-standard">Textlänkar</span>
</a>
<a href="#3" class="text-link disabled">
  <span class="text-standard">Textlänkar</span>
</a>
```

## Textlänk within a text

```within-text.html
<div class="text-standard">
  Aliquam dictum ac elit semper malesuada. Nunc venenatis fermentum elit non aliquet. Pellentesque massa nisi, consectetur nec pellentesque id, fringilla et arcu. Curabitur dignissim ante sit amet lacinia gravida
  <a href="#" class="text-link text-link--icon">
    <span class="text-standard line-height-normal">justo trist placerat</span>
    <i class="icon-lock icon-lock--x1-2"></i>
  </a>
  phasellus efficitur nulla dolor, non blandit erat facilisis in. Mauris cursus ante a justo tristique placerat. Curabitur in euismod orci in risus varius, eu rutrum leo pharetra. Maecenas auctor congue purus sit amet vehicula
  <a href="#" class="text-link text-link--icon">
    <span class="text-standard line-height-normal">per conubia nostra</span>
    <i class="icon-hyperlink icon-hyperlink--x1-2"></i>
  </a>
  class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec pulvinar nulla nec faucibus feugiat. Nunc facilisis lobortis tellus nec tincidunt.
</div>
```
## Textlänk med ikon

```with-icon.html
<div>
  <a href="#" class="text-link text-link--icon">
    <span class="text-standard">Curabitur dignissim ante</span>
    <i class="icon-lock icon-lock--x1-33"></i>
  </a>
</div>
<div>
  <a href="#" class="text-link text-link--icon">
    <span class="text-large">Curabitur dignissim ante</span>
    <i class="icon-lock icon-lock--x2"></i>
  </a>
</div>
```