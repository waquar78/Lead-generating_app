import { configureStore } from '@reduxjs/toolkit';
import { leadApi } from '../api/api';

export const store = configureStore({
  reducer: {
    
    [leadApi.reducerPath]: leadApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(leadApi.middleware),
});

export default store;
