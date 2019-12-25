module.exports = {
  config: {
    theme: {
      delight: theme => ({
        background: theme('colors.teal.500'),
        foreground: '#fff',
        soft: 'rgba(255, 255, 255, 0.2)'
      })
    }
  },
  handler (bagOfCrap) {
    require('./lib/buttons/slide')(bagOfCrap)
    require('./lib/spinners/donut')(bagOfCrap)
  }
}
