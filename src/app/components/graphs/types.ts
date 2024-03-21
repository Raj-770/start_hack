export type ChartData = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
  }[];
};

export type ChartOptions = {
  scales: {
    y: {
      beginAtZero: boolean;
    };
  };
  maintainAspectRatio: boolean;
};

