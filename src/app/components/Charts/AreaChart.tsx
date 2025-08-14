import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Area, AreaChart, Dot } from "recharts";

interface AreaChartData {
  [key: string]: string | number;
}

interface SimpleAreaChartProps {
  data: AreaChartData[];
  dataKey: string;
  color?: string;
  fillOpacity?: number;
  showDots?: boolean;
  height?: string;
  className?: string;
}

export function SimpleAreaChart({
  data,
  dataKey,
  color = "#009966",
  fillOpacity = 0.4,
  showDots = true,
  height = "h-64",
  className = "",
}: SimpleAreaChartProps) {
  const chartConfig = {
    [dataKey]: {
      label: dataKey,
      color: color,
    },
  } satisfies ChartConfig;

  return (
    <ChartContainer config={chartConfig} className={`${height} ${className}`}>
      <AreaChart
        data={data}
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
          dataKey={dataKey}
          type="natural"
          fill={color}
          fillOpacity={fillOpacity}
          stroke={color}
          dot={
            showDots
              ? ({ ...props }) => {
                  return <Dot r={3} cx={props.cx} cy={props.cy} fill={color} />;
                }
              : false
          }
        />
      </AreaChart>
    </ChartContainer>
  );
}
