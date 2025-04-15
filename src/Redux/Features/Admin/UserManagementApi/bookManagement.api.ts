/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../../api/baseApi";

const bookManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllbooks: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: any) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/books/get-all-books",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["Books"],
      keepUnusedDataFor: 300,
    }),
    deleteABook: builder.mutation({
      query: (params) => ({
        url: `/books/delete-book/${params}`,
        method: "PATCH",
      }),
      invalidatesTags: ["Books"],
    }),
    getSingleBook: builder.query({
      query: (id) => {
        return {
          url: `/books/get-book/${id}`,
          method: "GET",
        };
      },
    }),
    updateProduct: builder.mutation({
      query: ({ data, id }) => ({
        url: `/books/update-book/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Books"],
    }),
  }),
});

export const {
  useGetAllbooksQuery,
  useGetSingleBookQuery,
  useDeleteABookMutation,
} = bookManagementApi;
