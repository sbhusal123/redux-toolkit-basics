/**
Though the approach we followed upto 2 is good for an application that has not much
depth for the nesting level for state management.

However, if we have the state like below, it becomes a headache to manage the state for
such nesting, considering updating, reseting those state we'll have more numbers of actions for 
updating single source of truth.
-> upate name
-> update address -> street
-> update address -> city
-> update address -> state
*/

redux = require('redux');

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
            return {
                ...state,
                address: {
                    ...state.address,
                    street: action.payload
                }
            }
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
