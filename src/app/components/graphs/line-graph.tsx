import React from "react";
import {Line} from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { ChartData, ChartOptions } from "./types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);



interface LineChartProps {
  data: ChartData;
  options: ChartOptions;
}

const LineChart: React.FC<LineChartProps> = ({data, options}) => {
  return <Line data={data} options={options} />;
};

export default LineChart;
