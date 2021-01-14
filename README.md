# TailwindCSS Hamburgers

Beautiful hamburger menus animated with pure CSS, available as Tailwind CSS components.

Inspired by [Kasper Koman's](https://github.com/kapoko) [Delicious Hamburgers](https://github.com/kapoko/delicious-hamburgers).

There are two animations available with more on the way.
```
stack
collapse
```

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
  plugins: [require('tailwindcss-hamburgers')]
}
```

3. Add a hamburger to markup

```html
<button class="ham-wrapper ham-stack">
  <div class="ham-inner">
    <span class="ham-bar" />
    <span class="ham-bar" />
    <span class="ham-bar" />
  </div>
</button>
```

4. Trigger class name for active state

Toggle `ham-active` class on the element with `ham-wrapper` class name.

5. Style with Tailwind utility classes. Size and spacing of the bars is relative, using em's. So the menu button can be
scaled by changing the font-size of the button.
```html
<button class="ham-wrapper ham-stack ham-active text-3xl focus:outline-none border-2 border-black rounded">
  <div class="ham-inner">
    <span class="ham-bar" />
    <span class="ham-bar" />
    <span class="ham-bar" />
  </div>
</button>
```

## Customization
A different prefix can set by passing it as an arguement to the plugin in your tailwind config file
```js
// tailwind.config.js
module.exports = {
    ...
        plugins: [require('tailwindcss-hamburgers')]({
            prefix: 'ham-',  // defaults to 'ham-'
        })
}
```

Some parts of the hamburger menu button cannot be modified by adding utility classes.
The default settings can be overridden by adding the `hamburgers` key in the `theme` configuration.
Some or all of the keys can be overridden.
```js
// tailwind.config.js
module.exports = {
    ...
    theme: {
        ...
        hamburgers: {
            base: {
                scale: {
                    spaceBetween: 0.625,
                    barHeight: 0.25,
                    barWidth: 1.75,
                    barRadius: 1.25,
                    padding: 0.5
                },
                color: "#000",
                colorActive: "#000",
                background: "transparent",
                backgroundActive: "transparent"
            }
        }
    },
    plugins: [require('tailwindcss-hamburgers')],
}
```

Additional variations can also be created by adding them to the `theme` configuration. In the following example,
the classes `ham-wrapper-modern`, `ham-inner-modern`, `ham-bar-modern`, `ham-active-modern`, and `ham-{animation}-modern` would be created
in addition to the base classes.  
```js
// tailwind.config.js
module.exports = {
    ...
    theme: {
        ...
        hamburgers: {
            base: {...},
            modern: {
                scale: {
                    spaceBetween: .5,
                    barHeight: .125,
                    barWidth: 1.25,
                    barRadius: 0,
                    padding: .25
                }
            }
        }
    },
    plugins: [require('tailwindcss-hamburgers')],
}
```
These following attributes can be modified via the tailwind config file
```json
  "base": {
    "scale": {
      "spaceBetween": 0.625,
      "barHeight": 0.25,
      "barWidth": 1.75,
      "barRadium": 1.25,
      "padding": 0.5
    },
    "color": "#000",
    "colorActive": "#000",
    "background": "transparent",
    "backgroundActive": "transparent",
```
 - The `scale` object defines the multiplier used with the font size to scale various parts of the hamburger button.
 - The `color` and `colorActive` attributes define the colors of the bars.
 - The `background` and `backgroundActive` attributes define the background color of the button. 