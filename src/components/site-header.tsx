import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { authApi, useLogoutMutation } from "@/redux/features/auth/auth.api";
import { useAppDispatch } from "@/redux/hook";
import { useNavigate } from "react-router";

export function SiteHeader() {

    const [logout]= useLogoutMutation();
      const dispatch = useAppDispatch();
      const navigate = useNavigate();
    const handleLogout = async  () => {
       await  logout(undefined);
        dispatch(authApi.util.resetApiState());
          navigate("/");
    }
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
          <Button onClick={handleLogout}  size="sm">
            
              Logout
          </Button>
        </div>
      </div>
    </header>
  )
}
