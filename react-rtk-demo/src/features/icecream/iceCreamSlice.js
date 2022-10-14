import {createSlice} from '@reduxjs/toolkit'
import {ordered as cakeOrdered} from '../cake/cakeSlics';

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
        builder.addCase(cakeOrdered, state => {
            state.numOfIceCreams--
        })
    }
})

export default iceCreamSlice.reducer
export const {ordered, restocked} = iceCreamSlice.actions
