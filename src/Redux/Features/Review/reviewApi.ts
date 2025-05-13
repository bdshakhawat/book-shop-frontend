import { baseApi } from "../../api/baseApi";

export const reviewAPI = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createReview: build.mutation({
      query: (data) => ({
        url: `/reviews/create-review`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Reviews"],
    }),
    getReview: build.query({
      query: () => ({
        url: "/reviews",
        method: "Get",
      }),
      providesTags: ["Reviews"],
    }),

    getSingleBookReview: build.query({
      query: (bookId) => ({
        url: `/reviews/${bookId}`,
        method: "Get",
      }),
      providesTags: ["Reviews"],
    }),
  }),
});

export const {
  useCreateReviewMutation,
  useGetReviewQuery,
  useGetSingleBookReviewQuery,
} = reviewAPI;
