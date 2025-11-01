import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import {  useNavigate } from "react-router"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

import z from "zod"


import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { useSendMoneyMutation } from "@/redux/features/auth/wallte.api"





const addMoenySchema = z.object({

  recipientEmail: z.string().email(),
  amount: z.number().min(1, "Amount must be at least 1"), 
})

const AddMoney = ({
  className,
  ...props
}: React.ComponentProps<"form">) => {

        const [addMoney] = useSendMoneyMutation();

        
         const navigate = useNavigate();
            const form = useForm<z.infer<typeof addMoenySchema>>({
                resolver:zodResolver(addMoenySchema),
                defaultValues:{
                    recipientEmail:"",
                    amount:0,
                }
            });
            const onSubmit = async (data:z.infer<typeof addMoenySchema>)=>{
                const addmoneyInfo  = {
                    recipientEmail:data.recipientEmail,
                    amount:Number(data.amount),
                }

                console.log("add money",addmoneyInfo);
    
                try {
                    const res =  await addMoney(addmoneyInfo).unwrap();
                    console.log(res);
                    toast.success("add moeny successful! .");
                    form.reset();
    
                    navigate("/dashboard");
    
                } catch (error) {
                     const e = error as Error;
                    toast.error(e?.message || "add moeny successful!");
                }
            }
    return (
        <div className="flex justify-center items-center ">
           <div className={cn("flex flex-col gap-6 m-20 w-1/2 ", className)}  >
                 <div className="flex flex-col items-center gap-2 text-center">
                   <h1 className="text-2xl font-bold">Ad  Money  to user account</h1>
                   <p className="text-muted-foreground text-sm text-balance">
                     Enter user email below to Add Money  to user account
                   </p>
                 </div>
                  <Form {...form} >
                   <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5" {...props}>
                       <div className="grid gap-6">
                    <FormField
                             control={form.control}
                             name="recipientEmail"
                             render={({ field }) => (
                               <FormItem>
                                 <FormLabel>Email</FormLabel>
                                 <FormControl>
                                   <Input placeholder="john.deo@gmail.com" type="email" {...field} />
                                 </FormControl>
                              
                                 <FormMessage />
                               </FormItem>
                             )}
                           />
                            <FormField
                             control={form.control}
                             name="amount"
                             render={({ field }) => (
                               <FormItem>
                                 <FormLabel>Amount</FormLabel>
                                 <FormControl>
                                  <Input
                                    placeholder="50"
                                    type="number"
                                    {...field}
                                    onChange={(e) => field.onChange(Number(e.target.value))}
                                    value={field.value}
                                />
                                 </FormControl>
                              
                                 <FormMessage />
                               </FormItem>
                             )}
                           />
                   <Button type="submit" className="w-full">
                     Send Moeny
                   </Button>
                 
                 </div>
                   </form>
                   </Form>
                
               </div>
        </div>
    );
};

export default AddMoney;