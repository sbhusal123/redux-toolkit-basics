/**
Redux Middlewares

- Suggested way to extend the redux with custom functionality.
- Provides a third party extension between dispatching an action, and the moment it reaches the reducer
- Middlewares for logging, crash reporting, performing async tasks, e.t.c

What to achieve from this code:
- Use redux logger
- Code taken from 2.combining_reducers.js

How:
- install redux-logger: npm i redux-logger
- initialize the middleware along with the state as:
    store = createStore(rootReducer, redux.applyMiddleware(<Middleware>))
 */


 const redux = require('redux');
 const createStore = redux.createStore

// ! Setup a logger
//  -------------------------------------------------
 const reduxLogger = require('redux-logger');
 const logger = reduxLogger.createLogger()
//  ------------------------------------------------- 


// Types
  const CAKE_ORDERED = "CAKE_ORDERED";
  const CAKE_RESTOCKED = "CAKE_RESTOCKED";
  const ICE_CREAM_ORDERED = "ICE_CREAM_ORDERED";
  const ICE_CREAM_RESTOCKED = "ICE_CREAM_RESTOCKED";
  
  
// Actions
  const orderCake = () => {
      return {
          type: CAKE_ORDERED,
          payload: 1
      }
  }
  const restockCake = (qty=1) => {
      return {
          type: CAKE_RESTOCKED,
          payload: qty
      }
  }
  const orderIceCream = () => {
     return {
         type: ICE_CREAM_ORDERED,
         payload: 1
     }
 }
 const restockIceCream = (qty=1) => {
     return {
         type: ICE_CREAM_RESTOCKED,
         payload: qty
     }
 }
  
  // States
  const initialCakeState = {
      numOfCakes: 10
  }
  const initialIceCreamState = {
     numOfIceCreams : 10
  }
 
  
  // reducer
  const cakeReducer = (state=initialCakeState, action) => {
      switch (action.type){
          case CAKE_ORDERED:
              return {
                  ...state,
                  numOfCakes: state.numOfCakes -1,
              }
          case CAKE_RESTOCKED:
              return {
                  ...state,
                  numOfCakes: state.numOfCakes + action.payload,
              }
          default:
              return state
      }
  }
  const iceCreamReducer = (state=initialIceCreamState, action) => {
     switch (action.type){
         case ICE_CREAM_ORDERED:
             return {
                 ...state,
                 numOfIceCreams: state.numOfIceCreams -1,
             }
         case ICE_CREAM_RESTOCKED:
             return {
                 ...state,
                 numOfIceCreams: state.numOfIceCreams + action.payload,
             }
         default:
             return state
     }    
  }
  

 const combineReducers = redux.combineReducers;
 const rootReducer = combineReducers({
     cake: cakeReducer,
     iceCream: iceCreamReducer
 })

//  ! Initializing and Applying middlewares
//  -----------------------------------------------------
const applyMiddleware = redux.applyMiddleware
 store = createStore(rootReducer, applyMiddleware(logger));

//  -----------------------------------------------------

  
 
  const unsubscribe = store.subscribe(() => {
    // ! Commented out
    //   console.log("Updated State ", store.getState())
  })
  
 
 const bindActionCreator = redux.bindActionCreators
 const actions = bindActionCreator({orderCake, restockCake}, store.dispatch)


// Dispatching an action
 actions.orderCake()
 actions.orderCake()
 actions.orderCake()
 actions.restockCake(3)
 store.dispatch(orderIceCream())
 store.dispatch(orderIceCream())
 store.dispatch(orderIceCream())
 store.dispatch(restockIceCream(3))
  
unsubscribe()
 

/**
Output:

 action CAKE_ORDERED @ 13:57:03.262
   prev state { cake: { numOfCakes: 10 }, iceCream: { numOfIceCreams: 10 } }
   action     { type: 'CAKE_ORDERED', payload: 1 }
   next state { cake: { numOfCakes: 9 }, iceCream: { numOfIceCreams: 10 } }
 action CAKE_ORDERED @ 13:57:03.266
   prev state { cake: { numOfCakes: 9 }, iceCream: { numOfIceCreams: 10 } }
   action     { type: 'CAKE_ORDERED', payload: 1 }
   next state { cake: { numOfCakes: 8 }, iceCream: { numOfIceCreams: 10 } }
 action CAKE_ORDERED @ 13:57:03.266
   prev state { cake: { numOfCakes: 8 }, iceCream: { numOfIceCreams: 10 } }
   action     { type: 'CAKE_ORDERED', payload: 1 }
   next state { cake: { numOfCakes: 7 }, iceCream: { numOfIceCreams: 10 } }
 action CAKE_RESTOCKED @ 13:57:03.267
   prev state { cake: { numOfCakes: 7 }, iceCream: { numOfIceCreams: 10 } }
   action     { type: 'CAKE_RESTOCKED', payload: 3 }
   next state { cake: { numOfCakes: 10 }, iceCream: { numOfIceCreams: 10 } }
 action ICE_CREAM_ORDERED @ 13:57:03.267
   prev state { cake: { numOfCakes: 10 }, iceCream: { numOfIceCreams: 10 } }
   action     { type: 'ICE_CREAM_ORDERED', payload: 1 }
   next state { cake: { numOfCakes: 10 }, iceCream: { numOfIceCreams: 9 } }
 action ICE_CREAM_ORDERED @ 13:57:03.268
   prev state { cake: { numOfCakes: 10 }, iceCream: { numOfIceCreams: 9 } }
   action     { type: 'ICE_CREAM_ORDERED', payload: 1 }
   next state { cake: { numOfCakes: 10 }, iceCream: { numOfIceCreams: 8 } }
 action ICE_CREAM_ORDERED @ 13:57:03.268
   prev state { cake: { numOfCakes: 10 }, iceCream: { numOfIceCreams: 8 } }
   action     { type: 'ICE_CREAM_ORDERED', payload: 1 }
   next state { cake: { numOfCakes: 10 }, iceCream: { numOfIceCreams: 7 } }
 action ICE_CREAM_RESTOCKED @ 13:57:03.268
   prev state { cake: { numOfCakes: 10 }, iceCream: { numOfIceCreams: 7 } }
   action     { type: 'ICE_CREAM_RESTOCKED', payload: 3 }
   next state { cake: { numOfCakes: 10 }, iceCream: { numOfIceCreams: 10 } }
 */