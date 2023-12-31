import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import menuReducer from './menuSlice';
import cartSlice from './cartSlice';
import reviewsReducer from './reviewsSlice';

// Combine reducers
const rootReducer = combineReducers({
  menu: menuReducer,
  cart: cartSlice,
  reviews: reviewsReducer,
  
});


// Configuration for redux-persist
const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the Redux store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Create a persistor object
const persistor = persistStore(store);

export { store, persistor };
