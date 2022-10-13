const store = require('./app/store')
const cakeActions = require('./features/cake/cakeSlics').cakeActions
const iceCreamActions = require('./features/icecream/iceCreamSlice').iceCreamActions

console.log('Initial State', store.getState())

const unsubscribe = store.subscribe(() => {
    console.log("Updated state ",store.getState())
})

store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(3))

store.dispatch(iceCreamActions.ordered())
store.dispatch(iceCreamActions.ordered())
store.dispatch(iceCreamActions.restocked(2))

unsubscribe()

/**

Logger COnsole Output

Initial State { cake: { numOfCakes: 10 }, iceCream: { numOfIceCreams: 10 } }
Updated state  { cake: { numOfCakes: 9 }, iceCream: { numOfIceCreams: 9 } }
 action cake/ordered @ 16:58:15.456
   prev state { cake: { numOfCakes: 10 }, iceCream: { numOfIceCreams: 10 } }
   action     { type: 'cake/ordered', payload: undefined }
   next state { cake: { numOfCakes: 9 }, iceCream: { numOfIceCreams: 9 } }
Updated state  { cake: { numOfCakes: 8 }, iceCream: { numOfIceCreams: 8 } }
 action cake/ordered @ 16:58:15.457
   prev state { cake: { numOfCakes: 9 }, iceCream: { numOfIceCreams: 9 } }
   action     { type: 'cake/ordered', payload: undefined }
   next state { cake: { numOfCakes: 8 }, iceCream: { numOfIceCreams: 8 } }
Updated state  { cake: { numOfCakes: 7 }, iceCream: { numOfIceCreams: 7 } }
 action cake/ordered @ 16:58:15.458
   prev state { cake: { numOfCakes: 8 }, iceCream: { numOfIceCreams: 8 } }
   action     { type: 'cake/ordered', payload: undefined }
   next state { cake: { numOfCakes: 7 }, iceCream: { numOfIceCreams: 7 } }
Updated state  { cake: { numOfCakes: 10 }, iceCream: { numOfIceCreams: 7 } }
 action cake/restocked @ 16:58:15.459
   prev state { cake: { numOfCakes: 7 }, iceCream: { numOfIceCreams: 7 } }
   action     { type: 'cake/restocked', payload: 3 }
   next state { cake: { numOfCakes: 10 }, iceCream: { numOfIceCreams: 7 } }
Updated state  { cake: { numOfCakes: 10 }, iceCream: { numOfIceCreams: 6 } }
 action iceCream/ordered @ 16:58:15.459
   prev state { cake: { numOfCakes: 10 }, iceCream: { numOfIceCreams: 7 } }
   action     { type: 'iceCream/ordered', payload: undefined }
   next state { cake: { numOfCakes: 10 }, iceCream: { numOfIceCreams: 6 } }
Updated state  { cake: { numOfCakes: 10 }, iceCream: { numOfIceCreams: 5 } }
 action iceCream/ordered @ 16:58:15.460
   prev state { cake: { numOfCakes: 10 }, iceCream: { numOfIceCreams: 6 } }
   action     { type: 'iceCream/ordered', payload: undefined }
   next state { cake: { numOfCakes: 10 }, iceCream: { numOfIceCreams: 5 } }
Updated state  { cake: { numOfCakes: 10 }, iceCream: { numOfIceCreams: 7 } }
 action iceCream/restocked @ 16:58:15.461
   prev state { cake: { numOfCakes: 10 }, iceCream: { numOfIceCreams: 5 } }
   action     { type: 'iceCream/restocked', payload: 2 }
   next state { cake: { numOfCakes: 10 }, iceCream: { numOfIceCreams: 7 } }
 */