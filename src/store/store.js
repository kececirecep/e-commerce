import { configureStore } from '@reduxjs/toolkit'
import productSlice from '../redux/productSlice' 
import cardSlice from '../redux/cardSlice'
import favSlice from '../redux/favSlice'

export const store = configureStore({
  reducer: {
    myProducts: productSlice, 
    cart: cardSlice,
    favourite: favSlice
  },
})