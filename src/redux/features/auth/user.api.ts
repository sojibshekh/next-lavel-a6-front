import { baseApi } from "@/redux/baseApi";
import type { UserInfo } from "./wallte.api";





export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    allUsers: builder.query<UserInfo[], void>({
      query: () => ({
        url: "/user/all-user",
        method: "GET",
      }),
    }),

  updateUserProfile: builder.mutation({
  query: (data) => ({
    url: "/user/update-profile",
    method: "PATCH",
    data,   // ✅ axios expects data
  }),
}),



    


  }),
});

export const {
        useAllUsersQuery,
        useUpdateUserProfileMutation,

     } = userApi;

