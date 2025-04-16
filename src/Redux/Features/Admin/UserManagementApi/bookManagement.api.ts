/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../../api/baseApi"

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
          url: '/books/get-all-books',
          method: 'GET',
          params,
        };
      },
      providesTags: ['Books'], // ✅ Tells RTK Query this query provides 'Books' data
      keepUnusedDataFor: 300,  // ✅ Cache for 5 minutes
    }),
    createBook: builder.mutation({
      query: (data)=>({
          url: '/books/create-new-book',
          method: 'POST',
          body: data,
      }),
      invalidatesTags: ['Books'],
  }),

    deleteABook: builder.mutation({
      query: (params) => ({
        url: `/books/delete-book/${params}`,
        method: "PATCH",
      }),
      invalidatesTags: ['Books'], // ✅ Refetch getAllbooks after deletion
    }),

    getSingleBook: builder.query({
      query: (id) => ({
        url: `/books/get-book/${id}`,
        method: 'GET',
      }),
      providesTags: (_result, _error, id) => [{ type: 'Books', id }],
    }),

    updateProduct: builder.mutation({
      query: ({ data, id }) => ({
        url: `/books/update-book/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ['Books'],
    }),
  })
})

export const {
  useGetAllbooksQuery,
  useGetSingleBookQuery,
  useDeleteABookMutation,
  useCreateBookMutation,
  useUpdateProductMutation, // <- You forgot to export this earlier
} = bookManagementApi;
