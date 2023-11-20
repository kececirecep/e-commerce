import { createSlice } from "@reduxjs/toolkit";

const initialState={
    favouriteItems:[],
}

const favSlice = createSlice({
    name:"favourite",
    initialState,
    reducers:{
        addToFav:(state,action)=>{
            const {id} = action.payload
            const favCheck = state.favouriteItems.find(item=>item.id === id)
            if(favCheck){
            }else{
                state.favouriteItems.push(action.payload)
            }
        },
        removeFromFav:(state,action)=>{
            state.favouriteItems=state.favouriteItems.filter(a=>a.id !== action.payload.id)
        }
    }
})

export const {addToFav, removeFromFav} = favSlice.actions;

export default favSlice.reducer;