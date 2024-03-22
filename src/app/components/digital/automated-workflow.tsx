const WorkflowTaskComponent = ({appName, task, icon}) => {
  // Assign a color based on the application for visual differentiation
  const appColors = {
    Slack: "bg-purple-600",
    "Google Workspace": "bg-blue-600",
    HubSpot: "bg-orange-500",
    Asana: "bg-green-500",
    Airtable: "bg-red-500",
    Notion: "bg-gray-600",
    Zapier: "bg-yellow-500",
  };

  return (
    <div
      className={`p-4 ${appColors[appName]} rounded-lg shadow-lg flex items-center space-x-4 z-10`}
    >
      <div>
        <i className={`fa ${icon} fa-2x text-white`}></i>{" "}
        {/* Icon placeholder */}
      </div>
      <div>
        <h3 className="text-white text-lg font-semibold">{appName}</h3>
        <p className="text-white text-sm">{task}</p>
      </div>
    </div>
  );
};

const AutomatedWorkflowComponent = () => {
  const workflows = [
    {
      id: 1,
      appName: "Slack",
      task: "Keyword mentioned triggers Google Docs creation",
      icon: "fa-slack",
      color: "bg-purple-500",
    },
    {
      id: 2,
      appName: "HubSpot",
      task: "New lead added triggers task creation in Asana",
      icon: "fa-hubspot",
      color: "bg-orange-500",
    },
    {
      id: 3,
      appName: "Airtable",
      task: "New record added triggers Notion page creation",
      icon: "fa-airtable",
      color: "bg-blue-500",
    },
    {
      id: 4,
      appName: "Zapier",
      task: "New Google Drive file sends message on Slack",
      icon: "fa-zapier",
      color: "bg-yellow-500",
    },
    {
      id: 5,
      appName: "Asana",
      task: "Approaching due date creates Google Calendar event",
      icon: "fa-asana",
      color: "bg-green-500",
    },
    {
      id: 6,
      appName: "Notion",
      task: "New page creation sends update to Slack channel",
      icon: "fa-notion",
      color: "bg-red-500",
    },
  ];

  return (
    <div className="py-5">
      {" "}
      <div className=" space-y-2 mx-16">
        {workflows.map((workflow, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Render the task component */}
            <WorkflowTaskComponent {...workflow} />

            {/* If not the last item, render an arrow */}
            {index < workflows.length - 1 && (
              <div className="flex-grow border-t-4 border-dashed border-black relative "></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutomatedWorkflowComponent;
