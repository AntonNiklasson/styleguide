module.exports = {
  name: 'Visa/Dölj',
  handle: 'reveal',
  context: {
    id: 1321,
    title: 'Lorem ipsum dolor sit amet',
    toggleCloseText: 'Dölj',
    toggleOpenText: 'Visa',
    expanded: false,
    body: `
      <div>
        <p>Du måste ha en lärar- eller förskollärarexamen för att få en legitimation. Om du inte har en examen kan du vidareutbilda dig. Vilken utbildning som passar bäst beror på dina tidigare erfarenheter och studier. Det finns olika vägar till examen.</p>
        <h3>Vidareutbildning av lärare (VAL)</h3>
        <p>VAL är en förkortad lärarutbildning som vänder sig till dig som jobbar som lärare eller förskollärare men inte har en lärar- eller förskollärarexamen. Utbildningen bygger vidare på din arbetslivserfarenhet och dina tidigare högskolestudier. Alla som studerar inom VAL har en individuell studieplan.</p>
        <p><a title="länk till annan webbplats" href="http://www.lh.umu.se/utbildning/fortbildning-for-larare/valprojektet/">Läs mer om VAL på Lärarhögskolan i Umeås webbplats</a></p>
        <h3>Utländska lärares vidareutbildning (ULV)</h3>
        <p>ULV vänder sig till dig som har en utländsk lärarexamen. Utbildningen är individuellt anpassad och varierar därför i längd och omfattning.</p>
        <p><a title="länk till annan webbplats" href="http://www.su.se/lararutbildningar/l%C3%A4rare/utl%C3%A4ndska-l%C3%A4rares-vidareutbildning-ulv">Läs mer om ULV på Stockholms universitets webbplats</a></p>
        <h3>Lärarutbildning</h3>
        <p>Det finns många olika lärarutbildningar som skiljer sig till studieform, omfattning och innehåll.</p>
        <p><a title="länk till annan webbplats" href="http://www.studera.nu/">Läs mer om olika utbildningar på studera.nu</a></p>
        <h3>Lärarlyftet</h3>
        <p>Du som är lärare och undervisar utan att ha behörighet i ett eller flera ämnen kan utöka din legitimation med fler behörigheter genom att gå Lärarlyftet. Skolverket erbjuder också kurser till fritidspedagoger i praktisk-estetiska ämnen. Genom Lärarlyftet kan du också få hjälp att validera tidigare kunskaper och färdigheter.</p>
        <p><a href="/skolutveckling/kompetensutveckling/lararlyftets-kurser-och-utbildningar">Säkra behörigheten med Lärarlyftets kurser och utbildningar</a></p>
      </div>
    `
  },
  variants: [
    {
      name: 'nojs',
      hidden: true
    },
    {
      name: 'expanded',
      context: {
        expanded: true
      }
    }
  ]
}
