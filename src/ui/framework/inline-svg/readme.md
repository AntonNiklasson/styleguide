# Inline Svg (Enbart för utvecklare)
<p style="font-size: 20px;">En html-sektion som är dynamiskt genererad när man bygger projektet och som definierar alla ikoner som finns tillgäligt på sajten.</p>

Bygg-skriptet kollar på alla svg-filer som befinner sig i mappen <strong>src/ui/assets/svg</strong> och komprimerar sedan dessa till en html-fil.

## Implementering
Den här kodsnutten skall inkluderas precis efter `<body>`-taggen. Den innehåller svg path-data för alla ikoner som sedan refereras till. Man renderar en ikon genom [ikon-komponenten](components/detail/icon)
