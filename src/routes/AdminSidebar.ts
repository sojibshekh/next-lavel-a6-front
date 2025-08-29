import AllTransaction from "@/components/modules/Dashboard/AllTransaction";
import { AccountDEtails } from "@/components/modules/Dashboard/User/AccountDetails";

import type { ISideBarItem } from "@/types";
import { IconChartBar, IconDashboard, IconFolder, IconListDetails, IconUsers } from "@tabler/icons-react";


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
      title: "Analytics",
      url: "/dashboard/analytics",
      icon: IconChartBar,
      Component:AllTransaction,
    },
    {
      title: "Projects",
      url: "/dashboard/projects",
      icon: IconFolder,
      Component:AllTransaction,
    },
    {
      title: "All Users",
      url: "/dashboard/users",
      icon: IconUsers,
      Component:AllTransaction,
    },
  ];