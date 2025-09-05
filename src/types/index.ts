/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Icon } from "@tabler/icons-react";

import type { ComponentType } from "react";

export interface ISideBarItem<TProps extends object = object> {
  title: string;
  url: string;
  icon: Icon | React.FC<any>;  // ✅ প্রতিটা Tabler icon এর জন্য সঠিক টাইপ
  Component: ComponentType<TProps>; // ✅ Sidebar component এর জন্য সঠিক টাইপ
}


export type TRole = "admin" | "user" | "agent";


 export interface ITransaction {
  _id: string;
  amount: number;
  date: string;
  status: string;
    type: string;
  
}



