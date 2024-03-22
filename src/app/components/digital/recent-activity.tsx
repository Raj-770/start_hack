import React from "react";

const recentActivities = [
  {
    app: "Slack",
    activity: "Posted a message in #general",
    logoUrl: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg",
  },
  {
    app: "HubSpot",
    activity: "Updated a contact: John Doe",
    logoUrl:
      "https://content.partnerpage.io/eyJidWNrZXQiOiJwYXJ0bmVycGFnZS5wcm9kIiwia2V5IjoibWVkaWEvY29udGFjdF9pbWFnZXMvYTExNTZlMjQtNTY0NC00N2M4LWE2NjUtYzVhN2IzMzE4NDRiL2E1YjY1ZWU1LTRlZTUtNDNlNi04NTlhLTAzZTJhNTg2ZTI3MS5qcGVnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7ImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjowfX19fQ==",
  },
  {
    app: "Asana",
    activity: "Completed a task: Design Review",
    logoUrl: "https://cdn.worldvectorlogo.com/logos/asana-1.svg",
  },
  {
    app: "Notion",
    activity: "Edited the Project Roadmap page",
    logoUrl: "https://logosandtypes.com/wp-content/uploads/2020/07/Notion.png",
  },
];

const RecentActivityComponent = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-3xl text-center font-semibold mb-4">
        Your Last Activity
      </h2>
      <div className="bg-white shadow rounded-lg divide-y divide-gray-200">
        {recentActivities.map((activity, index) => (
          <div key={index} className="px-6 py-4 flex items-center">
            <img
              src={activity.logoUrl}
              alt={`${activity.app} logo`}
              className="h-8 w-8 mr-4"
            />
            <div>
              <h3 className="text-lg font-medium">{activity.app}</h3>
              <p className="text-gray-600">{activity.activity}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivityComponent;
