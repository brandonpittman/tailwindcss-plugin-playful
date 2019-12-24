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
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '&:hover': {
          cursor: 'not-allowed',
          outline: 0
        },
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          backgroundColor: 'white'
        },
        '&:after': {
          content: '""',
          position: 'absolute',
          border: '4px solid rgba(0, 0, 0, 0.1)',
          borderLeftColor: theme('delight.accent'),
          borderRadius: '50%',
          width: '30px',
          height: '30px',
          animation: 'donut-spin 1.2s linear infinite'
        }
      }
    }
  })
}
