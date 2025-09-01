import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { Link, useNavigate } from "react-router"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

import z from "zod"
import { useLoginMutation } from "@/redux/features/auth/auth.api"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import Password from "@/components/ui/Password"



const loginSchema = z.object({

  email:z.email(),
  password: z.string()
})

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {

     const [ login]= useLoginMutation();
    
     const navigate = useNavigate();
        const form = useForm<z.infer<typeof loginSchema>>({
            resolver:zodResolver(loginSchema),
            defaultValues:{
                email:"",
                password:"",
            }
        });
        const onSubmit = async (data:z.infer<typeof loginSchema>)=>{
            const logininfo = {
                email:data.email,
                password:data.password
            }

            try {
                const res =  await login(logininfo).unwrap();
                console.log(res);
                toast.success("login successful! .");
                form.reset();

                navigate("/dashboard");

            } catch (error) {
                console.log(error);
                toast.error(error.data?.message || "Login failed. Please try again.");
            }
        }


  return (
    <div className={cn("flex flex-col gap-6", className)} {...props} >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your email below to login to your account
        </p>
      </div>
       <Form {...form} >
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <div className="grid gap-6">
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
        <Button type="submit" className="w-full cursor-pointer" >
          Login
        </Button>
      
      </div>
        </form>
        </Form>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link to="/registration" className="underline underline-offset-4">
          Sign up
        </Link>
      </div>
    </div>
  )
}
