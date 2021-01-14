module.exports = function({settings, variant, classPrefixer}) {
    const animationName = 'collapse'
    settings.classes.animation = classPrefixer(animationName, variant)
    return({
        [`.${settings.classes.animation}`]: {
            [`span.${settings.classes.bar}`]: {
                transition: `transform 0.3s ${settings.ease} 0.2s, opacity 0.25s ${settings.ease} 0.25s`,
                '&::before': {
                    ...settings.bar,
                    height: 'inherit',
                    transitionProperty: 'transform, background-color',
                    transitionDuration: '0.35s',
                    transitionTimingFunction: settings.ease,
                },
                '&:nth-child(1), &:nth-child(3)': {
                    background: 'none',
                    top: 0,
                },
                '&:nth-child(1)': {
                    transform: `translate3d(0,-${settings.scale.spaceBetween}em,0)`
                },
                '&:nth-child(3)': {
                    transform: `translate3d(0,${settings.scale.spaceBetween}em,0)`
                }
            },
            [`&.${settings.classes.active}`]: {
                [`span.${settings.classes.bar}`]: {
                    transition: `transform 0.25s ${settings.ease}, opacity 0.25s ${settings.ease}`,
                    '&:nth-child(1), &:nth-child(3)': {
                        transform: 'translate3d(0, 0, 0)',
                    },
                    '&::before': {
                        transitionProperty: 'transform background-color',
                        transitionDuration: '0.35s, 0.5s',
                        transitionTimingFunction: settings.ease,
                        transitionDelay: '0.15s, 0s',
                    },
                    '&:nth-child(1)': {
                        '&::before': {
                            transform: 'rotate3d(0, 0, 1, 135deg)'
                        }
                    },
                    '&:nth-child(2)': {
                        opacity: 0
                    },
                    '&:nth-child(3)': {
                        '&::before': {
                            transform: 'rotate3d(0, 0, 1, 45deg)'
                        }
                    },
                },
            }
        }
    })
}