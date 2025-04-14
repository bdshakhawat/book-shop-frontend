import { baseApi } from "../../api/baseApi";

export const orderAPI = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getOrdersByEmail: build.query({
      query: () => `/order/get-customer-orders`,
    }),
    createOrder: build.mutation({
      query: (data) => ({
        url: "/order/create-order",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetOrdersByEmailQuery ,useCreateOrderMutation} = orderAPI;
