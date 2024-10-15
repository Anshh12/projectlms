import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Defaults to localStorage for web
import cartReducer from './Cartslice'; // Adjust the import as necessary

// Combine reducers if you have multiple slices
const rootReducer = combineReducers({
  cart: cartReducer,
  // Add other reducers here if needed
});

// Redux Persist Config
const persistConfig = {
  key: 'root',
  storage, // Use localStorage to persist state
  whitelist: ['cart'], // Specify the slice(s) you want to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create Redux store with middleware for Redux Persist
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Create persistor
export const persistor = persistStore(store);
export default store;
