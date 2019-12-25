const hexRgba = require('hex-to-rgba')

module.exports = function ({ theme, addComponents }) {
  addComponents({
    '@keyframes donut-spin': {
      '0%': {
        transform: 'rotate(0deg)'
      },
      '100%': {
        transform: 'rotate(360deg)'
      }
    },
    '@variants responsive, hover': {
      '.spin-donut': {
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '&:hover': {
          cursor: 'not-allowed',
          outline: 0,
          overflow: 'hidden'
        },
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          backgroundColor: theme('delight.background')
        },
        '&:after': {
          content: '""',
          position: 'absolute',
          border: `4px solid ${hexRgba(theme('delight.foreground'), '0.2')}`,
          borderLeftColor: theme('delight.foreground'),
          borderRadius: '50%',
          width: '30px',
          height: '30px',
          animation: 'donut-spin 1.2s linear infinite'
        }
      }
    }
  })
}
