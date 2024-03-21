// Reuse the ChartData type from the previous components
type ChartData = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor?: string[];
    borderWidth?: number;
  }[];
};

// ChartOptions for potential customization
type ChartOptions = {
  scales?: {
    y?: {
      beginAtZero: boolean;
    };
  };
  maintainAspectRatio: boolean;
};

import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the components required for the bar chart
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Props interface if using TypeScript
interface BarChartProps {
  data: ChartData;
  options: ChartOptions;
}

const BarChart: React.FC<BarChartProps> = ({ data, options }) => {
  return <Bar data={data} options={options} />;
};

export default BarChart;
