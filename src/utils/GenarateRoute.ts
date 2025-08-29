import type { ISideBarItem } from "@/types";

export const genarateRoute = (sidebarItems:ISideBarItem[])=>{
 

    return sidebarItems.map((item)=>({
        path:item.url,
        Component:item.Component
    }));
};