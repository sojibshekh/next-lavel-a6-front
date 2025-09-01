import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link, useNavigate } from "react-router"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import Password from "@/components/ui/Password"
import { useRegisterUserMutation } from "@/redux/features/auth/auth.api"
import { toast } from "sonner"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"





 
const registerSchema = z.object({
  name: z.string().min(3,{
    error:"Name is too short"
  }).max(50),
  email:z.email(),
   userRole: z.string().min(1,{message:"Select Role is required"}),

    password: z.string()
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
    .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[^A-Za-z0-9]/, { message: "Password must contain at least one special character" }),
  confomPassword: z.string()
    .min(8, { message: "Confirm password must be at least 8 characters" }),
}).refine((data) => data.password === data.confomPassword, {
  message: "Passwords do not match",
  path: ["confomPassword"],
 

})


export function RegistrationForm({
  className,
  ...props
}: React.ComponentProps<"form">) {

    const [ register]= useRegisterUserMutation();

    const navigate = useNavigate();


    const form = useForm<z.infer<typeof registerSchema>>({
        resolver:zodResolver(registerSchema),
        defaultValues:{
            name:"",
            email:"",
            password:"",
            confomPassword:"",
            userRole: ""  
        }
    });
    const onSubmit = async (data:z.infer<typeof registerSchema>)=>{
        const userinfo = {
            name:data.name,
            email:data.email,
            password:data.password,
            role: data.userRole,
        }
        try {
          console.log("userinfo", userinfo);
            await register(userinfo).unwrap();
            toast.success("Registration successful! Please verify.");
            form.reset();
            navigate("/login");
        } catch (error) {
            console.log(error);
        }
    }
  return (
   <>
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Registration to your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">

         <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Name</FormLabel>
              <FormControl>
                <Input placeholder="John Deo" {...field} />
              </FormControl>
              <FormDescription className="sr-only">
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="john.deo@gmail.com" type="email" {...field} />
              </FormControl>
              <FormDescription className="sr-only">
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
               <Password {...field}></Password>
              </FormControl>
              <FormDescription className="sr-only">
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="confomPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confrom Password</FormLabel>
              <FormControl>
                <Password {...field}></Password>
              </FormControl>
              <FormDescription className="sr-only">
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />


         <FormField
            control={form.control}
            name="userRole"
            render={({ field }) => (
              <FormItem>
                <FormLabel>User Role</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select Role" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="agent">Agent</SelectItem>
                    <SelectItem value="user">User</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />


       
        <Button type="submit" className="w-full cursor-pointer">Registration</Button>

            </form>

        </Form>
       
       
       
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link to="/login" className="underline underline-offset-4">
          Login 
        </Link>
      </div>
    </div>
   </>
  )
}
