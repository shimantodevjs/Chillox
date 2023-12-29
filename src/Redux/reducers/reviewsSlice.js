import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRandomUserReviews = createAsyncThunk('reviews/fetchRandomUserReviews', async () => {
  try {
    // Fetch random user data from Random User Generator API
    const userResponse = await fetch('https://randomuser.me/api/?results=10');
    const userData = await userResponse.json();

    // Fetch comments (reviews) from JSONPlaceholder API
    const commentResponse = await fetch('https://jsonplaceholder.typicode.com/comments');
    const commentData = await commentResponse.json();

    // Generate random star ratings
    const reviews = userData.results.map((user, index) => ({
      name: `${user.name.first} ${user.name.last}`,
      profilePicture: user.picture.thumbnail,
      comment: commentData[index].body,
      stars: Math.floor(Math.random() * 3) + 3,
    }));

    return reviews;
  } catch (error) {
    throw error;
  }
});

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: {
    userReviews: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomUserReviews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRandomUserReviews.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.userReviews = action.payload;
      })
      .addCase(fetchRandomUserReviews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default reviewsSlice.reducer;
// export const { /* any additional actions if needed */ } = reviewsSlice.actions;
