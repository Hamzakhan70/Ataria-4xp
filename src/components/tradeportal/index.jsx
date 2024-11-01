import React, { useState } from "react";
import AccountTabsContent from "./accounts";
import FundsTabsContent from "./funds";
import TradeHistory from "./trade-history";
import TradeHelpContent from "./help";
const TradePortal = () => {
  const tradePortalTabs = ["Accounts", "Funds", "Trade History", "Help"];
  const [activeTab, setActiveTab] = useState("Accounts");
  const [accountactiveTab, setAccountActiveTab] = useState("Live Accounts");
  const [fundsActiveTab, setFundsActiveTab] = useState("Deposit");
  const [TradeHistoryActiveTab, setTradeHistoryActiveTab] =
    useState("Open Trades");
  const [tradeContactUsActiveTab, setTradeContactUsActiveTab] =
    useState("Contact Us");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Accounts":
        return (
          <AccountTabsContent
            activeTab={accountactiveTab}
            onTabClick={setAccountActiveTab}
          />
        );
      case "Funds":
        return (
          <FundsTabsContent
            activeTab={fundsActiveTab}
            onTabClick={setFundsActiveTab}
          />
        );
      case "Trade History":
        return (
          <TradeHistory
            activeTab={TradeHistoryActiveTab}
            onTabClick={setTradeHistoryActiveTab}
          />
        );
      case "Help":
        return (
          <TradeHelpContent
            activeTab={tradeContactUsActiveTab}
            onTabClick={setTradeContactUsActiveTab}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-100 h-full w-full py-4">
      <div className="flex justify-between flex-wrap lg:flex border-2 rounded border-gray-300">
        {tradePortalTabs.map((tab) => (
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
  );
};

export default TradePortal;
