/**
 * Business Use Case
 * Shop sells a cakes. (Cake Store)
 * User Can sell a cake. (Action)
 * Shopkepper can restocke the cake (Action)
 */


/**
 * Technical Wrapup
 * Redux Store Apis
 * Allows to get state via <Store>.getState()
 * Allows state to be updated via dispatch(action)
 * Register listeners via subscribe(listner)
 * Handles unregistering of listners vai the function returned by subscribe(listner)
 */


 const redux = require('redux');
 const createStore = redux.createStore
 
 // Types
 const CAKE_ORDERED = "CAKE_ORDERED";
 const CAKE_RESTOCKED = "CAKE_RESTOCKED";
 
 
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
 
 // States
 const initialState = {
     numOfCakes: 10
 }
 
 // reducer
 const reducer = (state=initialState, action) => {
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
 
 const store = createStore(reducer);
 console.log('Initial state', store.getState())
 
 // runs a callable / anon function  inside  subscribe one the state changes.
 const unsubscribe = store.subscribe(() => {
     console.log("Updated State ", store.getState())
 })
 
 
 /**
  store.dispatch(orderCake())
  store.dispatch(orderCake())
  store.dispatch(orderCake())
  store.dispatch(restockCake(3)
  THese can be replaced with bindActionCreator -> utility too provided by redux
*/
const bindActionCreator = redux.bindActionCreators

const actions = bindActionCreator({orderCake, restockCake}, store.dispatch)
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restockCake(3)
 
 // unsubscribe from store
 unsubscribe()
 // After unsubscribe below wont log the changes in states 
 // store.dispatch(orderCake())
 // store.dispatch(orderCake())
 

/**
 Output

Initial state { numOfCakes: 10 }
Updated State  { numOfCakes: 9 }
Updated State  { numOfCakes: 8 }
Updated State  { numOfCakes: 7 }
Updated State  { numOfCakes: 10 }
 */
