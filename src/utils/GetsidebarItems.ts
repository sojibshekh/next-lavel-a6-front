import { role } from "@/conctants/role";
import { AdminSidebar } from "@/routes/AdminSidebar";
import { AgentSidebar } from "@/routes/agentSidebar";
import { UserSidebar } from "@/routes/UserSidebar";
import type { TRole } from "@/types";


export const GetsidebarItems=(userRole:TRole)=>{
   switch(userRole){
    case role.admin:
        return [...AdminSidebar];
    case role.agent:
        return [...AgentSidebar];
    case role.user:
        return [...UserSidebar];
 
    default:
       
        return [];
   }
}