import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    data:[],
    loading:false,
    error:"",
};

export const getProducts = createAsyncThunk('getProducts',async ()=>{
    const response = await axios.get('https://kececirecep.github.io/products.json/products.json')
    return response.data.products;  
})

const productSlice = createSlice({
    name:"myProducts",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getProducts.pending,(state,action)=>{
            state.loading = true;
            state.error=""
        })
        builder.addCase(getProducts.fulfilled,(state,action)=>{
            state.data = action.payload
            state.loading=false
        })
        builder.addCase(getProducts.rejected,(state,action)=>{
            state.loading=false;
            state.error="Error data"
        })
    }
})

export default productSlice.reducer;