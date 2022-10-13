const configureSore = require('@reduxjs/toolkit').configureStore

const cakeReducer = require('../features/cake/cakeSlics')

const store = configureSore({
    reducer: {
        cake: cakeReducer
    }
})
module.exports = store