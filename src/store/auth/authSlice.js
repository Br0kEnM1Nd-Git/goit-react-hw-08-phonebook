import { createSlice } from '@reduxjs/toolkit';
import {
  authRefreshThunk,
  userLogInThunk,
  userLogOutThunk,
  userSignUpThunk,
} from './thunks';

const initialState = {
  token: '',
  isLoggedIn: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(
        userSignUpThunk.fulfilled,
        (state, { payload: { token, user } }) => {
          state.isLoggedIn = true;
          state.token = token;
          state.user = user;
        }
      )
      .addCase(
        userLogInThunk.fulfilled,
        (state, { payload: { token, user } }) => {
          state.isLoggedIn = true;
          state.token = token;
          state.user = user;
        }
      )
      .addCase(userLogOutThunk.fulfilled, (state, { payload }) => {
        state.isLoggedIn = false;
        state.token = '';
        state.user = null;
      })
      .addCase(authRefreshThunk.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.user = payload;
      })
      .addCase(authRefreshThunk.rejected, (state, { payload }) => {
        state.isLoggedIn = false;
        state.token = '';
        state.user = null;
      }),
});

const authReducer = authSlice.reducer;
export default authReducer;
