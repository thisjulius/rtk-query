// src/app/api.ts

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "posts", // No arguments expected
    }),
  }),
});

export const { useGetPostsQuery } = api;
