import React, { useState } from "react";

const IBPortal = () => {
  const IBPortalTabs = ["Dashboard", "Accounts", "Funds", "Tools"];
  const [activeTab, setActiveTab] = useState("Dashboard");
  const renderTabContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return <h1>Dashboard</h1>;
      case "Accounts":
        return <h1>Accounts</h1>;
      case "Funds":
        return <h1>Funds</h1>;
      case "Tools":
        return <h1>Tools</h1>;
      default:
        break;
    }
  };
  return (
    <div>
      {" "}
      <div className="bg-gray-100 h-full w-full py-8">
        <div className="flex justify-between flex-wrap lg:flex border-2 rounded border-gray-300">
          {IBPortalTabs.map((tab) => (
            <button
              key={tab}
              className={`border rounded-lg md:flex-1 p-2 md:font-bold ${
                activeTab === tab
                  ? "bg-blue-500 text-white"
                  : "hover:bg-blue-500 hover:text-white"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="mt-4">{renderTabContent()}</div>
      </div>
    </div>
  );
};

export default IBPortal;
