import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { ChartData, ChartOptions } from "./types";

// Register the components required for the Doughnut chart
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

// Props interface if using TypeScript
interface DoughnutChartProps {
  data: ChartData;
  options?: ChartOptions; // Options are optional as Doughnut charts might not need them
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({ data, options }) => {
  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
