import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { authApi, useGetUserInfoQuery, useLogoutMutation } from "@/redux/features/auth/auth.api";
import { useAppDispatch } from "@/redux/hook";

import { Link, useNavigate } from "react-router";

export function SiteHeader() {

 const { data, isLoading, } = useGetUserInfoQuery();
  

// Only cast when data exists
   console.log("this is nav bar data ",data)
   console.log("this is nav bar loading ",)
 

    const [logout]= useLogoutMutation();
      const dispatch = useAppDispatch();
      const navigate = useNavigate();
    const handleLogout = async  () => {
       await  logout(undefined);
        dispatch(authApi.util.resetApiState());
          navigate("/");
    }

       if (isLoading) return <div>Loading...</div>;
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base font-medium">See All Details </h1>
        <div className="ml-auto flex items-center gap-2">
           {data?.data?.email &&(<Button onClick={handleLogout} className="cursor-pointer"> Log out </Button>)}
                       {!data?.data?.email && (
                        <>
                        <Button asChild variant="ghost" size="sm" className="text-sm cursor-pointer">
                      <Link to="/login">Login In</Link>
                    </Button>
               
                        </>
                    )}
        </div>
      </div>
    </header>
  )
}
