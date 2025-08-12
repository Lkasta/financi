import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
  Plugin,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { ChartData } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

type GaugeChartProps = {
  value: number;
  min?: number;
  max?: number;
  label?: string;
  unit?: string;
  colors?: {
    primary: string;
    secondary: string;
    background: string;
  };
  options?: ChartOptions<"doughnut">;
  className?: string;
};

export default function GaugeChart({
  value,
  min = 0,
  max = 100,
  label = "Value",
  unit = "%",
  colors,
  options = {},
  className,
}: GaugeChartProps) {
  // Normalize value to percentage
  const normalizedValue = Math.min(Math.max(value, min), max);
  const percentage = ((normalizedValue - min) / (max - min)) * 100;
  
  const getGradientColor = (percent: number) => {
    const hue = (percent / 100) * 120;
    return `hsl(${hue}, 70%, 50%)`;
  };

  const gradientColor = getGradientColor(percentage);
  
  const primaryColor = colors?.primary || gradientColor;
  const backgroundColor = colors?.background || "#F3F4F6";
  
  const gaugeData: ChartData<"doughnut"> = {
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: [primaryColor, backgroundColor],
        borderWidth: 0,
        borderRadius: 10,
      },
    ],
  };

  const centerTextPlugin: Plugin<"doughnut"> = {
    id: "centerText",
    beforeDatasetsDraw(chart) {
      const { ctx } = chart;
      const centerX = chart.getDatasetMeta(0).data[0].x;
      const centerY = chart.getDatasetMeta(0).data[0].y;

      ctx.save();
      
      ctx.font = "bold 28px Inter, system-ui, sans-serif";
      ctx.fillStyle = "#1F2937";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(`${normalizedValue}${unit}`, centerX, centerY - 10);
      
      ctx.font = "12px Inter, system-ui, sans-serif";
      ctx.fillStyle = "#6B7280";
      ctx.fillText(label, centerX, centerY + 20);
      
      ctx.restore();
    },
  };

  const defaultOptions: ChartOptions<"doughnut"> = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "75%",
    circumference: 180,
    rotation: 270,
    animation: {
      animateRotate: true,
      duration: 1200,
      easing: "easeInOutQuart",
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    elements: {
      arc: {
        borderWidth: 0,
        borderRadius: 20,
      },
    },
    scales: {},
    onHover: () => {},
  };

  const mergedOptions = {
    ...defaultOptions,
    ...options,
    plugins: {
      ...defaultOptions.plugins,
      ...options.plugins,
      legend: {
        ...defaultOptions.plugins?.legend,
        ...options.plugins?.legend,
      },
      tooltip: {
        ...defaultOptions.plugins?.tooltip,
        ...options.plugins?.tooltip,
      },
    },
  };

  return (
    <div className={`w-full h-full ${className}`}>
      <Doughnut 
        data={gaugeData} 
        options={mergedOptions} 
        plugins={[centerTextPlugin]}
      />
    </div>
  );
}