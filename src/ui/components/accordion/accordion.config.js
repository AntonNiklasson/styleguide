const status = require('../../../dev/fractal/fractal-component-status')

module.exports = {
  status: status.ready,
  name: 'Dragspelsmeny',
  handle: 'accordion',
  context: {
    items: [
      {
        isActive: true,
        headline: 'Vad ska eleverna lära sig?',
        body: `<p>I kurs- och ämnesplanerna motsvaras målen för undervisningen av de förmågor som undervisningen ska hjälpa eleverna att utvecklas och som finns sammanfattade under rubriken <em>Syfte</em>. Dessa långsiktiga mål kommer till uttryck i den undervisning kring delar av det centrala innehållet som planeras och genomförs av läraren. Eleverna behöver förstå syftet med undervisningen och målen behöver vara tydliga och relevanta för undervisningssituationen.</p><p>I kursplanen för kommunal vuxenutbildning i svenska för invandrare (sfi) motsvaras målen för undervisningen av <em>Utbildningens mål och karaktär, </em>de inledande meningarna i respektive kurs kunskapsområden.</p><p>Det är viktigt att eleverna får lära sig förstå skillnader i kvalitet mellan olika prestationer. Diskutera och värdera exempel på arbetsprestationer med eleverna eller arbeta fram bedömningsexempel tillsammans med eleverna.</p>`
      },
      {
        isActive: false,
        headline: 'Vad kan de redan?',
        body: `<p>Den formativa bedömningen är en del av undervisningen. Det är viktigt att utforma undervisningen så att både du och eleverna ser hur och i vilken utsträckning eleverna har lärt eller förstått, det vill säga var de befinner sig i förhållande till målen. Kvaliteten på de uppgifter som eleverna arbetar med eller de frågor du ställer avgör om och hur eleverna får möjlighet att visa sina kunskaper och därmed vilken information du får tillgång till.</p><p>Utifrån den information du samlar in om elevernas kunskaper kan du ändra planeringen och undervisningen för att bättre möta elevernas behov och förutsättningar.</p>`
      },
      {
        isActive: false,
        headline: 'Hur ska eleven göra för att komma vidare?',
        body: `<p>Läraren, men också eleven själv och andra elever, kan ge återkoppling som för lärandet framåt. Återkopplingen fungerar när den bidrar till att ta elever framåt i deras lärande. Den kan också bidra till att stärka en dialog mellan lärare och elev om hur eleven ska göra för att närma sig målen.</p>`
      },
      {
        isActive: false,
        headline: 'Läs mer om formativ bedömning',
        body: `<p>Läs mer om formativ bedömning och hur det samspelar med den summativa bedömningen i stödmaterialet Kunskapsbedömning i skolan.</p><p><a href="#">Kunskapsbedömning i skolan - praxis, begrepp, problem och möjligheter</a></p>`
      }
    ]
  }
}
