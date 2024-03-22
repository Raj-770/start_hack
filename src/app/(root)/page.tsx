"use client";
import React from "react";
import LineChart from "../components/graphs/line-graph";
import DoughnutChart from "../components/graphs/doughnut-graph";
import Image from "next/image";
import InvestmentMeeting from "../components/investment-meeting";
import {
  Burn_Rate_Data,
  Funds_Data,
  Profitability_Data,
  Revenue_Data,
} from "../utils/data";
import BarChart from "../components/graphs/bar-graph";
import ComparisonDiagram from "../components/graphs/block-graph";

const Home = () => {
  const data = {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
      {
        label: "Revenue",
        data: [12, 19, 3, 5],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    maintainAspectRatio: false, // Important for setting custom height
  };

  const doughnutData = {
    labels: ["Founders", "Venture Capitalist", "Angel Investor"],
    datasets: [
      {
        label: "in %",
        data: [80, 8, 12],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const doughnutOptions = {
    maintainAspectRatio: false,
    cutout: "70%",
  };

  const barData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <section className="my-10 mx-14">
      <div className="flex w-full">
        <h1 className="text-center text-black text-5xl font-bold mb-5">
          four20 GmbH
        </h1>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex w-full flex-row gap-8">
          <div className="flex w-[200px] h-[150px] bg-white rounded-xl">
            <div className="flex flex-col w-full justify-center items-center gap-2">
              <p className="text-5xl font-bold">11</p>
              <p className="text-xl ">Employees</p>
            </div>
          </div>
          <div className="w-[450px] h-[150px] bg-white rounded-xl py-1 px-2">
            <LineChart data={Revenue_Data} options={options} />
          </div>
          <div className="w-[450px] h-[150px] bg-white rounded-xl py-1 px-2">
            <LineChart data={Profitability_Data} options={options} />
          </div>
        </div>
        <div className="flex w-full flex-row gap-8">
          <div className="flex flex-col gap-8">
            <div className="w-[470px] h-[150px] bg-white rounded-xl py-1 px-2">
              <LineChart data={Burn_Rate_Data} options={options} />
            </div>
            <InvestmentMeeting />
          </div>
          <div className="w-[655px] h-[580px] bg-white rounded-xl pt-6 pb-[150px] px-10 text-xl">
            <p className="mb-10 text-center font-semibold">Equity Holding</p>
            {/* Adjust the size as needed */}
            <DoughnutChart data={doughnutData} options={doughnutOptions} />
          </div>
        </div>
        <div className="flex w-full flex-row gap-8">
          <div className="w-[475px] h-[330px] bg-white rounded-xl py-10 px-1">
            <BarChart data={Funds_Data} options={barOptions} />
          </div>
          <div className="flex flex-col bg-white w-[655px] p-4 rounded-xl">
            <h1 className="text-xl mb-3 px-10 text-center font-semibold">
              Expenses
            </h1>
            <ComparisonDiagram />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
