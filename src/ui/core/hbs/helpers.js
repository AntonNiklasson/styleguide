module.exports = {
  eq: (arg1, arg2, options) => {
    if(arg1 === arg2) {
      return options.fn(this);
    }
    return options.inverse(this);
  },

  hasValue: (arg1, options) => {
    if(arg1) {
      return options.fn(this);
    }
    return options.inverse(this);
  },

  debug: (object) => {
    return JSON.stringify(object)
  },

  getView: (viewString) => {
    return `@${viewString}`
  }
}
