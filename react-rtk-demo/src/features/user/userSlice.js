import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

import axios from 'axios';


// Generates pending, fulfilled and rejected action types
// Error is handled automatically
export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
    return axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        return response.data
    })
})

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    extraReducers: builder => {
        builder.addCase(fetchUsers.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action)=> {
            state.loading = false
            state.users = action.payload
            state.error = ''
        })
        builder.addCase(fetchUsers.rejected, (state, action)=> {
            state.loading = false
            state.users = []
            // we get a message here on rejected
            state.error = action.error.message
        })
    }
})

export default userSlice.reducer