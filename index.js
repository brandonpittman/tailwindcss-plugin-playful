module.exports = {
  config: {
    theme: {
      delight: theme => ({
        accent: theme('colors.blue.500'),
        text: 'white'
      })
    }
  },
  handler (bagOfCrap) {
    require('./lib/buttons/grow')(bagOfCrap)
    require('./lib/spinners/donut')(bagOfCrap)
  }
}
