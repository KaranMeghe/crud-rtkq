/** @format */

import { configureStore } from '@reduxjs/toolkit';
import { studentsApi } from './apis/studentApi';

const store = configureStore({
  reducer: {
    [studentsApi.reducerPath]: studentsApi.reducer,
  },

  // Add the middleware required by RTK Query for caching and lifecycle handling
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(studentsApi.middleware),
});

export default store;
