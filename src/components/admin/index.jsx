import React from "react";
import { FaChartBar } from "react-icons/fa";

const cardData = [
  {
    title: "Latest Highlights",
    description: "With our narrow spread's traders can enjoy more profits...",
    contact: "808080808080",
    icons: [<FaChartBar />],
  },
  {
    title: "Leads",
    description: "Manage all your leads effectively...",
    contact: "808080808080",
    icons: [<FaChartBar />, <FaChartBar />],
  },
  {
    title: "Task Management",
    description: "Efficiently manage your tasks...",
    contact: "808080808080",
    icons: [<FaChartBar />],
  },
  {
    title: "Fund Management",
    description: "Secure fund management...",
    contact: "808080808080",
    icons: [<FaChartBar />, <FaChartBar />],
  },
  {
    title: "Support",
    description: "24/7 customer support...",
    contact: "808080808080",
    icons: [<FaChartBar />],
  },
  {
    title: "Latest Highlights",
    description: "With our narrow spread's traders can enjoy more profits...",
    contact: "808080808080",
    icons: [<FaChartBar />],
  },
  {
    title: "Leads",
    description: "Manage all your leads effectively...",
    contact: "808080808080",
    icons: [<FaChartBar />, <FaChartBar />],
  },
  {
    title: "Task Management",
    description: "Efficiently manage your tasks...",
    contact: "808080808080",
    icons: [<FaChartBar />],
  },
  {
    title: "Fund Management",
    description: "Secure fund management...",
    contact: "808080808080",
    icons: [<FaChartBar />, <FaChartBar />],
  },
];

const Admin = () => {
  return (
    <div className="w-full h-auto lg:h-[85vh] py-2 px-[2%] md:px-10 text-black">
      <span className="text-black font-bold text-2xl p-2">Admin Portal</span>
      <div className="h-auto lg:h-[40%] rounded-lg bg-gradient-to-r from-blue-900 via-purple-800 to-black flex flex-col lg:flex-row justify-between p-4 mb-6">
        <div>
          <h1 className="text-white font-bold text-2xl p-2">
            Welcome to{" "}
            <span className="font-extrabold text-3xl md:text-4xl lg:text-5xl">
              4X Portal
            </span>
          </h1>
          <span className="text-gray-300 ml-4">by 4xportal.com</span>
          <div className="mt-4 ml-6">
            <button className="bg-blue-700 underline p-2 rounded-xl text-white">
              Live Chat
            </button>
          </div>
        </div>
        <div className="text-white mt-4 lg:mt-0">
          <div className="bg-team-meeting bg-cover bg-center bg-no-repeat bg-opacity-10 w-[10rem] md:w-[12rem] h-[8rem] md:h-[10rem]"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`rounded-lg p-4 
              ${
                index % 2 === 0
                  ? "bg-gradient-to-r from-white via-white to-blue-300"
                  : "bg-gradient-to-r from-red-300 via-white to-gray-200"
              }`}
          >
            <div className="flex justify-between items-center">
              {index % 2 === 0 && <div>{card.icons[0]}</div>}
              <h2 className="font-bold text-lg sm:text-xl">{card.title}</h2>
              {index % 2 !== 0 && <div>{card.icons[1]}</div>}
            </div>
            <p className="text-gray-700 mt-2 text-sm md:text-base">
              {card.description}
            </p>
            <p className="text-gray-500 mt-1 text-xs md:text-sm">
              {card.contact}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-4 text-gray-600 text-xs md:text-sm text-center">
        <p>
          It is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
      </div>
    </div>
  );
};

export default Admin;
