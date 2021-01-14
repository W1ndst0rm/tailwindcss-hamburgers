const stack = require('./stack')
const collapse = require('./collapse')

module.exports = function ({settings, variant, classPrefixer}){
    return ({
        ...stack({settings, variant, classPrefixer}),
        ...collapse({settings, variant, classPrefixer}),
    })
}