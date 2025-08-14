import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/chart";
import CustomTooltip from "./CustomStateTooltip";
import { StatesProps } from "../page";

export const description = "A stacked bar chart with a legend";

export const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

type Props = {
  states: StatesProps[];
};

export function MonthlyStates({ states }: Props) {
  return (
    <Card className="col-span-2 ">
      <CardHeader>
        <h5 className="text-secondary-foreground">Comparação por estado</h5>
        <CardDescription>Comparativo do desempenho financeiro dos estados com base no período.</CardDescription>
      </CardHeader>
      <CardContent className="w-full h-full pb-15">
        <ChartContainer className="w-full h-full" config={chartConfig}>
          <BarChart accessibilityLayer data={states}>
            <XAxis dataKey="state" hide />
            <YAxis
              domain={[0, (dataMax: number) => dataMax * 1.05]}
              tick={false}
              axisLine={false}
              width={0}
            />
            <ChartTooltip content={<CustomTooltip />} />
            <Bar
              dataKey="expenseTotal"
              name="Despesas"
              stackId="a"
              fill="var(--color-chart-5)"
              radius={[4, 4, 4, 4]}
            />
            <Bar
              dataKey="revenueTotal"
              name="Receitas"
              stackId="a"
              fill="var(--color-chart-1)"
              radius={[4, 4, 4, 4]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
