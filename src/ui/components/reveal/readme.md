# Visa/dölj (reveal)
<p style="font-size: 20px;">Visa/dölj-komponenten är en behållare som man kan expandera och fälla ihop för att minimera sidans höjd.</p>


## Tillgänglighet
Följande interaktionsprinciper förväntas av den här komponenten:

### Knapptryck eller fokus på knapp + enter/mellanslag
Ska fälla ut/ihop innehållet. Om vi fäller ut så fokus sättas på innehållet. Om vi fäller ihop skall fokus sättas på knappen 

### Fokus på innehåll + Escape
Ska fälla ihop innehållet och sätta fokus på knappen

### Fokus utanför innehåll
Innehållet lyssnar inte längre på knapptryck

## För utvecklare

### Kontext
| Egenskap                         | Beskrivning |
|----------------------------------|-------------|
| <strong>id</strong>              | Ett unikt id som behållaren använder sig av för att kunna expandera och fälla ihop |
| <strong>title</strong>           | Rubriken för innehållet |
| <strong>toggleCloseText</strong> | Denna text visas när innehållet är expanderad. |
| <strong>toggleOpenText</strong>  | Denna text visas när innehållet är ihopfälld. |
| <strong>body</strong>            | En html-sträng som är innehållet som rendreras i behållaren. |

### No-js
Om man har stängt av javascript så skall man fortfarande kunna ta till sig innehållet. Detta görs genom att inkludera `/css/no-js.min.css` i [headern](http://localhost:3000/components/detail/head) i en noscript-tag.

### Print
När man skriver ut sidan så visar vi allt innehåll som om komponenten är utfälld. Vi tar även bort knapptexten.
