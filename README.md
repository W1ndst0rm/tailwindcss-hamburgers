# Tailwindcss Hamburgers

Hamburger menus built with Tailwind CSS.

## Usage

1. Install a plugin

```bash
npm install tailwindcss-hamburgers --save

// or

yarn add tailwindcss-hamburgers --save
```

2. Add a plugin to Tailwind

```js
// tailwind.config.js
module.exports = {
  ...
  plugins: [require('tailwindcss-hamburgers')],
}
```

3. Add a hamburger to markup

```html
<button class="hamburger hamburger-stack">
  <div class="hamburger-inner">
    <div class="bar" />
  </div>
</button>
```

4. Trigger class name for active state

Toggle `hamburger-active` class on the element with `hamburger` class name.
