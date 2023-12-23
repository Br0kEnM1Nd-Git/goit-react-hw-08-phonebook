import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import authReducer from './authSlice';
import contactsReducer from './contactsSlice';
import filterReducer from './filterSlice';
import apiReducer from './apiSlice';

const persistConfig = {
  key: 'auth',
  storage,
  blacklist: [],
};

const authPersistedReducer = persistReducer(persistConfig, authReducer);

const rootReducer = {
  contacts: contactsReducer,
  filter: filterReducer,
  auth: authPersistedReducer,
  api: apiReducer,
};

export default rootReducer;
