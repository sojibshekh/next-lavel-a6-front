import type { Icon } from "@tabler/icons-react";


export interface ISideBarItem{
    title:string;
    url:string;
    icon?: Icon;
    Component:React.ComponentType<unknown>;
}

export type TRole = "admin" | "user" | "agent";


 export interface ITransaction {
  _id: string;
  amount: number;
  date: string;
  status: string;
    type: string;
  
}