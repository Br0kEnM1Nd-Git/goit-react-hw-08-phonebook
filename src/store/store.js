import { combineReducers, configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import filterReducer from './filterSlice';
import authReducer from './authSlice';
import { apiReducer } from './apiSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  auth: authReducer,
  api: apiReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
