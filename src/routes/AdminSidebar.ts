import AllUser from "@/components/modules/Dashboard/Admin/AllUser";
import AllTransaction from "@/components/modules/Dashboard/AllTransaction";
import { AccountDEtails } from "@/components/modules/Dashboard/User/AccountDetails";

import type { ISideBarItem } from "@/types";
import { IconChartBar, IconDashboard,  IconListDetails,  } from "@tabler/icons-react";


export const AdminSidebar:ISideBarItem[] = [
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
      Component:AllTransaction,
    },
    {
      title: "All users",
      url: "/dashboard/users",
      icon: IconChartBar,
      Component:AllUser,
    },
   
  ];