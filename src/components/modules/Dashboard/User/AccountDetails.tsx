
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useMyWalletQuery,  } from "@/redux/features/auth/wallte.api";


export function AccountDEtails() {
  const { data: walletResponse, isLoading, error } = useMyWalletQuery(undefined, {
  refetchOnMountOrArgChange: true,
});

console.log(walletResponse);



  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error loading wallet data.</div>;
  }

   // Safe access
const balance = walletResponse?.data?.data?.balance ?? "0";
 // number type ভালো



  return (
    <div className="*:data-[slot=card]:from-primary/5 mt-3 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-2 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>My balance</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
           { balance }
          </CardTitle>
          <CardAction>
            
          </CardAction>
        </CardHeader>
       
      </Card>
     
    </div>
  )
}
