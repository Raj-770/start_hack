import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Additional imports for chart animations and style
import 'chartjs-plugin-style';

// Register the components required for the bar chart, including any plugins
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarChartProps {
  data: ChartData;
  options: ChartOptions;
}

const BarChart: React.FC<BarChartProps> = ({ data, options }) => {
  // Define additional options for a modern look
  const modernOptions = {
    ...options,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          font: {
            size: 16, // Larger font size for legend labels
          },
          color: '#4B5563', // A neutral dark gray for better contrast
        },
      },
      tooltip: {
        backgroundColor: '#111827', // Dark background for tooltips
        titleFont: {
          size: 18, // Larger font size for tooltip titles
        },
        bodyFont: {
          size: 14, // Standard font size for tooltip body
        },
        cornerRadius: 4, // Rounded corners for tooltips
        usePointStyle: true, // Use point style for a modern look
      },
    },
    elements: {
      bar: {
        backgroundColor: 'rgba(59, 130, 246, 0.8)', // Semi-transparent blue
        borderColor: 'rgba(37, 99, 235, 1)', // Solid blue border
        borderWidth: 2,
        borderRadius: 4, // Rounded corners for bars
        borderSkipped: false, // Show border for all sides of the bar
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: '#6B7280', // Gray color for y-axis ticks
          font: {
            size: 14, // Consistent font size for y-axis ticks
          },
        },
        grid: {
          color: '#E5E7EB', // Lighter grid lines for a subtle look
        },
      },
      x: {
        ticks: {
          color: '#6B7280', // Gray color for x-axis ticks
          font: {
            size: 14, // Consistent font size for x-axis ticks
          },
        },
        grid: {
          display: false, // No grid lines for x-axis for cleaner design
        },
      },
    },
    animation: {
      duration: 800, // Smooth animation duration
    },
    maintainAspectRatio: false,
  };

  return <Bar data={data} options={modernOptions} />;
};

export default BarChart;
