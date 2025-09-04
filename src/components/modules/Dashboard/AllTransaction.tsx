import { IconTrendingUp } from "@tabler/icons-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useTransactionQuery } from '@/redux/features/auth/wallte.api';
import type { ITransaction } from "@/types";

const AllTransaction = () => {
    const {data} = useTransactionQuery({});

    console.log(data)
  
    return (
        <div>

          

            {data?.data?.map((transaction:ITransaction) => (
              <div key={transaction?._id} className="*:data-[slot=card]:from-primary/5 mt-5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-2 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
                  <Card className="@container/card">
                    <CardHeader>
                      <CardDescription>Transection  Amount</CardDescription>
                      <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                       {transaction?.amount}
                      </CardTitle>
                      <CardAction>
                        <Badge variant="outline">
                          <IconTrendingUp />
                          {transaction?.status}
                        </Badge>
                      </CardAction>
                    </CardHeader>
                    <CardFooter className="flex-col items-start gap-1.5 text-sm">
                      <div className="line-clamp-1 flex gap-2 font-medium">
                        Transaction Type : {transaction.type} <IconTrendingUp className="size-4" />
                      </div>
                      <div className="text-muted-foreground">
                        Visitors for the last 6 months
                      </div>
                    </CardFooter>
                  </Card>
                </div>
         ))}
        </div>
    );
};

export default AllTransaction;