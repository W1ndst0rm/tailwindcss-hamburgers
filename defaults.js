module.exports = function (customizations) {
    const defaultHeight = .25
    const defaultScale = {
        spaceBetween: defaultHeight * 2.5,
        barHeight: defaultHeight,
        barWidth: defaultHeight * 7,
        barRadius: defaultHeight / 2 ,
        padding: 0
    }
    // merge default and customized scale
    const scale = {
        ...defaultScale,
        ...customizations.scale
    }

    const inactiveHeight = scale.barHeight + 2 * scale.spaceBetween + 2 * scale.padding
    const activeHeight = Math.sqrt(2) * scale.barWidth / 2

    // use merged scale to configure settings
    const defaultSettings = {
        height: `${Math.max(inactiveHeight, activeHeight)}em`, //Make sure the container has enough room for with ever state is taller
        width: `${scale.barWidth + 2 * scale.padding}em`,
        color: '#000',
        colorActive: '#000',
        background: 'transparent',
        backgroundActive: 'transparent',
        ease: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
        easeIn: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
        easeOut: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    }

    // merge generated settings with user customizations
    settings = {
        ...defaultSettings,
        ...customizations,
        scale: scale,
    }

    // add default bar settings
    settings.bar = {
        backgroundColor: settings.color,
        borderRadius: `${scale.barRadius}em`,
        content: '""',
        display: 'block',
        position: 'absolute',
        height: `${scale.barHeight}em`,
        width: `${scale.barWidth}em`
    }

    return ( settings )
}
