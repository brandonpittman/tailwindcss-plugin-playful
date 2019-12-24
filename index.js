const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  config: {
    theme: {}
  },
  handler({addComponents, theme}) {
    addComponents({
      '.testing': {
        '&:after': {
          content: '""',
          height: theme('height.full'),
          width: theme('width.full'),
          position: 'absolute',
          top: 0,
          left: 0,
          backgroundColor: 'currentColor',
          transition: 'opacity 200ms ease-in-out',
          opacity: 0,
          zIndex: -1
        },
        '&:hover:after': {
          opacity: '1'
        }
      }
    })
  }
}
