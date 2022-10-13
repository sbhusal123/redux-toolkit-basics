const configureSore = require('@reduxjs/toolkit').configureStore

const cakeReducer = require('../features/cake/cakeSlics')
const iceCreamReducer = require('../features/icecream/iceCreamSlice')

const store = configureSore({
    reducer: {
        cake: cakeReducer,
        iceCream: iceCreamReducer
    }
})
module.exports = store
