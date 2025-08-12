import ChartBar from "@/app/components/Charts/BarChart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { formatCurrency, formatAbbreviatedNumber } from "@/lib/utils";
import { TooltipItem } from "chart.js";

export type FinancialStatesProps = {
  state: string;
  revenue: number;
  expense: number;
};

type Props = {
  states: FinancialStatesProps[];
};

function getTop5States(states: FinancialStatesProps[]) {
  return [...states].sort((a, b) => b.revenue - a.revenue).slice(0, 5);
}

export function FinancialStates({ states }: Props) {
  const sortedStates = getTop5States(states);

  const data = {
    labels: sortedStates.map((item) => item.state),
    datasets: [
      {
        label: "Receita",
        data: sortedStates.map((item) => item.revenue),
        backgroundColor: "oklch(69.6% 0.17 162.48)",
        borderRadius: 6,
      },
      {
        label: "Despesa",
        data: sortedStates.map((item) => item.expense),
        backgroundColor: "oklch(50.6% 0.17 162.48)",
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
      },
      title: {
        display: false,
        text: "Gráfico de Estados Financeiros",
      },
      tooltip: {
        callbacks: {
          title: function (context: TooltipItem<"bar">[]) {
            const index = context[0].dataIndex;
            return sortedStates[index].state;
          },
          label: function (context: TooltipItem<"bar">) {
            const label = context.dataset.label || "";
            return `${label}: ${formatCurrency(context.parsed.y)}`;
          },
        },
      },
    },
    scales: {
      x: {
        stacked: false,
      },
      y: {
        stacked: false,
        ticks: {
          callback: function (
            tickValue: string | number
          ): string | number | null {
            if (typeof tickValue === "number") {
              return formatAbbreviatedNumber(tickValue);
            }
            return tickValue;
          },
        },
      },
    },
  };

  return (
    <Card className="col-span-3">
      <CardHeader>
        <h5 className="text-secondary-foreground">Estados Líderes</h5>
        <CardDescription>
          Ranking dos 5 estados com maiores valores de entrada e saída.
        </CardDescription>
      </CardHeader>
      <CardContent className="h-[400px] -mt-5 -mb-3 pt-0">
        <ChartBar options={options} data={data} />
      </CardContent>
    </Card>
  );
}
