import { baseApi } from "@/redux/baseApi";
import type { use } from "react";
// src/types/auth.ts
export interface UserInfo {
  id: string;
  name: string;
  email: string;
  role: string;
  
}


interface WalletData {
  balance: number;
}

 export interface WalletResponse {
  success: boolean;
  message: string;
  data: WalletData;
}


export interface UserInfoResponse {
  statusCode: number;
  success: boolean;
  message: string;
  data: UserInfo;
}




export const walletApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    myWallet: builder.query<WalletResponse, void>({
      query: () => ({
        url: "/wallet/my-wallet",
        method: "GET",
      }),
    }),
    transaction: builder.query({
      query: () => ({
        url: "/wallet/transactions",
        method: "GET",
      }),
    }),
  }),
});

export const {
     useMyWalletQuery,
     useTransactionQuery,
     } = walletApi;

