import LineChart from "@/app/components/Charts/LineChart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import { TooltipItem } from "chart.js";

type MonthlyBalance = {
  month: string; // "01", "02" ou nome abreviado
  value: number; // saldo do mês (receita - despesa)
};

type Props = {
  monthlyBalances: MonthlyBalance[];
};

export function MonthlyBalance({ monthlyBalances }: Props) {
  const sortedMonths = [...monthlyBalances].sort(
    (a, b) => Number(a.month) - Number(b.month)
  );

  const data = {
    labels: sortedMonths.map((item) => item.month),
    datasets: [
      {
        label: "Saldo",
        data: sortedMonths.map((item) => Math.max(item.value, 0)),
        borderColor: "oklch(69.6% 0.17 162.48)",
        backgroundColor: "oklch(69.6% 0.17 162.48 / 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          title: function (context: TooltipItem<"line">[]) {
            const index = context[0].dataIndex;
            return `Mês: ${sortedMonths[index].month}`;
          },
          label: function (context: TooltipItem<"line">) {
            return `Saldo: ${formatCurrency(context.parsed.y)}`;
          },
        },
      },
    },
  };

  return (
    <Card className="col-span-3 mb-0 pb-0 h-full">
      <CardHeader>
        <h5 className="text-secondary-foreground">Saldo Mensal</h5>
        <CardDescription>
          Evolução do saldo (Receita - Despesa) por mês.
        </CardDescription>
      </CardHeader>
      <LineChart options={options} data={data} />
    </Card>
  );
}
