import React from "react";
import IBPortalToolsMedia from "./ibportal-tools-referral";
import IBPortalToolsReferral from "./ibportal-tools-referral";

const IBPortalToolsTabContent = ({ activeTab, onTabClick }) => {
  const IBPortalToolsTabs = ["Media Kit", "Referral Code"];
  const TabButton = ({ tab, isActive, onClick }) => (
    <button
      className={`flex p-2 font-bold border rounded border-black ${
        isActive
          ? "bg-blue-500 text-white"
          : "hover:bg-blue-500 hover:text-white"
      }`}
      onClick={onClick}
    >
      {tab}
    </button>
  );

  const renderAccountComponent = () => {
    switch (activeTab) {
      case "Media Kit":
        return <IBPortalToolsMedia />;
      case "Referral Code":
        return <IBPortalToolsReferral />;
      default:
        break;
    }
  };

  return (
    <div>
      <div className="grid grid-cols-2 md:flex gap-4 mb-4">
        {IBPortalToolsTabs.map((tab) => (
          <TabButton
            key={tab}
            tab={tab}
            isActive={activeTab === tab}
            onClick={() => onTabClick(tab)}
          />
        ))}
      </div>
      {renderAccountComponent()}
    </div>
  );
};

export default IBPortalToolsTabContent;
