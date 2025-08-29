import AllTransaction from "@/components/modules/Dashboard/AllTransaction";
import UserAccount from "@/components/modules/Dashboard/UserAccount";
import { IconChartBar, IconDashboard, IconFolder, IconListDetails, IconUsers } from "@tabler/icons-react";


export const UserSidebar = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: IconDashboard,
      Component:UserAccount
    },
    {
      title: "All Transactions",
      url: "/dashboard/transaction",
      icon: IconListDetails,
      Component:AllTransaction,
    },
    {
      title: "Cash in",
      url: "/dashboard/cashin",
      icon: IconChartBar,
      Component:AllTransaction,
    },
    {
      title: "Send Money",
      url: "/dashboard/sendmoney",
      icon: IconFolder,
      Component:AllTransaction,
    },
    {
      title: "Withdraw",
      url: "/dashboard/Withdraw",
      icon: IconUsers,
      Component:AllTransaction,
    },
  ];