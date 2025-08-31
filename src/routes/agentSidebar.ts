
import AddMoney from "@/components/modules/Dashboard/Agent/AddMoney";
import Commission from "@/components/modules/Dashboard/Agent/Commission";
import AllTransaction from "@/components/modules/Dashboard/AllTransaction";
import { AccountDEtails } from "@/components/modules/Dashboard/User/AccountDetails";

import { IconDashboard, IconFolder, IconListDetails, IconUsers } from "@tabler/icons-react";



export const AgentSidebar = [
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