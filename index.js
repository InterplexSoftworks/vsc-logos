exports.RandomLogo = function() {
    const pp = require('./data.json')
    pp[Math.floor(Math.random() * pp.length)]
}