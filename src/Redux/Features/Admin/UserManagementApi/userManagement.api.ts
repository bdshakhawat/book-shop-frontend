import { TQueryParam } from "../../../../Types/global";
import { baseApi } from "../../../api/baseApi";

// router.post(
//   '/create-new-user',
//   validateRequest(UserValidation.createUserValidationSchema),
//   UserControllers.createNewUser,
// );
// router.get('/get-all-users', UserControllers.RetriveUsers);
// router.patch(
//   '/deactivate-user/:id',
//   authGurd('admin'),
//   UserControllers.deactivateUser,
// );
// router.patch(
//   '/activate-user/:id',
//   authGurd('admin'),
//   UserControllers.activateUser,
// );

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (data) => ({
        url: "/create-new-user",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
    deactivateUser: builder.mutation({
      query: (data) => ({
        url: "/deactivate-user/:id",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
    activateUser: builder.mutation({
      query: (data) => ({
        url: "/activate-user/:id",
        method: "POST",
        body: data,
      }),
    }),
    getAllUser: builder.query({
      query: (args) => {
        console.log(args);
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/get-all-users",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["users"],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      transformResponse: (baseQueryReturnValue: any) => {
        return {
          data: baseQueryReturnValue.data,
          meta: baseQueryReturnValue.meta,
        };
      },
    }),
  }),
});

export const {
  useCreateUserMutation,
  useDeactivateUserMutation,
  useActivateUserMutation,
  useGetAllUserQuery,
} = userApi;
