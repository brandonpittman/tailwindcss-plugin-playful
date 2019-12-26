const content = require('tailwindcss-plugin-content')

module.exports = {
  config: {
    ...content.config
  },
  handler (bagOfCrap) {
    content.handler(bagOfCrap)
    require('./lib/buttons/slide')(bagOfCrap)
    require('./lib/spinners/donut')(bagOfCrap)
  }
}
