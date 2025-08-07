import {
  Chart as ChartJS,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import { ChartData } from "chart.js";

ChartJS.register(ArcElement, Title, Tooltip, Legend);

type ChartPieProps = {
  data: ChartData<"pie">;
  options?: ChartOptions<"pie">;
  className?: string;
};

export default function PieChart({
  data,
  options = {},
  className,
}: ChartPieProps) {
  const defaultOptions: ChartOptions<"pie"> = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 800,
      easing: "easeInOutQuart",
    },
    plugins: {
      legend: {
        position: "left" as const,
        labels: {
          padding: 20,
          usePointStyle: true,
          font: {
            size: 12,
            family: "Inter, system-ui, sans-serif",
          },
          color: "#374151",
          boxWidth: 12,
          boxHeight: 12,
        },
      },
      tooltip: {
        backgroundColor: "rgba(17, 24, 39, 0.95)",
        titleColor: "#fff",
        bodyColor: "#fff",
        borderColor: "#fff",
        borderWidth: 0,
        cornerRadius: 8,
        padding: 12,
        displayColors: true,
        titleFont: {
          size: 13,
          weight: "bold",
        },
        bodyFont: {
          size: 12,
        },
        callbacks: {
          label: function (context) {
            const label = context.label || "";
            const value = context.parsed;
            const dataset = context.dataset;
            const total = dataset.data.reduce(
              (sum: number, val: number) => sum + val,
              0
            );
            const percentage = ((value / total) * 100).toFixed(1);
            return `${label}: ${value} (${percentage}%)`;
          },
        },
      },
    },
    elements: {
      arc: {
        borderWidth: 2,
        borderColor: "#fff",
        hoverBorderWidth: 3,
      },
    },
    cutout: 0,
    radius: "90%",
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
        callbacks: {
          ...defaultOptions.plugins?.tooltip?.callbacks,
          ...options.plugins?.tooltip?.callbacks,
        },
      },
    },
    elements: {
      ...defaultOptions.elements,
      ...options.elements,
      arc: {
        ...defaultOptions.elements?.arc,
        ...options.elements?.arc,
      },
    },
  };

  return (
    <div className={`w-full h-full ${className}`}>
      <Pie data={data} options={mergedOptions} />
    </div>
  );
}
