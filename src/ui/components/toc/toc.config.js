module.exports = {
  name: "Innehållsförteckning",
  handle: 'toc',
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
