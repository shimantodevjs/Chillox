import { configureStore } from "@reduxjs/toolkit";
import menuReducer from './menuSlice'
import cartSlice from "./cartSlice";



const store = configureStore({
    reducer:{
        menu: menuReducer,
        cart: cartSlice,
    },
});

export default store;