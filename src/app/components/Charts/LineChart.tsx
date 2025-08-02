import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { ChartData } from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

type ChartLineProps = {
  data: ChartData<"line">;
  options?: ChartOptions<"line">;
  className?: string;
};

export default function LineChart({
  data,
  options = {},
  className,
}: ChartLineProps) {
  const defaultOptions: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 1200,
      easing: "easeInOutQuart",
    },
    interaction: {
      intersect: false,
      mode: "index" as const,
    },
    plugins: {
      legend: {
        display: false,
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
        caretPadding: 10,
      },
    },
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        offset: false,
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        beginAtZero: true,
        grace: 0,
      },
    },
    elements: {
      line: {
        borderWidth: 3,
        tension: 0.4,
        borderCapStyle: "round" as const,
        borderJoinStyle: "round" as const,
      },
      point: {
        radius: 0,
        hoverRadius: 6,
        hitRadius: 10,
        borderWidth: 2,
        backgroundColor: "#fff",
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
    elements: {
      ...defaultOptions.elements,
      ...options.elements,
      line: {
        ...defaultOptions.elements?.line,
        ...options.elements?.line,
      },
      point: {
        ...defaultOptions.elements?.point,
        ...options.elements?.point,
      },
    },
  };

  return (
    <div
      className={`w-full h-full overflow-hidden ${className}`}
      style={{ margin: 0, padding: 0 }}
    >
      <Line className="scale-[101.3%]" data={data} options={mergedOptions} />
    </div>
  );
}
