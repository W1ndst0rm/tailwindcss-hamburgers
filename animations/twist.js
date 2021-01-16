module.exports = function({settings, variant, classPrefixer}) {
    const animationName = 'twist'
    settings.classes.animation = classPrefixer(animationName, variant)
    const originOffset = 0.4
    const offsetFactor = 1 - 2 * originOffset
    const originX = 100 * offsetFactor
    const offsetY = ( settings.scale.barWidth * (.5- offsetFactor ) * Math.sqrt(2) ) / 2
    const offsetX = ( settings.scale.barWidth * (.5 - offsetFactor) )

    return (
        {
            [`.${settings.classes.animation}`]: {
                [`span.${settings.classes.bar}`]: {
                    transition: `transform 0.6s ${settings.ease}`,
                    '&:nth-child(1), &:nth-child(3)': {
                        top: 0,
                    },
                    '&:nth-child(1)': {
                        transform: `rotate(0deg) translate3d(0,-${settings.scale.spaceBetween}em,0)`,
                    },
                    '&:nth-child(2)': {
                        opacity: 1,
                        transition: `opacity 0.2s ${settings.ease} 0.4s`
                    },
                    '&:nth-child(3)': {
                        transform: `rotate(0deg) translate3d(0,${settings.scale.spaceBetween}em,0)`,
                        transformOrigin: `${originX}% 50%`
                    }
                },
                [`&.${settings.classes.active}`]: {
                    [`span.${settings.classes.bar}`] :{
                        '&:nth-child(1)': {
                            transform: `rotate(45deg)`
                        },
                        '&:nth-child(2)': {
                            opacity: 0,
                            transition: `opacity, 0.3s ${settings.ease}`
                        },
                        '&:nth-child(3)': {
                            transform: `translate3d(${offsetX + offsetY}em, -${offsetY}em, 0) rotate(-225deg)`
                        }
                    }
                }
            }
        }
    )
}