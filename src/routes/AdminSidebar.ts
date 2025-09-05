/* eslint-disable @typescript-eslint/no-explicit-any */
import AllUser from "@/components/modules/Dashboard/Admin/AllUser";
import TransactionsTable from "@/components/modules/Dashboard/AllTransaction";
import { AccountDEtails } from "@/components/modules/Dashboard/User/AccountDetails";

import type { ISideBarItem } from "@/types";
import { IconChartBar, IconDashboard,  IconListDetails,  } from "@tabler/icons-react";


export const AdminSidebar:ISideBarItem<any>[] = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: IconDashboard,
      Component:AccountDEtails
    },
    {
      title: "All Transactions",
      url: "/dashboard/transaction/all",
      icon: IconListDetails,
      Component: TransactionsTable ,
    },
    {
      title: "All users",
      url: "/dashboard/users",
      icon: IconChartBar,
      Component:AllUser,
    },
   
  ];