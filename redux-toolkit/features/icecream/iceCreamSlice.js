const { cakeActions } = require('../cake/cakeSlics')

const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numOfIceCreams: 10
}

/**
Extra Reducers for IceCream
When you order a cake, ice cream is free.
 */

const iceCreamSlice = createSlice({
    name: 'iceCream',
    initialState: initialState,
    reducers: {
        ordered: state => {
            state.numOfIceCreams--
        },
        restocked: (state, action) => {
            state.numOfIceCreams += action.payload
        }
    },
    // wenever cake is ordered, we also decreament the no of Icecreams
    // greatly reduces the complexity    
    // extraReducers: {
    //     ['cake/ordered']: (state) => {
    //         state.numOfIceCreams--
    //     }
    // }
    extraReducers: (builder) => { // this is same as above
        builder.addCase(cakeActions.ordered, state => {
            state.numOfIceCreams--
        })
    }
})

module.exports = iceCreamSlice.reducer
module.exports.iceCreamActions = iceCreamSlice.actions
