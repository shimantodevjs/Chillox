import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchBurgers = createAsyncThunk('menu/fetchBurgers', async () => {
  const response = await fetch('https://shimantodevjs.github.io/fastfood-api/fastfood.json');
  const data = await response.json();
  return data;
});

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    burgers: [],
    status: 'idle',
    error: null,
    burgerTypeFilter: null,
  },
  reducers: {
     // Added reducer for setting burger type filter
    setBurgerTypeFilter: (state, action) => {
      state.burgerTypeFilter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBurgers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBurgers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Check if action.payload has burgers property
        if (Array.isArray(action.payload.burgers)) {
          state.burgers = action.payload.burgers;
        } else {
          state.status = 'failed';
          state.error = 'Invalid burger data: Burgers array not found';
        }
      })
      .addCase(fetchBurgers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});


export const { setBurgerTypeFilter } = menuSlice.actions;

export default menuSlice.reducer;

