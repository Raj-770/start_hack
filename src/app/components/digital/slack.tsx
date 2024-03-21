import React from "react";

// Mock data for Slack notifications
const notifications = [
  {id: 1, message: "You have a new message from @johndoe."},
  {id: 2, message: "Your scheduled meeting starts in 10 minutes."},
  {id: 3, message: "New comment on your post in #general."},
];

const SlackNotificationsComponent = () => {
  return (
    <div className="max-w-sm w-full rounded-lg overflow-hidden shadow-lg bg-[#4A154B] text-white m-4">
      <div className="px-6 py-4 bg-[#4A154B]">
        <div className="flex items-center mb-4">
          <img
            className="w-8 h-8 mr-2"
            src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png"
            alt="Slack Logo"
          />
          <h3 className="font-bold text-xl">Unread Notifications</h3>
        </div>
      </div>
      <div className="px-6 py-4 bg-[#2C2C2C]">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="mb-2 last:mb-0 p-2 rounded-md bg-[#4A154B]"
          >
            <p className="text-sm">{notification.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlackNotificationsComponent;
