import React from "react";
import IBPortalIBReferral from "./ibportal-ibreferrals";
import IBPortalIBAccount from "./ibportal-ibaccount";
const IBPortalAccountTabContent = ({ activeTab, onTabClick }) => {
  const IBPortalAccountsTabs = ["IB Account", "IB Referrals"];
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
      case "IB Account":
        return <IBPortalIBAccount />;
      case "IB Referrals":
        return <IBPortalIBReferral />;
      default:
        break;
    }
  };

  return (
    <div>
      <div className="grid grid-cols-2 md:flex gap-4 mb-4">
        {IBPortalAccountsTabs.map((tab) => (
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

export default IBPortalAccountTabContent;
