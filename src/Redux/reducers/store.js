import { configureStore } from "@reduxjs/toolkit";
import menuReducer from './menuSlice'
import cartSlice from "./cartSlice";
import reviewsReducer from './reviewsSlice'



const store = configureStore({
    reducer:{
        menu: menuReducer,
        cart: cartSlice,
        reviews: reviewsReducer,
    },
});

export default store;