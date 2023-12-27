import { createAsyncThunk } from '@reduxjs/toolkit';
import api from 'api/api';

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

const userLogOutThunk = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  try {
    const { data } = await api.logOut();
    api.setToken('');
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const authRefreshThunk = createAsyncThunk(
  'auth/refresh',
  async (token, thunkAPI) => {
    try {
      if (!token) throw new Error('No Token');
      api.setToken(token);
      const { data } = await api.authRefresh();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message || error);
    }
  }
);

export { userSignUpThunk, userLogInThunk, userLogOutThunk, authRefreshThunk };
