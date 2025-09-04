import { baseApi } from "@/redux/baseApi";

// src/types/auth.ts
export interface UserInfo {
  id: string;
  name: string;
  email: string;
  role: string;
  _id: string;
  
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
     commission: builder.query({
      query: () => ({
        url: "/wallet/commission-history",
        method: "GET",
      }),
    }),

addMoney: builder.mutation({
      query: (payload) => ({
        url: "/wallet/cash-in",
        method: "POST",
        data: payload,
      }),
    }),

    cashOutMoney: builder.mutation({
      query: (payload) => ({
        url: "/wallet/cash-out",
        method: "POST",
        data: payload,
      }),
    }),

    sendMoney: builder.mutation({
      query: (payload) => ({
        url: "/wallet/send-money",
        method: "POST",
        data: payload,
      }),
    }),
    


  }),
});

export const {
     useMyWalletQuery,
     useTransactionQuery,
     useCommissionQuery,
      useAddMoneyMutation,
      useCashOutMoneyMutation,
      useSendMoneyMutation,

     } = walletApi;

