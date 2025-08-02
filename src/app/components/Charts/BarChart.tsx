import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { ChartData } from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type ChartBarProps = {
  data: ChartData<"bar">;
  options?: ChartOptions<"bar">;
  className?: string;
};

export default function BarChart({
  data,
  options = {},
  className,
}: ChartBarProps) {
  const defaultOptions: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 800,
      easing: "easeInOutQuart",
    },
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          padding: 20,
          usePointStyle: true,
          font: {
            size: 12,
            family: "Inter, system-ui, sans-serif",
          },
          color: "#374151",
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
        displayColors: false,
        titleFont: {
          size: 13,
          weight: "bold",
        },
        bodyFont: {
          size: 12,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#6B7280",
          font: {
            size: 11,
            family: "Inter, system-ui, sans-serif",
          },
          padding: 8,
        },
        border: {
          display: false,
        },
      },
      y: {
        grid: {
          color: "transparent",
        },
        ticks: {
          color: "#6B7280",
          align: "start",
          font: {
            size: 11,
            family: "Inter, system-ui, sans-serif",
          },
          padding: 8,
        },
        border: {
          display: false,
        },
        beginAtZero: true,
      },
    },
    elements: {
      bar: {
        borderRadius: 6,
        borderSkipped: false,
      },
    },
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
    scales: {
      ...defaultOptions.scales,
      ...options.scales,
      x: {
        ...defaultOptions.scales?.x,
        ...options.scales?.x,
      },
      y: {
        ...defaultOptions.scales?.y,
        ...options.scales?.y,
      },
    },
  };

  return (
    <div className={`w-full h-full ${className}`}>
      <Bar data={data} options={mergedOptions} />
    </div>
  );
}
