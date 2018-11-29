module.exports = {
  context: {
    colorGroups: [
      {
        title: "Profilfärger",
        colors: [
          {
            name: "Lila",
            hex: "#692969",
            variable: "$color-background-dark"
          },
          {
            name: "Grön",
            hex: "#00424C"
          },
          {
            name: "Korall 1",
            hex: "#EF7748",
            variants: [
              {
                name: "Korall 2",
                hex: "#fbceb4"
              },
              {
                name: "Korall 2 (50%)",
                hex: "#fde6d9"
              },
              {
                name: "Korall 2 (25%)",
                hex: "#fef2ec"
              },
              {
                name: "Korall 3",
                hex: "#fef3ed"
              }
            ]
          },
          {
            name: "Turkos 1",
            hex: "#94c6cc",
            variants: [
              {
                name: "Turkos 2",
                hex: "#dceaea"
              },
              {
                name: "Turkos 3",
                hex: "#eff4f4"
              }
            ]
          },
          {
            name: "Gul 1",
            hex: "#fbd85d",
            variants: [
              {
                name: "Gul 2",
                hex: "#fff3d5"
              }
            ]
          }
        ]
      }
      /*
      {
        title: "Ramverk",
        colors: [
          {
            name: "Textfärg",
            hex: "#292929",
            variable: "$color-text"
          },
          {
            name: "Sekundär textfärg",
            hex: "#666666",
            variable: "$color-text-secondary"
          },
          {
            name: "Ljus textfärg",
            hex: "#FFFFFF",
            variable: "$color-text-light"
          },
          {
            name: "Länkfärg",
            hex: "#0079C2",
            variable: "$color-link"
          },
          {
            name: "Länkfärg, hover",
            hex: "#005182",
            variable: "$color-link-hover"
          },
          {
            name: "Länkfärg, besökt",
            hex: "#386406",
            variable: "$color-link-visited"
          }
        ]
      }
      */
    ]
  }
};
