const stack = require('./stack')
const collapse = require('./collapse')
const spin = require('./spin')

module.exports = function ({settings, variant, classPrefixer}){
    return ({
        ...stack({settings, variant, classPrefixer}),
        ...collapse({settings, variant, classPrefixer}),
        ...spin({settings, variant, classPrefixer}),
    })
}