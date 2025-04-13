import { baseApi } from "../../api/baseApi";


export const userAPI = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (data: { email: string; password: string }) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
    }),
    register: build.mutation({
      query: (data: { name: string; email: string; password: string }) => ({
        url: "/users/create-new-user",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = userAPI;