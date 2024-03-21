"use client";
import AsanaTasksComponent from "@/app/components/digital/asana";
import UnreadNotificationsSlack from "@/app/components/digital/slack";
import React, {useState} from "react";

const DigitalStatistics = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-10">Digital Statistics Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Asana Tasks Component */}
          <AsanaTasksComponent />

          {/* Slack Notifications Component */}
          <UnreadNotificationsSlack />
          
          {/* Placeholder for other components */}
          {/* <OtherComponent /> */}
          
          {/* More components can be added here following the same pattern */}
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
