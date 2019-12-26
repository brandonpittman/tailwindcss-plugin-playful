module.exports = {
  config: {
    ...require('../tailwindcss-plugin-content').config
  },
  handler (bagOfCrap) {
    require('../tailwindcss-plugin-content').handler(bagOfCrap)
    require('./lib/buttons/slide')(bagOfCrap)
    require('./lib/spinners/donut')(bagOfCrap)
  }
}
