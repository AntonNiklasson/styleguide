module.exports = {
  name: "Innehållsförteckning",
  context: {
    title: "Rubrik",
    pages: [
      {
        title: "Innehållsrubrik nivå 1",
        url: "#",
        pages: [
          {
            title: "Innehållsrubrik nivå 2",
            url: "#"
          },
          {
            title: "Innehållsrubrik nivå 2",
            url: "#"
          }
        ]
      },
      {
        title: "Innehållsrubrik nivå 1",
        url: "#",
        pages: null
      },
      {
        title: "Innehållsrubrik nivå 1",
        url: "#",
        pages: null
      }
    ]
  }
};
