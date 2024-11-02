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
];
const IBDashboardTabContent = () => {
  return (
    <>
      <div className="p-6 border-gray-300 rounded-lg border">
        <h1 className="font-bold text-xl mb-8">Dashboard</h1>
        <div className="flex justify-between gap-5">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`rounded-lg p-8 h-104
                  ${
                    index % 2 === 0
                      ? "bg-gradient-to-r from-blue-500 via-white to-blue-200"
                      : "bg-gradient-to-r from-blue-300 via-white to-white"
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
      </div>
    </>
  );
};

export default IBDashboardTabContent;
