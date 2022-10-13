const store = require('./app/store')
const cakeActions = require('./features/cake/cakeSlics').cakeActions
const iceCreamActions = require('./features/icecream/iceCreamSlice').iceCreamActions

console.log('Initial State', store.getState())

// const unsubscribe = store.subscribe(() => {
//     console.log("Updated state ",store.getState())
// })

store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(3))

store.dispatch(iceCreamActions.ordered())
store.dispatch(iceCreamActions.ordered())
store.dispatch(iceCreamActions.restocked(2))

// unsubscribe()

/**

Logger COnsole Output

Initial State { cake: { numOfCakes: 10 }, iceCream: { numOfIceCreams: 10 } }
 action cake/ordered @ 16:38:59.793
   prev state { cake: { numOfCakes: 10 }, iceCream: { numOfIceCreams: 10 } }
   action     { type: 'cake/ordered', payload: undefined }
   next state { cake: { numOfCakes: 9 }, iceCream: { numOfIceCreams: 10 } }
 action cake/ordered @ 16:38:59.794
   prev state { cake: { numOfCakes: 9 }, iceCream: { numOfIceCreams: 10 } }
   action     { type: 'cake/ordered', payload: undefined }
   next state { cake: { numOfCakes: 8 }, iceCream: { numOfIceCreams: 10 } }
 action cake/ordered @ 16:38:59.795
   prev state { cake: { numOfCakes: 8 }, iceCream: { numOfIceCreams: 10 } }
   action     { type: 'cake/ordered', payload: undefined }
   next state { cake: { numOfCakes: 7 }, iceCream: { numOfIceCreams: 10 } }
 action cake/restocked @ 16:38:59.795
   prev state { cake: { numOfCakes: 7 }, iceCream: { numOfIceCreams: 10 } }
   action     { type: 'cake/restocked', payload: 3 }
   next state { cake: { numOfCakes: 10 }, iceCream: { numOfIceCreams: 10 } }
 action iceCream/ordered @ 16:38:59.796
   prev state { cake: { numOfCakes: 10 }, iceCream: { numOfIceCreams: 10 } }
   action     { type: 'iceCream/ordered', payload: undefined }
   next state { cake: { numOfCakes: 10 }, iceCream: { numOfIceCreams: 9 } }
 action iceCream/ordered @ 16:38:59.796
   prev state { cake: { numOfCakes: 10 }, iceCream: { numOfIceCreams: 9 } }
   action     { type: 'iceCream/ordered', payload: undefined }
   next state { cake: { numOfCakes: 10 }, iceCream: { numOfIceCreams: 8 } }
 action iceCream/restocked @ 16:38:59.797
   prev state { cake: { numOfCakes: 10 }, iceCream: { numOfIceCreams: 8 } }
   action     { type: 'iceCream/restocked', payload: 2 }
   next state { cake: { numOfCakes: 10 }, iceCream: { numOfIceCreams: 10 } }
 */