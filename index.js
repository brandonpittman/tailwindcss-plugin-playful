module.exports = {
  config: {
    theme: {
      delight: theme => ({
        background: theme('colors.blue.500'),
        foreground: '#fff'
      })
    }
  },
  handler (bagOfCrap) {
    require('./lib/buttons/slide')(bagOfCrap)
    require('./lib/spinners/donut')(bagOfCrap)
  }
}
