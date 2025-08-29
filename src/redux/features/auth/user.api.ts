import { baseApi } from "@/redux/baseApi";
// src/types/auth.ts
export interface UserInfo {
  id: string;
  name: string;
  email: string;
  role: string;
  
}

export interface UserInfoResponse {
  statusCode: number;
  success: boolean;
  message: string;
  data: UserInfo;
}




export const walletApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    myWallet: builder.query({
      query: () => ({
        url: "wallet/my-wallet",
        method: "GET",
      }),
    }),
  }),
});

export const { useMyWalletQuery } = walletApi;

