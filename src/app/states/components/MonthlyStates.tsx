import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import { Area, AreaChart, Dot } from "recharts";

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function MonthlyStates() {
  return (
    <Card className="col-span-2 !mb-0 ">
      <CardHeader>
        <h5 className="text-secondary-foreground">Evolução Mensal</h5>
        <CardDescription>Descricaaaaaao</CardDescription>
      </CardHeader>
      <ChartContainer config={chartConfig} className="h-full scale-[101%]">
        <AreaChart
          data={chartData}
          margin={{
            left: 0,
            right: 0,
          }}
        >
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="line" />}
          />
          <Area
            dataKey="desktop"
            type="natural"
            fill="#009966"
            fillOpacity={0.4}
            stroke="#009966"
            dot={({ ...props }) => {
              return <Dot r={3} cx={props.cx} cy={props.cy} fill="#009966" />;
            }}
          />
        </AreaChart>
      </ChartContainer>
    </Card>
  );
}
