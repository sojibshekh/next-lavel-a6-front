
import AllTransaction from "@/components/modules/Dashboard/AllTransaction";
import { AccountDEtails } from "@/components/modules/Dashboard/User/AccountDetails";

import { IconChartBar, IconDashboard, IconFolder, IconListDetails, IconUsers } from "@tabler/icons-react";


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
  
  ];