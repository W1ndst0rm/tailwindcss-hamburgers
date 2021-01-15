module.exports = function({settings, variant, classPrefixer}) {
    const animationName = 'spin'
    settings.classes.animation = classPrefixer(animationName, variant)
    // const originOffset = 0.4
    const offsetFactor = .2 // 1 - 2 * originOffset
    const originX = 100 * offsetFactor
    // const offsetY = settings.scale.barWidth / 2 / Math.sqrt(2) * offsetFactor
    const offsetY = ( settings.scale.barWidth * .3 * Math.sqrt(2) ) / 2
    const offsetX = ( settings.scale.barWidth * .3 )

    return (
        {
            [`.${settings.classes.animation}`]: {
                [`> .${settings.classes.inner}`]: {
                    transitionProperty: 'transform',
                    transitionDuration: "0.5s",
                    transitionTimingFunction: `${settings.ease}`
                },

                [`span.${settings.classes.bar}`]: {
                    transition: `transform 0.4s ${settings.ease}, opacity 0.2s ${settings.ease} 0.2s`,
                    '&:nth-child(1), &:nth-child(3)': {
                        top: 0,
                    },
                    '&:nth-child(1)': {
                        transform: `rotate(0deg) translate3d(0,-${settings.scale.spaceBetween}em,0)`,
                        transformOrigin: `${originX}% 50%`
                    },
                    '&:nth-child(3)': {
                        transform: `rotate(0deg) translate3d(0,${settings.scale.spaceBetween}em,0)`,
                        transformOrigin: `${originX}% 50%`
                    }
                },
                [`&.${settings.classes.active}`]: {
                    [`> .${settings.classes.inner}`]: {
                        transform: `rotate(180deg) translate3d(0, -${settings.scale.barHeight}em, 0)`
                    },
                    [`span.${settings.classes.bar}`] :{
                        transition: `transform 0.3s ${settings.ease} 0.1s, opacity 0.2s ${settings.ease}`,
                        '&:nth-child(1)': {
                            // transform: `rotate(135deg) translate3d(-${offsetX + offsetY}em , -${offsetY}em, 0)`
                            transform: `translate3d(${offsetX + offsetY}em, -${offsetY}em, 0) rotate(135deg)`
                        },
                        '&:nth-child(2)': {
                            opacity: 0,
                            transform: 'rotate(45deg)',
                        },
                        '&:nth-child(3)': {
                            // transform: `rotate(45deg) translate3d(-${offsetX - offsetY}em , -${offsetY}em, 0)`
                            transform: `translate3d(${offsetX - offsetY}em, -${offsetY}em, 0) rotate(45deg)`
                        }
                    }
                }
            }
        }
    )
}