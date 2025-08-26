import Logo from "@/assets/icons/Logo"
import { RegistrationForm } from "@/components/modules/authentication/RegistrationFrom"



export default function RegistraionPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
             <Logo></Logo>
            </div>
            Digital Wallte.
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
           <RegistrationForm></RegistrationForm>
          </div>
        </div>
        
      </div>
      

        <div className="bg-muted relative hidden lg:block">
        <img
          src="/src/assets/image/image2.jpg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
      
    </div>
  )
}
