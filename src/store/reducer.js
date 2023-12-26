import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/authSlice';
import contactsReducer from './contacts/contactsSlice';
import filterReducer from './filter/filterSlice';
import apiReducer from './rootReducers/apiSlice';

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
