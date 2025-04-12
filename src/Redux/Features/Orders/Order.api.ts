/* eslint-disable @typescript-eslint/no-explicit-any */
import { TBook, TQueryParam, TResponseRedux } from "../../../Types/global";
import { baseApi } from "../../api/baseApi";

// route.patch('/verify-order', authGurd('admin'), orderController.verifyPayment);
// route.post(
//   '/create-order',
//   authGurd('user', 'admin'),
//   orderController.createOrder,
// );
// route.patch(
//   '/change-order-status/:id',
//   authGurd('admin'),
//   orderController.changeOrderStatus,
// );
// route.get('/get-orders', authGurd('admin'), orderController.getOrders);
// route.get('/get-customer-orders', authGurd('user'), orderController.getCustomerOrder);
const OrderManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrder: builder.query({
      query: (args) => {
        console.log(args);
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/get-orders",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["orders"],
      transformResponse: (baseQueryReturnValue: any) => {
        const response = baseQueryReturnValue as TResponseRedux<TBook[]>;
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    getCustomerOrders: builder.query({
      query: (args) => {
        console.log(args);
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/get-customer-orders",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["orders"],
      transformResponse: (baseQueryReturnValue: any) => {
        const response = baseQueryReturnValue as TResponseRedux<any>;
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    createOrder: builder.mutation({
      query: (data) => ({
        url: "/create-order",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["orders"],
    }),
    updateOrder: builder.mutation({
      query: (args) => ({
        url: `/change-order-status/${args.id}`,
        method: "PATCH",
        body: args.data,
      }),
      invalidatesTags: ["orders"],
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetAllOrderQuery,
  useGetCustomerOrdersQuery,
  useUpdateOrderMutation,
} = OrderManagementApi;
