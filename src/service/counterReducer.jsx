import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    count:0
}

const counterReducer = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state,action) => {
            state.count += action.payload
        }    
    }
});

export const {increment} = counterReducer.actions

export default counterReducer.reducer