/* eslint-disable @typescript-eslint/no-explicit-any */

import TransactionsTable from "@/components/modules/Dashboard/AllTransaction";
import { AccountDEtails } from "@/components/modules/Dashboard/User/AccountDetails";
import SendMoney from "@/components/modules/Dashboard/User/SendMoney";
import WithDrawMoney from "@/components/modules/Dashboard/User/WithDrawMoney";
import type { ISideBarItem } from "@/types";

import {  IconDashboard, IconFolder, IconListDetails, IconUsers } from "@tabler/icons-react";


export const UserSidebar:ISideBarItem<any>[]  = [
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
      Component:TransactionsTable,
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
    },
   
  
  ];