"use client";
import AsanaTasksComponent from "@/app/components/digital/asana";
import AutomatedWorkflowsComponent from "@/app/components/digital/automated-workflow";
import HubSpotLeadsComponent from "@/app/components/digital/hubspot";
import RecentActivityComponent from "@/app/components/digital/recent-activity";
import SlackNotificationsComponent from "@/app/components/digital/slack";
import UnreadNotificationsSlack from "@/app/components/digital/slack";
import React, {useState} from "react";
const DigitalStatistics = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold ml-[140px] mb-12">
          Digital Statistics Dashboard
        </h1>

        {/* Recent Activities Section */}
        <div className="mb-8">
          <RecentActivityComponent />
        </div>

        {/* Applications Overview Section */}
        <h2 className="text-3xl font-semibold text-center mb-8 mt-10">
          Applications Overview
        </h2>
        <div className="flex flex-row gap-12 justify-center">
          {/* First Column: Asana and Slack */}
          <div className="flex flex-col gap-2">
            <div>
              <AsanaTasksComponent />
            </div>
            <div>
              <SlackNotificationsComponent />
            </div>
          </div>

          {/* Second Column: HubSpot */}
          <div className="flex flex-col space-y-8">
            <div>
              <HubSpotLeadsComponent />
            </div>
            {/* Placeholder for additional single components in the future */}
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-center mb-8">Automated Workflows</h2>
          <AutomatedWorkflowsComponent />
        </div>
      </div>
    </div>
  );
};

export default DigitalStatistics;

// const [searchTerm, setSearchTerm] = useState('');
// const [platform, setPlatform] = useState('');
// const [dataType, setDataType] = useState('');
// const [status, setStatus] = useState('');
// const [date, setDate] = useState('');

// const platformOptions = ['All', 'Slack', 'Asana', 'Google Workspace', 'Notion'];
// const dataTypeOptions = ['All', 'Messages', 'Tasks', 'Documents'];
// const statusOptions = ['All', 'Completed', 'Pending'];
// const dateOptions = ['All', 'Last week', 'Last month', 'Last year'];

// const handleSearchChange = (event) => {
//   setSearchTerm(event.target.value);
// }

// return (
//   <div className="font-sans antialiased text-gray-900 leading-normal tracking-wider">
//     <div className="flex flex-col md:flex-row">
//       <div className="h-full w-full md:w-1/3 p-8 bg-gray-200">
//         <h3 className="font-bold mb-2 text-lg">Filters</h3>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" for="platform">
//             Platform
//           </label>
//           <select value={platform} onChange={(e) => setPlatform(e.target.value)} className="form-select block w-full mt-1">
//             {platformOptions.map((option, index) => <option key={index} value={option}>{option}</option>)}
//           </select>
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" for="dataType">
//             Data Type
//           </label>
//           <select value={dataType} onChange={(e) => setDataType(e.target.value)} className="form-select block w-full mt-1">
//             {dataTypeOptions.map((option, index) => <option key={index} value={option}>{option}</option>)}
//           </select>
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" for="status">
//             Status
//           </label>
//           <select value={status} onChange={(e) => setStatus(e.target.value)} className="form-select block w-full mt-1">
//             {statusOptions.map((option, index) => <option key={index} value={option}>{option}</option>)}
//           </select>
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" for="date">
//             Date
//           </label>
//           <select value={date} onChange={(e) => setDate(e.target.value)} className="form-select block w-full mt-1">
//             {dateOptions.map((option, index) => <option key={index} value={option}>{option}</option>)}
//           </select>
//         </div>

//         <div>
//           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Apply Filters</button>
//         </div>
//       </div>

//       <div className="w-full md:w-2/3 p-8">
//         <h1 className="font-bold mb-2 text-xl">Digital Statistics</h1>
//         <input
//           type='text'
//           placeholder='Search...'
//           value={searchTerm}
//           onChange={handleSearchChange}
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         />
//       </div>
//     </div>
//   </div>
// )
