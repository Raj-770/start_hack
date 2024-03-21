import Image from "next/image";
import React from "react";
import tickCross from "/public/tick-cross.png";

const meetingData = [
  {name: "Venture Capitalist 1", date: "27 March, 2024", time: "14:00 - 14:45"},
  {name: "Angel Investor 1", date: "12 April, 2024", time: "12:30 - 13:00"},
  {name: "Investor 2", date: "15 April, 2024", time: "11:00 - 11:30"},
  {name: "Venture Capitalist 2", date: "21 April, 2024", time: "09:00 - 10:00"},
];

const MeetingCard = ({
  name,
  date,
  time,
}: {
  name: string;
  date: string;
  time: string;
}) => {
  return (
    <div className="flex flex-row justify-between items-center w-[400px] h-[50px] p-4 shadow-md">
      <div className="flex flex-col justify-center items-center">
        <p className="text-black text-center text-xl">{name}</p>
        <p className="text-slate-700 text-center text-m">
          {date} {time}
        </p>
      </div>
      <Image src={tickCross} alt="" width={60} />
    </div>
  );
};

const InvestmentMeeting = () => {
  return (
    <div className="flex flex-col bg-white p-8 gap-4 rounded-xl h-[400px]">
      <p className="text-xl mb-4">Investment Meetings</p>
      {meetingData.map((data, index) => (
        <MeetingCard
          key={index}
          name={data.name}
          date={data.date}
          time={data.time}
        />
      ))}
    </div>
  );
};

export default InvestmentMeeting;
