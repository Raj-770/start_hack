import React from 'react';

// Mock data for HubSpot leads and queries
const hubspotData = [
  { id: 1, name: "John Doe", query: "Interested in product pricing information." },
  { id: 2, name: "Jane Smith", query: "Requesting a demo for the sales team." },
  { id: 3, name: "Carlos Rodriguez", query: "Inquiry about integration options." },
];

const HubSpotLeadsComponent = () => {
  return (
    <div className="max-w-md w-full rounded-lg overflow-hidden shadow-lg my-4 mx-auto bg-white">
      <div className="px-6 py-4 bg-orange-500 flex items-center">
        <img className="h-10 mr-3" src="https://cdn.worldvectorlogo.com/logos/hubspot-2.svg" alt="HubSpot Logo" />
        <h3 className="font-bold text-white text-xl">Leads and Queries</h3>
      </div>
      <div className="p-6">
        {hubspotData.map((lead) => (
          <div key={lead.id} className="mb-4 p-4 rounded-lg bg-orange-50">
            <h4 className="font-semibold text-orange-800">{lead.name}</h4>
            <p className="text-gray-700">{lead.query}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HubSpotLeadsComponent;
