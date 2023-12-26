import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from 'api/api';

const initialState = [];

const getAllContactsThunk = createAsyncThunk(
  'contacts/getAllContacts',
  async (_, thunkAPI) => {
    try {
      const { data } = await api.fetchAllContacts();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      await api.deleteContact(id);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const { data } = await api.addContact(newContact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getAllContactsThunk.fulfilled, (state, { payload }) => {
        return payload;
      })
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        return state.filter(el => el.id !== payload);
      })
      .addCase(addContactThunk.fulfilled, (state, { payload }) => {
        state.push(payload);
      }),
});

const contactsReducer = contactsSlice.reducer;
export default contactsReducer;

export { getAllContactsThunk, deleteContactThunk, addContactThunk };
