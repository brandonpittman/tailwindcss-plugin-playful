# tailwindcss-plugin-delight

Add some delightful CSS components to your Tailwind setup!

## Buttons

```css
.grow-from-left {}
.grow-from-right {}
.grow-from-bottom {}
.grow-from-top {}
```

- Use standard Tailwind utilities to modify basic styles. These components just add animated behavior.
- Configure standard accent and text colors to be applied when delight occurs.

```javascript
// tailwind.config.js

theme: {
  delight: theme => ({
    // would make a button use @apply bg-blue-500
    accent: theme('colors.blue.500'),
    // would make the button's label @apply text-white
    text: 'white'
  })
}
```
