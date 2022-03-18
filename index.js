exports.RandomLogo = function() {
    const pp = require('./data.json')
    const te = pp[Math.floor(Math.random() * pp.length)]
    return te
}