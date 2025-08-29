import * as React from "react"
import {

  IconInnerShadowTop,
 
} from "@tabler/icons-react"


import { NavMain } from "@/components/nav-main"

import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Link } from "react-router"

import { GetsidebarItems } from "@/utils/GetsidebarItems"
import { useGetUserInfoQuery } from "@/redux/features/auth/auth.api"



export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  const {data: userData}= useGetUserInfoQuery(undefined);
console.log(userData)
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: GetsidebarItems(userData?.data?.role),
 
}


  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link to="/dashboard">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">Digital Wallte.</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
       
     
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
