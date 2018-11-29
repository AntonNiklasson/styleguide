# Checklista för utvecklare

Definition of Done är en checklista som du kan använda innan du skickar en Pull Request och som du som Reviewer kan använda under kodgranskningen. Denna använder vi för att säkerställa att koden håller en hög kvalitet, underlätta för nya utvecklare samt att effektivisera kodgranskningen.

## Tydlig kod
Ta en extra titt på den nyproducerade koden och säkerställ att den är effektiv och läsbar. Koden skall gå att läsa utan kommentarer. Kommentarer skall vara begränsad till avvikande betéenden eller enhetsspecifika lösningar där koden i sin helhet inte kan påvisa sin funktionalitet.

WIP - Snart kommer dokumentation kring hur du skall strukturera din kod.

## Tillgänglighet
Analysera koden med [Google Lighthouse](https://developers.google.com/web/tools/lighthouse/) och korrigera enligt intruktionerna under "Accessibility"

## Prestanda
Se till att din komponent/sida rendreras utan att innehåll hoppar till vid en sidladdning. Testa även att sakta ner uppkopplingen i din webbläsare och säkerställ att det inte skapar en obehaglig upplevelse.

## Responsiv design
Detta projektet är inte mobile-first, men skall funka bra på alla enheter. Testa olika format, liggandes, ståendes och se till att allt ser bra ut.

## Webbläsarkompatibilitet
Testa din kod i följande webbläsare

1. Chrome
2. Firefox
3. Safari
4. IE 11
5. IE Edge
6. iOS Safari

## Dokumentation
Kom ihåg att dokumentera din kod genom att skapa en readme.md fil i samma mapp som komponenten. Den här kommer visas under "Anteckningar"-tabben i Fractal. 
