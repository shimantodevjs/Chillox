// src/reducers/menuSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchBurgers = createAsyncThunk('menu/fetchBurgers', async () => {
  const response = await fetch('https://my-burger-api.herokuapp.com/burgers');
  const data = await response.json();
  return data;
});

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    burgers: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBurgers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBurgers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.burgers = action.payload;
      })
      .addCase(fetchBurgers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default menuSlice.reducer;
