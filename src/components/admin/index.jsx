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
    <div className="w-full h-[85vh] py-2 px-10 text-black">
      <span className="text-black font-bold text-2xl p-2">Admin Portal</span>
      <div className="h-[25%] rounded-lg bg-gradient-to-r from-blue-900 via-purple-800 to-black flex justify-between p-4 mb-6">
        <div>
          <h1 className="text-white font-bold text-2xl p-2">
            Welcome to{" "}
            <span className="font-extrabold text-5xl">4X Portal</span>
          </h1>
          <span className="text-gray-300 ml-4">by 4xportal.com</span>
          <div className="mt-4 ml-6">
            <button className="bg-blue-700 underline p-2 rounded-xl text-white">
              Live Chat
            </button>
          </div>
        </div>
        <div className="text-white">
          <div className="bg-team-meeting bg-cover bg-center bg-no-repeat bg-opacity-10 w-[14rem] h-[10rem]"></div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
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
              {/* For odd cards, show one icon at the start */}
              {index % 2 === 0 && <div>{card.icons[0]}</div>}
              {index % 2 !== 0 && <div>{card.icons[0]}</div>}
              <h2 className="font-bold text-xl">{card.title}</h2>
              {/* For even cards, show one icon at the start and one at the end */}
            </div>
            <p className="text-gray-700 mt-2">{card.description}</p>
            <p className="text-gray-500 mt-1">{card.contact}</p>
            {index % 2 !== 0 && <div className="ml-[80%]">{card.icons[1]}</div>}
          </div>
        ))}
      </div>
      {/* Footer Paragraph */}
      <div className="mt-4 text-gray-600 text-sm text-center">
        <p>
          It is simply dummy text of the printing and typesetting industry.
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
    </div>
  );
};

export default Admin;
