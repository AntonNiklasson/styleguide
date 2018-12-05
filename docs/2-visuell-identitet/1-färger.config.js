module.exports = {
  context: {
    colorGroups: [
      {
        title: "Profilfärger",
        description: 'Skolverkets primära färger är lile och mörkturkos. Dessa ska användas genomgående i all kommunikation.',
        colors: [
          {
            name: "Profilfärg 1",
            hex: "#692859",
          },
          {
            name: "Profilfärg 2",
            hex: "#00424C",
          }
        ]
      },
      {
        title: "Accentfärger",
        description: 'Accentfärgerna används sparsamt. Används främst till dekorelement och ikoner.',
        colors: [
          {
            name: "Accentfärg 1",
            hex: "#99CED4",
          },
          {
            name: "Accentfärg 2",
            hex: "#EF7748",

          },
          {
            name: "Accentfärg 3",
            hex: "#F59C00",
          }
        ]
      },
      {
        title: "Bakgrundsfärger",
        description: 'Bakgrundsfärgerna får även användas i 50% och 25% opacitet.',
        colors: [
          {
            name: "Bakgrundsfärg 1",
            hex: "#DCEAEA",
            variants: [
              {
                label: '50%',
                hex: "#DCEAEA88",
              },
              {
                label: '25%',
                hex: 'pink',
                hex: "#DCEAEA44",
              }
            ]
          },
          {
            name: 'Bakgrundsfärg 2',
            hex: "#FCDBCB",
            variants: [
              {
                label: '50%',
            hex: "#FCDBCB88",
              },
              {
                label: '25%',
            hex: "#FCDBCB44",
              }
            ]
          },
          {
            name: 'Bakgrundsfärg 3',
            hex: '#ffe56f',
            variants: [
              {
                label: '50%',
                hex: '#ffe56f88',
              },
              {
                label: '25%',
                hex: '#ffe56f44',
              }
            ]
          }
        ]
      },
      {
        title: "Komplementfärger",
        description: 'Komplementfärgerna används vid behov av ytterligare färger, exempelvis i diagram och grafik.',
        colors: [
          {
            name: "Komplementfärg 1",
            hex: "#497E89",
          },
          {
            name: 'Komplementfärg 2',
            hex: "#B1451C",
          },
        ]
      },
      {
        title: "Ramverk",
        colors: [
          {
            name: "Textfärg",
            hex: "#292929",
            textColor: 'white',
          },
          {
            name: "Länkfärg",
            hex: "#0079C2",
          },
          {
            name: 'Felmeddelande',
            hex: "#CD2126"
          }
        ]
      }
    ]
  }
};
