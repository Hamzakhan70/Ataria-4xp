import React from "react";
import IBPortalFundsIBCommissions from "./ibportal-fund-ibcommisions";
import IBPortalFundsTransfer from "./ibportal-funds-transfer";

const IBPortalFundsTabContent = ({ activeTab, onTabClick }) => {
  const IBPortalFundsTabs = ["IB Commission", "Transfer"];
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
      case "IB Commission":
        return <IBPortalFundsIBCommissions />;
      case "Transfer":
        return <IBPortalFundsTransfer />;
      default:
        break;
    }
  };

  return (
    <div>
      <div className="grid grid-cols-2 md:flex gap-4 mb-4">
        {IBPortalFundsTabs.map((tab) => (
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

export default IBPortalFundsTabContent;
