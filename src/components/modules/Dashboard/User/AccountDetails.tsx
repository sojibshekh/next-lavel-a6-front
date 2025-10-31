

import { Button } from "@/components/ui/button";
import { useMyWalletQuery, useTransactionQuery, type UserInfo,  } from "@/redux/features/auth/wallte.api";
import TransactionsTable from "../AllTransaction";
import { useGetUserInfoQuery } from "@/redux/features/auth/auth.api";
import { useNavigate } from "react-router";
import { useAllUsersQuery } from "@/redux/features/auth/user.api";


type UsersResponse = {
  data: UserInfo[];
};

export function AccountDEtails() {


const navigate = useNavigate();
  const { data: walletResponse, isLoading, error } = useMyWalletQuery(undefined, {
  refetchOnMountOrArgChange: true,
});

const {data: userData}= useGetUserInfoQuery(undefined);
 const { data: users} = useAllUsersQuery() as { data: UsersResponse | undefined };
 


const totalUsers = users?.data?.length ?? 0;


const userId = userData?.data?._id;
const userRole = userData?.data?.role;


console.log("okay", userId, userRole);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error loading wallet data.</div>;
  }

   // Safe access
const balance = walletResponse?.data?.data?.balance ?? "0";


 const { data: transactionsData } = useTransactionQuery({
    userId: userRole === "user" ? userId : undefined,
    agentId: userRole === "agent" ? userId : undefined,
  });


  const totalTransactions = transactionsData?.data?.length ?? 0;


 

  return (

     <div className="w-full px-4 lg:px-6 py-6">
      {/* Overview Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Wallet Balance */}
        <div className="p-6 bg-gradient-to-br from-orange-50 to-white rounded-2xl shadow border">
          {
            userRole === "admin" ? 
            <div>
              <h3 className="text-gray-500 text-sm">Total User</h3>
          <p className="text-3xl font-bold text-orange-600 mt-2">{totalUsers}</p>
            </div>
             :<div>
              <h3 className="text-gray-500 text-sm">My Balance</h3>
          <p className="text-3xl font-bold text-orange-600 mt-2">${balance}</p>
            </div>
          }
          
        </div>

        {/* Total Transactions */}
        <div className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow border">
          <h3 className="text-gray-500 text-sm">Total Transactions</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">{totalTransactions}</p>
        </div>

        {/* Quick Actions */}
        <div className="p-6 bg-gradient-to-br from-green-50 to-white rounded-2xl shadow border">
          <h3 className="text-gray-500 text-sm mb-3">Quick Actions</h3>
          {
            userRole === "user" ? 
            <div>
              <div className="flex flex-wrap gap-2">
            <Button className="bg-green-500 hover:bg-green-600 text-white w-full sm:w-auto">
              Deposit
            </Button>
            <Button onClick={() => navigate("Withdraw-money")} className="bg-yellow-500 hover:bg-yellow-600 text-white w-full sm:w-auto">
              Withdraw
            </Button>
            <Button onClick={() => navigate("send-money")}  className="bg-blue-500 hover:bg-blue-600 text-white w-full sm:w-auto">
              Send Money
            </Button>
          </div>
            </div>: userRole === "agent" ?
            <div className="flex flex-wrap gap-2">
            <Button onClick={() => navigate("cash-in")}  className="bg-green-500 hover:bg-green-600 text-white w-full sm:w-auto">
              Cash in
            </Button>
            <Button onClick={() => navigate("Commission")} className="bg-yellow-500 hover:bg-yellow-600 text-white w-full sm:w-auto">
              Commission
            </Button>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white w-full sm:w-auto">
              Send
            </Button>
          </div> :userRole === "admin" ?
          <div className="flex flex-wrap gap-2">
            <Button onClick={() => navigate("users")} className="bg-green-500 hover:bg-green-600 text-white w-full sm:w-auto">
              All User
            </Button>
            <Button onClick={() => navigate("transaction/all")} className="bg-yellow-500 hover:bg-yellow-600 text-white w-full sm:w-auto">
              View Transection
            </Button>
          
          </div> : <div>No Actions Available</div>

          }
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-2xl shadow p-6 mt-6">
        <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
          <TransactionsTable userId={userId} role={userRole} />

      
      </div>
    </div>

  )
}    
