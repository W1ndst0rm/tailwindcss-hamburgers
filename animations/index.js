const stack = require('./stack')
const collapse = require('./collapse')
const spin = require('./spin')
const twist = require('./twist')

module.exports = function ({settings, variant, classPrefixer}){
    return ({
        ...stack({settings, variant, classPrefixer}),
        ...collapse({settings, variant, classPrefixer}),
        ...spin({settings, variant, classPrefixer}),
        ...twist({settings, variant, classPrefixer}),
    })
}