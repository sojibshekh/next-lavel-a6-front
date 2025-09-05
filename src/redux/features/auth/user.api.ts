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


updateUserByAdmin: builder.mutation({
  query: ({ id, body }) => ({
    url: `/user/${id}`,
    method: "PATCH",
    data: body,  // ✅ body পাঠাচ্ছি, data নয়
  }),
}),





    


  }),
});

export const {
        useAllUsersQuery,
        useUpdateUserProfileMutation,
        useUpdateUserByAdminMutation,
     } = userApi;

