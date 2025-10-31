import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import {  useSendMoneyMutation } from '@/redux/features/auth/wallte.api';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';
import z from 'zod';


const sendMoneySchema = z.object({

  recipientEmail:z.string(),
  amount: z.number().positive() 
})

const SendMoney = ({
  className,
  ...props
}: React.ComponentProps<"form">) => {

     const [SendMoney]= useSendMoneyMutation();
        const navigate = useNavigate();
        const form = useForm<z.infer<typeof sendMoneySchema>>({
            resolver:zodResolver(sendMoneySchema),
            defaultValues:{
                recipientEmail:"",
                amount:0,
            }
        });
        const onSubmit = async (data:z.infer<typeof sendMoneySchema>)=>{
            const sendMoneyInfo  = {
                recipientEmail:data.recipientEmail,
                amount:Number(data.amount),
            }

            try {
                const res =  await SendMoney(sendMoneyInfo).unwrap();
                console.log(res);
                toast.success("send moeny successful! .");
                form.reset();

                navigate("/dashboard");

            } catch (error) {
              
                    const e = error as Error;
                toast.error(e?.message || "send  moeny successful!");
            }
        }


    return (
         <div className="flex justify-center items-center ">
                <div className={cn("flex flex-col gap-6 m-20 w-1/2 ", className)}  >
                        <div className="flex flex-col items-center gap-2 text-center">
                        <h1 className="text-2xl font-bold">Send Money  to Other account</h1>
                        <p className="text-muted-foreground text-sm text-balance">
                            Enter your email below to Send Money  to Other account
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
                                        <FormLabel>Recive Email</FormLabel>
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

export default SendMoney;