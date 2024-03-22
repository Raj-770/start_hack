import React from "react";

const AsanaTasksComponent = () => {
  const activeTasks = 42; // Fixed constant number of active tasks

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white ml-4">
      <div className="px-6 py-4 bg-orange-100 border-b border-orange-200">
        <h2 className="font-bold text-xl mb-2 text-center text-orange-800">
          Asana Tasks
        </h2>
      </div>
      <div className="flex flex-row items-center justify-between px-10 py-4">
        <img
          className="w-20   mr-4"
          src="https://logos-world.net/wp-content/uploads/2021/02/Asana-Symbol.png"
          alt="Asana Logo"
        />
        <div className="flex flex-col items-center justify-center">
          <div className="text-lg font-semibold text-gray-900">
            Active Tasks
          </div>
          <div className="mt-2 text-gray-700 text-3xl font-bold">
            {activeTasks}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsanaTasksComponent;
