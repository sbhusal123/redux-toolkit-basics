const configureSore = require('@reduxjs/toolkit').configureStore

const cakeReducer = require('../features/cake/cakeSlics')
const iceCreamReducer = require('../features/icecream/iceCreamSlice')
const userReducer = require('../features/user/userSlice')

// logger setup
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

const store = configureSore({
    reducer: {
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        user: userReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})
module.exports = store
