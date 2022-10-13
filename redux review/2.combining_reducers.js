/**
 * Now the shop sells ice-cream too and now we need to account for those with separate 
 * stores, action , ...
 * At last we combine the stores multiple reducers using combinereducers.
 */

const redux = require('redux');
const createStore = redux.createStore
 
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
 
//  Now we need to combine two different reducers to update
// -------------------------------------------------------------------
const combineReducers = redux.combineReducers;
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
store = createStore(rootReducer);
// -------------------------------------------------------------------
 

 const unsubscribe = store.subscribe(() => {
     console.log("Updated State ", store.getState())
 })
 

const bindActionCreator = redux.bindActionCreators

const actions = bindActionCreator({orderCake, restockCake}, store.dispatch)
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restockCake(3)

// or the other way around to dispatch action could be
store.dispatch(orderIceCream())
store.dispatch(orderIceCream())
store.dispatch(orderIceCream())
store.dispatch(restockIceCream(3))
 
 // unsubscribe from store
 unsubscribe()
 // After unsubscribe below wont log the changes in states 
 // store.dispatch(orderCake())
 // store.dispatch(orderCake())

 /**
  Output
    Updated State  { cake: { numOfCakes: 9 }, iceCream: { numOfIceCreams: 10 } }
    Updated State  { cake: { numOfCakes: 8 }, iceCream: { numOfIceCreams: 10 } }
    Updated State  { cake: { numOfCakes: 7 }, iceCream: { numOfIceCreams: 10 } }
    Updated State  { cake: { numOfCakes: 10 }, iceCream: { numOfIceCreams: 10 } }
    Updated State  { cake: { numOfCakes: 10 }, iceCream: { numOfIceCreams: 9 } }
    Updated State  { cake: { numOfCakes: 10 }, iceCream: { numOfIceCreams: 8 } }
    Updated State  { cake: { numOfCakes: 10 }, iceCream: { numOfIceCreams: 7 } }
    Updated State  { cake: { numOfCakes: 10 }, iceCream: { numOfIceCreams: 10 } }
  */
