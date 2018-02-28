---
name: Konventioner
category: Kom igång
---

## CSS
För att underlätta utveckling och bibehålla komponenternas modularitet och visuella integritet så används strikta regler för hur klasser och regler skrivs. Med undantag för de fall då konventioner lånas från Bootstrap 4 (t.ex i formulär) används metoden _BEM_ (_Block Element Modifier_) för att skapa skalbar och objektorientead CSS. Kort kan säga att BEM är byggt för att underlätta så att stilregler från en komponents CSS stör någon annan (med oväntat arv) och underlätta samarbete mellan många utvecklare. Läs mer här:

- **BEM**: http://www.getbem.com
- **Bootstrap 4**: https://getbootstrap.com/

## HTML och semantik
Det viktigaste att tänka på vid uppmärkning med HTML är såklart **tillgänglighet** och **semantik**, de båda går hand i hand men semantiken har också andra bonusvärden värden som sökmotorsoptimering och integration mot vissa tjänster (sk. _scraping_). Den HTML som används här eftersträvar att uppnå internationella webbriktlinjer för tillgänglighet, WCAG 2.0 (nivå AA) och PTS Webbriktlinjer samt använder sig av WAI-Aria där det behövs. Eftersom komponenterna kan implementeras på en rad olika sätt och olika miljöer _bör_ dock testning och säkerställande av tillgänglighet och användbarhet göras i den tjänst som använder komponenterna. Läs mer här:

- **WCAG 2.0**: https://www.w3.org/Translations/WCAG20-sv/
- **PTS Webbriktlinjer**: https://webbriktlinjer.se/
- **WAI Aria**: https://www.w3.org/WAI/intro/aria

## JavaScript
I dagsläget tillhandahålls inga JavaScript för att sköta beteenden i gränssnittet. Istället används bara demokod för att redovisa de tillstånd och varianter som finns att sätta.

## Med avstamp i Bootstrap
För ökad igenkänning bland utvecklare och därmed utvecklingseffektivitet lånar Skolverkets CSS en del från Bootstrap 4. Där Bootstrap-komponenter används har de modifierats för att möta Skolverkets designriktlinjer.
