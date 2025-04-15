import { baseApi } from "../../api/baseApi";

export interface IBook {
  title: string;
  author: string;
  category: "Fiction" | "Science" | "SelfDevelopment" | "Poetry" | "Religious";
  description: string;
  quantity: number;
  price: number;
  inStock: boolean;
  isDeleted: boolean;
}

export const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    updateProduct: build.mutation({
      query: ({data,id}) => ({
        url: `/books/update-book/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const { useUpdateProductMutation } = productApi;
