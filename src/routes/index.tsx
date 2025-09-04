import App from "@/App";


import About from "@/pages/About";
import Dashboard from "@/pages/Dashboard";

import LoginPage from "@/pages/Login";
import RegistraionPage from "@/pages/Registation";
import verify from "@/pages/verify";
import { genarateRoute } from "@/utils/GenarateRoute";


import { createBrowserRouter } from "react-router";
import { AdminSidebar } from "./AdminSidebar";

import { AgentSidebar } from "./agentSidebar";
import { UserSidebar } from "./UserSidebar";
import UpdateProfile from "@/components/modules/Dashboard/UpdateProfile";



 export const router = createBrowserRouter([
  {
    Component:App,
    path: "/",

    children:[
      {
        Component:About,
        path:"about"
      }
    ]
  },
  {
    Component:LoginPage,
    path:"/login"
  },
  {
    Component:RegistraionPage,
    path:"/registration"
  },
   {
    Component:verify,
    path:"/verify"
  },
  {
    Component:Dashboard,  
    path:"/dashboard",
    children:[
      ...genarateRoute(AdminSidebar),
      
    ]
  },
  {
    Component:Dashboard,  
    path:"/dashboard",
    children:[
      ...genarateRoute(UserSidebar),
    ]
  },
   {
    Component:Dashboard,  
    path:"/dashboard",
    children:[
      ...genarateRoute(AgentSidebar),
      
    ]
  },
  {
    Component:Dashboard,
    path:"/dashboard",
    children:[
      {
        Component:UpdateProfile,
        path:"update-profile"
      }
    ]
  }

  
]);