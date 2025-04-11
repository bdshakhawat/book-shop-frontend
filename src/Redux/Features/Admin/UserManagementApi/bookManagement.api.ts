/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../../api/baseApi"


const bookManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllbooks: builder.query({
            query: (args) => {
                console.log(args);
                const params = new URLSearchParams();

                if (args) {
                    args.forEach((item:any) => {
                        params.append(item.name, item.value as string);
                    });
                }
                return {

                    url: '/books/get-all-books',
                    method: 'GET',
                    params:params
                }
            }
        })
    })
})


export const { useGetAllbooksQuery } = bookManagementApi