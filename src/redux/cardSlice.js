import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cart:[]
}
const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const {id} = action.payload
            const checks = state.cart.find(item => item.id === id)
            if(checks){ 
            }else{
                state.cart.push(action.payload)
            } 
        },
        removeFromCart:(state,action)=>{
            state.cart = state.cart.filter(x=>x.id !== action.payload.id)
             
        }
    }
})
export const {addToCart,removeFromCart} = cartSlice.actions;

export default cartSlice.reducer;