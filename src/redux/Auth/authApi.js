import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiClient, getToken } from "../../services/api";


export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: apiClient.defaults.baseURL,

    prepareHeaders: (headers) => {
      const token = getToken();

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (userData) => ({
        url: "/users/signup",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["Auth"],
    }),
    signIn: builder.mutation({
      query: (userData) => ({
        url: "/users/login",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["Auth"],
    }),
    signOut: builder.mutation({
      query: () => ({
        url: "/users/logout",
        method: "POST",
      }),
    }),
    getCurrent: builder.query({
      query: () => "/users/current",
      providesTags: ["Auth"],
    }),
  }),
});


export const { useSignUpMutation, useSignInMutation, useSignOutMutation, useGetCurrentQuery, useLazyGetCurrentQuery } = authApi;