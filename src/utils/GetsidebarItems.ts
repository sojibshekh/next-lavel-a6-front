import { role } from "@/conctants/role";
import { AdminSidebar } from "@/routes/AdminSidebar";
import { UserSidebar } from "@/routes/UserSidebar";
import type { TRole } from "@/types";


export const GetsidebarItems=(userRole:TRole)=>{
   switch(userRole){
    case role.admin:
        return [...AdminSidebar];
    case role.agent:
        return [...AdminSidebar];
    case role.user:
        return [...UserSidebar];
 
    default:
       
        return [];
   }
}