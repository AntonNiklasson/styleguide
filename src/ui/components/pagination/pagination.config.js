module.exports = {
  name: "Paginering",
  handle: "pagination",
  context: {
    firstpage: 1,
    previousDots: true,
    previousPages: [8, 9],
    currentPage: 10,
    nextPages: [11, 12],
    nextDots: true,
    lastPage: 20
  },
  variants: [
    {
      name: 'first-page',
      context: {
        firstpage: 1,
        previousDots: false,
        previousPages: [],
        currentPage: 2,
        nextPages: [3, 4, 5],
        nextDots: true,
        lastPage: 10
      }
    },
    {
      name: "Close to the last page",
      context: {
        firstpage: 1,
        previousDots: true,
        previousPages: [15, 16],
        currentPage: 17,
        nextPages: [18, 19],
        nextDots: false,
        lastPage: 20
      }
    }
  ]
};
