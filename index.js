const plugin = require('tailwindcss/plugin');
const defaults = require('./defaults')
const stack = require('./animations/stack')

const defaultOptions = {
  prefix: 'ham-'
}

module.exports = plugin.withOptions(function(options = {}) {
  return function({ addComponents, theme, e }) {
    options = {
      ...defaultOptions,
      ...options
    }
    const burgerTheme = theme('hamburgers')


    console.log(options)

    const hamburgers = {
      '.hamburger': {
        height: '3rem',
        width: '2.5rem',
        backgroundColor: defaults.background,
        border: 0,
        borderRadius: 0,
        color: 'inherit',
        cursor: 'pointer',
        display: 'inline-block',
        font: 'inherit',
        opacity: 1,
        overflow: 'visible',
        padding: defaults.padding,
        textTransform: 'none',
        transition: `opacity 0.2s ${defaults.ease}, background 0.2s ${defaults.ease}`,
        '&.hamburger-active': {
          backgroundColor: defaults.backgroundActive,
          'span.bar': {
            backgroundColor: defaults.activeColor
          },
          '> .hamburger-inner, span.bar': {
            '&:nth-child(1), &:nth-child(2), &:nth-child(3)': {
              '&::before, &::after': {
                backgroundColor: defaults.activeColor
              }
            }
          }
        },
        '> .hamburger-inner': {
          margin: 0,
          marginTop: '-2px',
          position: 'relative',
          width: '100%'
        },
        'span.bar': {
          ...defaults.bar,
          '&:nth-child(1)': {
            top: '-10px'
          },
          '&:nth-child(3)': {
            top: '10px'
          }
        },
        '&:focus': {
          outline: 0
        }
      },
      ...stack
    }

    addComponents(hamburgers)
  }
})

