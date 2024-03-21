import {Budget_Data, Expenses_Data} from "@/app/utils/data";
import React from "react";

const ComparisonDiagram = () => {
  const comparisonResult = Expenses_Data.datasets[0].data.map(
    (expense, index) => {
      return expense <= Budget_Data.datasets[0].data[index] ? "green" : "red";
    }
  );

  return (
    <div className="grid grid-cols-2 ml-20 w-3/4">
      {Expenses_Data.labels.map((label, index) => (
        <div
          key={label}
          className={`flex flex-col justify-center items-center h-32 border-2 ${comparisonResult[index]}`}
          style={{
            backgroundColor:
              comparisonResult[index] === "green" ? "#d4edda" : "#f8d7da",
          }}
        >
          <p className="font-bold">{label}</p>
        </div>
      ))}
    </div>
  );
};

export default ComparisonDiagram;
