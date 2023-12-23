import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from 'api/api';

const initialState = {
  isLoggedIn: '',
  user: null,
};

const userSignUpThunk = createAsyncThunk(
  'auth/signUp',
  async (newUser, thunkAPI) => {
    try {
      const { data } = await api.signUp(newUser);
      const { token } = data;
      api.setToken(token);
      const { user } = data;
      return { token, user };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const userLogInThunk = createAsyncThunk(
  'auth/logIn',
  async (userData, thunkAPI) => {
    try {
      const { data } = await api.logIn(userData);
      const { token } = data;
      api.setToken(token);
      const { user } = data;
      return { token, user };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(
        userSignUpThunk.fulfilled,
        (state, { payload: { token, user } }) => {
          state.isLoggedIn = token;
          state.user = user;
        }
      )
      .addCase(
        userLogInThunk.fulfilled,
        (state, { payload: { token, user } }) => {
          state.isLoggedIn = token;
          state.user = user;
        }
      ),
});

const authReducer = authSlice.reducer;
export default authReducer;

export { userSignUpThunk, userLogInThunk };
