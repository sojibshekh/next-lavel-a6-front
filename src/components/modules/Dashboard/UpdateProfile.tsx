import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"

import Password from "@/components/ui/Password"
import { useUpdateUserProfileMutation } from "@/redux/features/auth/user.api"
import { useEffect } from "react"
import { useGetUserInfoQuery } from "@/redux/features/auth/auth.api"


const updateProfileSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z
  .string()
  .min(10, "Phone must be at least 10 digits")
  .optional()
  .refine((val) => !val || /^\d+$/.test(val), "Phone must contain only digits"),

  password: z.string().optional(), // Optional, only if user wants to change password
})



const UpdateProfile = ( {
  className,
  ...props
}: React.ComponentProps<"form">) => {

    const [updateProfile] = useUpdateUserProfileMutation()
  // ধরুন এই API ইউজারের পুরানো প্রোফাইল ডাটা দেয়
   const {data: userData}= useGetUserInfoQuery(undefined);

  const form = useForm<z.infer<typeof updateProfileSchema>>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
    }
  })

  useEffect(() => {
  if (userData) {
    form.reset({
      name: userData?.data.name || "",
      email: userData?.data.email || "",
      phone: userData?.data.phone || "",
      password: "", // password খালি রাখবেন
    })
  }
}, [userData, form])

    const onSubmit = async (formData: z.infer<typeof updateProfileSchema>) => {
        console.log("Updating profile with data out try:", formData)
    try {
        console.log("Updating profile with data in :", formData)
     const res = await updateProfile(formData).unwrap();

      console.log(res)
      toast.success("Profile updated successfully!")
      form.reset()
    } catch (error) {
      console.error(error)
      toast.error(error.data?.message || "Update failed. Please try again.")
    }
  }

    return (
       <div className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Update Your Profile</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Update your personal information below
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 p-4">
          <div className="grid gap-6">

            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Deo" {...field} />
                  </FormControl>
                  <FormDescription className="sr-only">
                    Your full name
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
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
                    Your email address
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="+8801XXXXXXXXX" type="text" {...field} />
                  </FormControl>
                  <FormDescription className="sr-only">
                    Your phone number
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password (optional) */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New Password (optional)</FormLabel>
                  <FormControl>
                    <Password {...field} />
                  </FormControl>
                  <FormDescription className="sr-only">
                    Enter new password only if you want to change
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button type="submit" className="w-full cursor-pointer">
              Update Profile
            </Button>
          </div>
        </form>
      </Form>
    </div>
    );
};

export default UpdateProfile;