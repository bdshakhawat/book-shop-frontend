/* eslint-disable @typescript-eslint/no-explicit-any */
import { TQueryParam, TResponseRedux, TBook } from "../../../../Types/global";
import { baseApi } from "../../../api/baseApi";

// router.post('/create-new-book', BookController.CreateBook);
// router.get('/get-all-books', BookController.RetriveBooks);
// router.get('/get-book/:id', BookController.RetriveSingleBook);
// router.get('/category', BookController.NumberOfCategory);
// router.get('/authors', BookController.GetAuthors);
// router.patch("/delete-book/:id", BookController.DeleteBook)
// router.put("/update-book/:id", BookController.UpdateBook)
const OrderManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createNewBook: builder.mutation({
      query: (data) => ({
        url: "/create-new-book",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
    getBookByCatagory: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/category",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["books"],
      transformResponse: (baseQueryReturnValue: any) => {
        const response = baseQueryReturnValue as TResponseRedux<TBook[]>;
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    getBookByAuthors: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/authors",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["books"],
      transformResponse: (baseQueryReturnValue: any) => {
        const response = baseQueryReturnValue as TResponseRedux<TBook[]>;
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    getAllBook: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/get-all-books",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["books"],
      transformResponse: (baseQueryReturnValue: any) => {
        const response = baseQueryReturnValue as TResponseRedux<TBook[]>;
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    deleteBook: builder.mutation({
      query: (args) => ({
        url: `/delete-book/${args.id}`,
        method: "PATCH",
        body: args.data,
      }),
      invalidatesTags: ["books"],
    }),
    updateBook: builder.mutation({
      query: (args) => ({
        url: `/update-book/${args.id}`,
        method: "PATCH",
        body: args.data,
      }),
      invalidatesTags: ["books"],
    }),
    getSingleBook: builder.query({
      query: (args) => ({
        url: `/get-book/${args.id}`,
        method: "GET",
        body: args.data,
      }),
      providesTags: ["books"],
    }),
  }),
});

export const {
  useGetAllBookQuery,
  useGetBookByCatagoryQuery,
  useGetBookByAuthorsQuery,
  useCreateNewBookMutation,
  useDeleteBookMutation,
  useUpdateBookMutation,
  useGetSingleBookQuery,
} = OrderManagementApi;
