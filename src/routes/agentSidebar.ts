/* eslint-disable @typescript-eslint/no-explicit-any */

import AddMoney from "@/components/modules/Dashboard/Agent/AddMoney";
import Commission from "@/components/modules/Dashboard/Agent/Commission";
import TransactionsTable from "@/components/modules/Dashboard/AllTransaction";

import { AccountDEtails } from "@/components/modules/Dashboard/User/AccountDetails";
import type { ISideBarItem } from "@/types";

import { IconDashboard, IconFolder, IconListDetails, IconUsers } from "@tabler/icons-react";



export const AgentSidebar: ISideBarItem<any>[]  = [
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
        title: "Cash in",
        url: "/dashboard/cash-in",
        icon: IconUsers,
        Component:AddMoney,
    },
    {
        title: "My  Commission ",
        url: "/dashboard/Commission",
        icon: IconFolder,
        Component:Commission,
    }
  
  ];