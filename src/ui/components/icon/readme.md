# Ikon
<p style="font-size: 20px;">En komponent för att rendera ikoner på sidan.</p> 

## För utvecklare

Efter man har inkluderat [inline-svg](/components/detail/inline-svg) på sidan kan vi nu rendera ut ikoner med hjälp av denna komponent.

Alla ikoner som finns tillgängliga med denna komponent finns i menyn till vänster.

### Kontext
| Egenskap                | Beskrivning |
|-------------------------|-------------|
| <strong>name</strong>   | Namnet på ikonen som du vill rendera. Detta är samma som filen heter i svg-mappen. |
| <strong>label</strong>  | Denna strängen är till för tillgänglighetsanpassning. |
| <strong>inline</strong> | Ikonen får en `display:inline` style. Perfekt när du vill använda ikonen i kombination med text. |
| <strong>block</strong>  | Ikonen får en `display:block` style. Används ofta när man positionerar en ikon absolut eller om ikonens förälder-element behöver känna till ikonens dimentioner. |
| <strong>middle</strong> | Ikonen linjeras vertikalt i mitten. Används t.ex. om ikonen skall vara större än texten den ligger bedvid. |
| <strong>class</strong>  | Om förälderkomponenten behöver en specifik style på ikonen så kan man skicka med en klass för att tydligt kunna separera selektorer. |
| <strong>attr</strong>   | Sätter ett data-attribut på ikonen. Perfekt för att använda som javascript-selektor utan att behöva blanda in klasser. |
