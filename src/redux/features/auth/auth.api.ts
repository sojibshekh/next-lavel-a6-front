import { baseApi } from "@/redux/baseApi";
// src/types/auth.ts
export interface UserInfo {
  id: string;
  name: string;
  email: string;
  role: string;
  isActive: string;
  isBlocked: boolean;
  _id: string;
  
}

export interface UserInfoResponse {
  statusCode: number;
  success: boolean;
  message: string;
  data: UserInfo;
}



 export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (logininfo) => ({
        url: "/auth/login",
        method: "POST",
        data: logininfo,
      }),
       invalidatesTags: ["User"], 
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),
    registerUser: builder.mutation({
      query: (userinfo) => ({
        url: "/user/register",
        method: "POST",
        data: userinfo,
      }),
    }),
 
   getUserInfo: builder.query<UserInfoResponse, void>({
      query: () => ({
        url: "/auth/me",
        method: "GET",
        withCredentials: true, 
      }),
      providesTags: ["User"],
    }),

  }),
 
});

export const {
     useRegisterUserMutation, 
     useLoginMutation, 
     useGetUserInfoQuery,
     useLogoutMutation,
    } = authApi;
