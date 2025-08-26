import App from "@/App";

import About from "@/pages/About";
import LoginPage from "@/pages/Login";
import RegistraionPage from "@/pages/Registation";

import { createBrowserRouter } from "react-router";



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
  }
  
]);