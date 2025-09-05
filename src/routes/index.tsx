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
import EditUser from "@/components/modules/Dashboard/Admin/EditUser";
import Home from "@/pages/Home";
import Features from "@/pages/Features";
import Faq from "@/pages/Faq";
import Contact from "@/pages/Contact";



 export const router = createBrowserRouter([
  {
    Component:App,
    path: "/",

    children:[
      {
        Component:Home,
        path:"/"
      }
      ,{
        Component:About,
        path:"about"
      },
      {
        Component:Features,
        path:"/features"
      },
      {
        Component:Faq,
        path:"/faq"
      },
      {
        Component:Contact,
        path:"/contact"
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
  Component: Dashboard,
  path: "/dashboard",
  children: [
    ...genarateRoute(AdminSidebar),
    ...genarateRoute(UserSidebar),
    ...genarateRoute(AgentSidebar),
    {
      Component: UpdateProfile,
      path: "update-profile"
    },
    {
      Component: EditUser,
      path: "users/:id/edit"
    }
  ]
}


  
]);