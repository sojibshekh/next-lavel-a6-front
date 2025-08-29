
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useMyWalletQuery, type WalletResponse } from "@/redux/features/auth/user.api";


export function AccountDEtails() {
   const { data: walletResponse } = useMyWalletQuery<WalletResponse>();


  return (
    <div className="*:data-[slot=card]:from-primary/5 mt-3 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-2 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>My balance</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
           {walletResponse?.data?.data?.balance ?? "0"}
          </CardTitle>
          <CardAction>
            
          </CardAction>
        </CardHeader>
       
      </Card>
     
    </div>
  )
}
