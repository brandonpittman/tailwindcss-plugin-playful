const directions = {
  bottom: 'Y',
  top: 'Y',
  left: 'X',
  right: 'X'
}

var components = {}

module.exports = ({ addComponents, theme }) => {
  for (const [origin, axis] of Object.entries(directions)) {
    components[`.grow-from-${origin}`] = {
      overflow: 'hidden',
      transition: 'color 100ms ease-in-out',
      '&:after': {
        content: '""',
        height: theme('height.full'),
        width: theme('width.full'),
        position: 'absolute',
        backgroundColor: theme('delight.accent'),
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        transition: 'transform 200ms ease-in-out',
        transform: `scale${axis}(0)`,
        transformOrigin: origin,
        zIndex: -1
      },
      '&:hover': {
        color: theme('delight.text')
      },
      '&:hover:after': {
        transform: `scale${axis}(1)`
      }
    }
  }

  addComponents(components)
}
