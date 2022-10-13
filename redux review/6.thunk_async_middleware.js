/**
// npm install axios redux-thunk


Using async actions through redux middlewares:
- TO perform any async actions, api calls
- Note the async actions, that returns a async functions.

Steps:
- Create types, actions, reducers
- Apply redux-thunk middleware to the store
- Create a async action creators
 */


const redux = require('redux')
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')
const reduxLogger = require('redux-logger')


const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

const initialState = {
    loading: false,
    users: [],
    error: ''
}

// types
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
const FETCH_USER_FAILED = 'FETCH_USER_FAILED'
const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST'

// actions
const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}
const fetchUserSuccess = (users) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}
const fetchUserFailure = (error) => {
    return {
        type: FETCH_USER_FAILED,
        payload: error
    }
}


// reduers
const reducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USER_SUCCESS:
            return {
                users: action.payload,
                loading: false,
                error: ''
            }
        case FETCH_USER_FAILED:
            return {
                users: [],
                error: action.payload,
                loading: false,
            }

    }
}

// const store = createStore(reducer, applyMiddleware(thunkMiddleware,logger));
const store = createStore(reducer, applyMiddleware(thunkMiddleware));

const unsubscribe = store.subscribe(() => {
    console.log("Updated State ",store.getState())
})

// async actions creators: returns a function itself
const fetchUsers = () => {
    return function(dispatch){
        dispatch(fetchUserRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(resp => {
            const users = resp.data.map(user=>user.id)
            dispatch(fetchUserSuccess(users));
        }).catch(error => {
            dispatch(fetchUserFailure(error.message));
        })
    }
}

store.dispatch(fetchUsers())