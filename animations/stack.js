const defaults = require('../defaults')

module.exports = {
    '.hamburger-stack': {
        'span.bar': {
            transition: `transform 0.3s ${defaults.ease} 0.2s, opacity 0.25s ${defaults.ease} 0.25s`,
            '&:nth-child(1), &:nth-child(3)': {
                background: 'none',
                top: 0,
                '&::before': {
                    ...defaults.bar,
                    height: 'inherit',
                    transitionProperty: 'transform',
                    transitionDuration: '0.35s',
                    transitionTimingFunction: defaults.ease,
                }
            },
            '&:nth-child(1)': {
                transform: 'translate3d(0,-300%,0)'
            },
            '&:nth-child(3)': {
                transform: 'translate3d(0,300%,0)'
            }
        },
        '&.hamburger-active': {
            'span.bar': {
                transition: `transform 0.25s ${defaults.ease}, opacity 0.25s ${defaults.ease}`,
                '&:nth-child(1), &:nth-child(3)': {
                    transform: 'translate3d(0, 0, 0)',
                    '&::before': {
                        transitionProperty: 'transform',
                        transitionDuration: '0.35s',
                        transitionTimingFunction: defaults.ease,
                        transitionDelay: '0.15s',
                    }
                },
                '&:nth-child(1)': {
                    '&::before': {
                        transform: 'rotate(45deg)'
                    }
                },
                '&:nth-child(2)': {
                    opacity: 0
                },
                '&:nth-child(3)': {
                    '&::before': {
                        transform: 'rotate(-45deg)'
                    }
                },
            },
        }
    }
}