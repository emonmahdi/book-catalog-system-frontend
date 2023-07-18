/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IBooks } from "../../types/globalTypes";

export const api = createApi({
  reducerPath: "books",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => `/books`,
    }),
    singleBook: builder.query({
      query: (id) => `/book/${id}`,
    }),
    addBook: builder.mutation<IBooks, Partial<IBooks>>({
      query: (data) => ({
        url: "/book",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetBooksQuery, useSingleBookQuery, useAddBookMutation } = api;
