import { baseApi } from "../../api/baseApi";


export const orderAPI = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getOrdersByEmail: build.query({
        query: () => `/order/get-customer-orders`,
      }),
      
  }),
});

export const { useGetOrdersByEmailQuery } = orderAPI;