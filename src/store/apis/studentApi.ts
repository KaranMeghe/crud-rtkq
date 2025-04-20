/** @format */

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { STUDENT } from '../models/student.model';

// createApi help us to create an API Slice
export const studentsApi = createApi({
  // key in the redux store
  reducerPath: 'students',

  //Setup base url for all API Request
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6803b11579cb28fb3f596126.mockapi.io',
  }),

  //Define APIS queries and mutation
  endpoints: (builder) => ({
    fetchStudents: builder.query<STUDENT[], void>({
      query: () => ({
        url: '/students',
        method: 'GET',
      }),
    }),
  }),
});

export const { useFetchStudentsQuery } = studentsApi;
