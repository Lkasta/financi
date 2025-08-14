import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { StatesProps } from "../../page";
import { StateRankingItem } from "./StateRankingItem";
import { handlePercentage } from "@/lib/utils";

type Props = {
  totalBalance: number;
  states: StatesProps[];
};

export function StatesRanking({ states, totalBalance }: Props) {
  const sortedStates = states.sort((a, b) => {
    const balanceA = a.revenueTotal - a.expenseTotal;
    const balanceB = b.revenueTotal - b.expenseTotal;
    return balanceB - balanceA;
  });

  return (
    <Card className="col-span-1 !pb-0 !mb-0">
      <CardHeader>
        <h5 className="text-secondary-foreground">Desempenho por Estado</h5>
        <CardDescription>
          Participação de cada estado no saldo total.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 !pb-6 !mb-0 overflow-y-scroll">
        {sortedStates.map((item, i) => {
          const balance = item.revenueTotal - item.expenseTotal;
          const percentage = handlePercentage(balance, totalBalance, 0);

          return (
            <StateRankingItem
              key={`${item.state}-${i}`}
              balance={balance}
              percentage={percentage}
              state={item.state}
            />
          );
        })}
      </CardContent>
    </Card>
  );
}
