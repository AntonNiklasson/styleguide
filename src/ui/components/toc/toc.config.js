module.exports = {
  name: "Innehållsförteckning",
  context: {
    title: "Innehållsförteckning",
    pages: [
      {
        title: "Lorem Ipsum",
        url: "#",
        pages: [{ title: "Dolor Sit Amet", url: "#" }]
      },
      { title: "Lorem Ipsum", url: "#", active: true },
      {
        title: "Lorem",
        url: "#",
        pages: [
          { title: "Ipsum Dolor", url: "#" },
          { title: "Sit Amet", url: "#" },
          {
            title: "Ipsum Lorem",
            url: "#",
            pages: [{ title: "Amet Sit", url: "#" }]
          },
          { title: "Ipsum Sit", url: "#" },
          { title: "Dolor Lorem", url: "#" }
        ]
      },
      { title: "Sit Amet", url: "#" },
      { title: "Lorem Dolor", url: "#" }
    ]
  },
  variants: [
    {
      name: "Utan Rubrik",
      context: {
        title: null,
        pages: [
          { title: "Den här", url: "#" },
          { title: "innehålssförteckningen", url: "#" },
          { title: "har ingen rubrik", url: "#" }
        ]
      }
    }
  ]
};
