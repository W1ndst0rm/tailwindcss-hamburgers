const plugin = require('tailwindcss/plugin');
const getDefaults = require('./defaults');
const animations = require('./animations/index');

const defaultOptions = {
  prefix: 'ham-'
}

module.exports = plugin.withOptions(function(options = {}) {
  return function({ addComponents, theme, e }) {
    let burgerTheme = theme('hamburgers') || {}
    if (!('base' in burgerTheme)) {
      burgerTheme.base = {scale: {}}
    }

    options = {
      ...defaultOptions,
      ...options
    }

    function classPrefixer(className, variant) {
      if (variant !== 'base')  {
        variant = '-' + variant
      } else {
        variant = ''
      }
      return e(options.prefix + className + variant)
    }

    function generateVariant(variant) {
      let classes = {
        wrapper: classPrefixer('wrapper', variant),
        inner: classPrefixer('inner', variant),
        active: classPrefixer('active',variant),
        bar: classPrefixer('bar', variant)
      }

      let settings = getDefaults(burgerTheme[variant])
      settings.classes = classes



      const hamburgers = {
        [`.${classes.wrapper}`]: {
          height: settings.height,
          width: settings.width,
          backgroundColor: settings.background,
          padding: settings.padding,
          border: '0 solid transparent',
          color: 'inherit',
          cursor: 'pointer',
          display: 'inline-block',
          fontSize: 'inherit',
          overflow: 'visible',
          textTransform: 'none',
          transition: `opacity 0.2s ${settings.ease}, background 0.2s ${settings.ease}`,
          // Set color and bg-color in active state
          [`&.${classes.active}`]: {
            backgroundColor: settings.backgroundActive,
            [`span.${classes.bar}`]: {
              backgroundColor: settings.colorActive
            },
            [`> .${classes.inner}, span.${classes.bar}`]: {
              '&:nth-child(1), &:nth-child(2), &:nth-child(3)': {
                '&::before, &::after': {
                  backgroundColor: settings.colorActive
                }
              }
            }
          },
          // Center and scale the inner container
          [`> .${classes.inner}`]: {
            margin: 'auto',
            marginTop: `-${settings.scale.barHeight/2}em`,
            position: 'relative',
            width: `${settings.scale.barWidth}em`,
            fontSize: 'inherit'
          },
          // This is typically is hidden by the animation classes,
          // but it provides a default an animation class isn't specified
          [`span.${classes.bar}`]: {
            ...settings.bar,
            '&:nth-child(1)': {
              top: `-${settings.scale.spaceBetween}em`  //
            },
            '&:nth-child(3)': {
              top: `${settings.scale.spaceBetween}em`
            }
          }
        },
        ...animations({settings, variant, classPrefixer})
      }

      addComponents(hamburgers)
    }

    Object.keys(burgerTheme).forEach(function (variant)  {
      generateVariant(variant)
    })

  }
})

