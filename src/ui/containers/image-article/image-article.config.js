module.exports = {
  context: {
    sections: [
      {
        title: "En bildpuff",
        colspan: 6,
        items: [
          { imageUrl: "/tmp/img/people-16x9-1.jpg" },
          {
            title: "Quisque augue dui suscipit consequat",
            description:
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore."
          }
        ]
      },
      {
        title: "Två bildpuffar",
        colspan: 6,
        items: [
          {
            imageUrl: "/tmp/img/people-16x9-3.jpg",
            title: "Quisque augue dui suscipit consequat"
          },
          {
            imageUrl: "/tmp/img/people-16x9-1.jpg",
            title: "Suscipit consequat quisque augue dui"
          }
        ]
      },
      {
        title: "Tre bildpuffar",
        colspan: 4,
        items: [
          {
            imageUrl: "/tmp/img/people-16x9-2.jpg",
            title: "Vivamus placerat, neque quis rutrum feugiat turpis"
          },
          {
            imageUrl: "/tmp/img/people-16x9-3.jpg",
            title: "Vivamus placerat, neque quis"
          },
          {
            imageUrl: "/tmp/img/people-16x9-1.jpg",
            title:
              "Vivamus placerat, neque quis rutrum feugiat, turpis turpis placerat"
          }
        ]
      }
    ]
  }
};
