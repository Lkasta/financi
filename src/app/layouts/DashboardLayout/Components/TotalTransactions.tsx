import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { formatNumber } from "@/lib/utils";
import { ArrowLeftRight } from "lucide-react";

export function TotalTransactions({ totalClients }: { totalClients: number }) {
  return (
    <Card className="w-1/2 h-min">
      <CardHeader>
        <h5 className="text-secondary-foreground">Total de Transações</h5>
      </CardHeader>
      <CardContent className="flex flex-col mt-auto gap-2">
        <div className="flex gap-4">
          <div className="rounded-full bg-emerald-500 p-2.5 w-min">
            <div className="text-white">
              <ArrowLeftRight />
            </div>
          </div>
          <h1 className="text-3xl md:text-2xl lg:text-4xl font-bold text-emerald-500">
            {formatNumber(totalClients)}
          </h1>
        </div>
      </CardContent>
    </Card>
  );
}
