import React from "react";

const EventCard = ({title, date, description, imageUrl}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
      <img className="w-full" src={imageUrl} alt="Event" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{date}</p>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default EventCard;
