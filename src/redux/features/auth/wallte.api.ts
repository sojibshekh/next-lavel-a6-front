import { baseApi } from "@/redux/baseApi";

// src/types/auth.ts
export interface UserInfo {
  id: string;
  name: string;
  email: string;
  role: string;
  _id: string;
   isDeleted?: string;
   isActive?: string
   isVerified?: boolean;  
  createdAt?: string;
  updatedAt?: string;
  data?: [];
  phone?: string;
  
}


interface WalletInnerData {
  _id: string;
  balance: string | number;
  currency: string;
  user: string;
}

interface WalletData {
  success: boolean;
  message: string;
  data: WalletInnerData;
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
      providesTags: ["User"],
   
    }),
    transaction: builder.query({
      query: () => ({
        url: "/wallet/transactions",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
     commission: builder.query({
      query: () => ({
        url: "/wallet/commission-history",
        method: "GET",
      }),
      providesTags: ["User"],
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

