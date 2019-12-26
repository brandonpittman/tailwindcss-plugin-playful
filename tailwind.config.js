module.exports = {
  theme: {
    extend: {}
  },
  variants: {
    visibility: ['responsive', 'hover']
    // padding: ['responsive', 'hover', 'after', 'before']
  },
  plugins: [
    // require('tailwindcss-plugin-content'),
    require('./index')
  ]
}
