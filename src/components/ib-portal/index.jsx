import React, { useState } from "react";
import IBDashboardTabContent from "./ib-dashboard";
import IBPortalAccountTabContent from "./ib-accounts";
import IBPortalFundsTabContent from "./ib-funds";
import IBPortalToolsTabContent from "./ib-tools";

const IBPortal = () => {
  const IBPortalTabs = ["Dashboard", "Accounts", "Funds", "Tools"];
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [accountactiveTab, setAccountActiveTab] = useState("IB Account");
  const [ibFundsActiveTab, setibFundsActiveTab] = useState("IB Commission");
  const [ibToolsActiveTab, setIBToolsActiveTab] = useState("Media Kit");
  const renderTabContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return <IBDashboardTabContent />;
      case "Accounts":
        return (
          <IBPortalAccountTabContent
            activeTab={accountactiveTab}
            onTabClick={setAccountActiveTab}
          />
        );
      case "Funds":
        return (
          <IBPortalFundsTabContent
            activeTab={ibFundsActiveTab}
            onTabClick={setibFundsActiveTab}
          />
        );
      case "Tools":
        return (
          <IBPortalToolsTabContent
            activeTab={ibToolsActiveTab}
            onTabClick={setIBToolsActiveTab}
          />
        );
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
