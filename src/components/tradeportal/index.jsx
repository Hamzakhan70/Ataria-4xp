import React, { useState } from "react";
import OpenDemoAccountForm from "./demo-account";
import LiveAccounts from "./live-accounts";

const TradePortal = () => {
  const tradePortalTabs = ["Accounts", "Funds", "Trade History", "Help"];
  const AccountsTabs = [
    "Live Accounts",
    "Demo Accounts",
    "Open Real Accounts",
    "Open Demo Accounts",
  ];
  const [activeTab, setActiveTab] = useState("Accounts");
  const [accountactiveTab, setAccountActiveTab] = useState("Live Accounts");
  const [showDemoAccountForm, setShowDemoAccountForm] = useState(false);
  const renderTabContent = () => {
    switch (activeTab) {
      case "Accounts":
        return (
          <div className="p-4">
            <div className="flex gap-4 mb-4">
              {AccountsTabs.map((tab) => (
                <button
                  key={tab}
                  className={`flex-1 py-2 font-bold ${
                    accountactiveTab === tab
                      ? "bg-blue-500 text-white"
                      : "hover:bg-blue-500 hover:text-white"
                  }`}
                  onClick={() => {
                    return (
                      setAccountActiveTab(tab), setShowDemoAccountForm(tab)
                    );
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            {showDemoAccountForm == "Open Demo Accounts" && (
              <OpenDemoAccountForm />
            )}
            {showDemoAccountForm == "Live Accounts" && <LiveAccounts />}
          </div>
        );
      case "Funds":
        return <div className="p-4">Funds Content</div>;
      case "Trade History":
        return <div className="p-4">Trade History Content</div>;
      case "Help":
        return <div className="p-4">Help Content</div>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-100 h-full w-full py-4">
      <div className="flex border-b-2 border-gray-300">
        {tradePortalTabs.map((tab) => (
          <button
            key={tab}
            className={`flex-1 py-2 font-bold ${
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
