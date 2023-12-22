import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from 'api/api';

const initialState = { isLogedIn: '', isLoading: false, error: null };

const userSignUpThunk = createAsyncThunk(
  'auth/signUp',
  async (newUser, thunkAPI) => {
    try {
      const { data } = await api.signUp(newUser);
      const { token } = data;
      return token;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const userLogInThunk = createAsyncThunk(
  'auth/logIn',
  async (userData, thunkAPI) => {
    try {
      const { data } = await api.signUp(userData);
      const { token } = data;
      return token;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const handlePending = state => {
  state.isLoading = true;
};
const handleReject = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
const handleFulfilled = state => {
  state.isLoading = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(userSignUpThunk.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.isLogedIn = payload;
      })
      .addCase(userLogInThunk.fulfilled, (state, { payload }) => {
        state.isLogedIn = payload;
      })
      //   .addCase(addContactThunk.fulfilled, (state, { payload }) => {
      //     state.contacts.push(payload);
      //   })
      .addMatcher(action => action.type.endsWith('pending'), handlePending)
      .addMatcher(action => action.type.endsWith('rejected'), handleReject)
      .addMatcher(action => action.type.endsWith('fulfilled'), handleFulfilled),
});

const authReducer = authSlice.reducer;
export default authReducer;

export { userSignUpThunk, userLogInThunk };
