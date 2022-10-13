/**
Go through 3 comment section.

Solution:
- Install immer: npm i immer

Immer Usage:
-----------------------------------------
const produce = require('immer').produce;

newState = product(<initialState>,callable)
callable = (draftCopyOfState) => {
    draftCopyOfState.<nesting>.<nesting> = <value>
}
-----------------------------------------
*/



redux = require('redux');
// ------------------------------------
const produce = require('immer').produce;
// ------------------------------------

const initialState = {
    name: 'Viswas',
    address: {
        street: '123 Main St.',
        city: 'Boston',
        state: 'MA'
    }
}

const STREET_UPDATED = 'STREET_UPDATED'
const updateStreet = (street) => {
    return {
        type: STREET_UPDATED,
        payload: street
    }
}


const reducer = (state=initialState, action) => {
    switch(action.type){
        case STREET_UPDATED:
            // Nesting is complex
            // return {
                // ...state,
                // address: {
                //     ...state.address,
                //     street: action.payload
                // }
            // }

            // Soluion to above
            // ------------------------------------------
                return produce(state, (draft) => {
                    draft.address.street = action.payload
                })
            // ------------------------------------------
        default:
            return state
    }
}

const store = redux.createStore(reducer)
console.log('Initial State', store.getState())
const unsubscribe = store.subscribe(() => {
    console.log('Updated state ', store.getState())
})

store.dispatch(updateStreet('Nepal'))
unsubscribe()


/**
Output

Initial State {
  name: 'Viswas',
  address: { street: '123 Main St.', city: 'Boston', state: 'MA' }
}
Updated state  {
  name: 'Viswas',
  address: { street: 'Nepal', city: 'Boston', state: 'MA' }
}
 */