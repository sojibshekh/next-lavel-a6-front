
import AllTransaction from "@/components/modules/Dashboard/AllTransaction";
import { AccountDEtails } from "@/components/modules/Dashboard/User/AccountDetails";
import SendMoney from "@/components/modules/Dashboard/User/SendMoney";
import WithDrawMoney from "@/components/modules/Dashboard/User/WithDrawMoney";

import {  IconDashboard, IconFolder, IconListDetails, IconUsers } from "@tabler/icons-react";


export const UserSidebar = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: IconDashboard,
      Component:AccountDEtails
    },
    {
      title: "All Transactions",
      url: "/dashboard/transaction",
      icon: IconListDetails,
      Component:AllTransaction,
    },
    {
        title: "Withdraw  money",
        url: "/dashboard/Withdraw-money",
        icon: IconUsers,
        Component:WithDrawMoney,
    },
    {
        title: "Send  money",
        url: "/dashboard/send-money",
        icon: IconFolder,
        Component:SendMoney,
    }
  
  ];