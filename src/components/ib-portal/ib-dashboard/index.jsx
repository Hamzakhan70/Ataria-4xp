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
        <div className="flex flex-wrap md:flex justify-between gap-5">
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
        <div className="my-12 border-4 border-gray-200 rounded-lg p-4">
          <label
            htmlFor="options"
            className="block mb-2 text-xl font-medium text-black"
          >
            Choose an option:
          </label>
          <select
            id="options"
            className="block w-64 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="" disabled>
              -- Select an option --
            </option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
            <option value="option5">Option 5</option>
            <option value="option6">Option 6</option>
          </select>
        </div>
        <p className="text-center">
          it is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </p>
      </div>
    </>
  );
};

export default IBDashboardTabContent;
