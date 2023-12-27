import { createSlice } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  getAllContactsThunk,
} from './thunks';

const initialState = [];

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
