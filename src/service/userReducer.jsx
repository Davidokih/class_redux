import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    cart: [],
    totalqty: 0,
    totalprice: 0
}

const userReducer = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, { payload }) => {
            state.user = payload
        },
        logout: (state) => {
            state.user = null
        },
        addToCart: (state,{payload}) => {
            const check = state.cart.findIndex((el) => el.id === payload.id)
            if (check >= 0) {
                state.cart[check].qty += 1
            } else {
                state.cart.push({...payload,qty:1})
            }
            state.totalqty += 1
            state.totalprice += payload?.qty * payload.price
        },
        removeItemTotal: (state, { payload }) => {
            state.cart.filter((el)=>el.id !== payload.id)
        }
    }
});

export const {addUser,addToCart,logout} = userReducer.actions

export default userReducer.reducer