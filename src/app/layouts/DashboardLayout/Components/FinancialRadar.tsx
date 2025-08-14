import GaugeChart from "@/app/components/Charts/GaugeChart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";

type Props = {
  revenue: number;
  expense: number;
};

export function FinancialRadar({ revenue, expense }: Props) {
  const maxValue = revenue + expense;
  const value = revenue;

  return (
    <Card className="col-span-3">
      <CardHeader>
        <h5 className="text-secondary-foreground">Tendência Financeira</h5>
        <CardDescription>
          Análise comparativa de <strong>receitas</strong> vs
          <strong> despesas</strong>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col my-auto items-center justify-center">
        <GaugeChart value={value} max={maxValue} />
        <div className="flex gap-6 mt-4">
          <span className="text-green-500 font-semibold">
            {formatCurrency(revenue)}
          </span>
          <span className="text-red-500 font-semibold">
            {formatCurrency(expense)}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
