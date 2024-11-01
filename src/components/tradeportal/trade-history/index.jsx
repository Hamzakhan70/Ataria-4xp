import React, { useState } from "react";
import OpentradeTabContent from "./open-trades";
import HistoryTabContent from "./history-tab";
import TradeCountTab from "./trade-count";
const TabButton = ({ tab, isActive, onClick }) => (
  <button
    className={`flex p-2 font-bold border rounded border-black ${
      isActive ? "bg-blue-500 text-white" : "hover:bg-blue-500 hover:text-white"
    }`}
    onClick={onClick}
  >
    {tab}
  </button>
);

const TradeHistory = ({ activeTab, onTabClick }) => {
  const TradeHistoryTabs = ["Open Trades", "History", "Number of Trades"];
  const renderTradeComponent = () => {
    switch (activeTab) {
      case "Open Trades":
        return <OpentradeTabContent />;
      case "History":
        return <HistoryTabContent />;
      case "Number of Trades":
        return <TradeCountTab />;
      default:
        break;
    }
  };
  return (
    <>
      <div className="border rounded p-3">
        <div className="font-bold text-xl mb-8 ">
          <h1>Trade History</h1>
        </div>
        <div className="mb-8">
          <label htmlFor="Account" className="text-xl font-bold">
            Account No*
          </label>
          <select name="deposit" className="border p-2 w-[50%] block mt-5">
            <option value="" disabled></option>
            <option value="Wallet">Wallet</option>
            <option value="MT5">MT5</option>
            <option value="Vertex">Vertex</option>
          </select>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-2 md:flex gap-4 mb-4">
            {TradeHistoryTabs.map((tab) => (
              <TabButton
                key={tab}
                tab={tab}
                isActive={activeTab === tab}
                onClick={() => onTabClick(tab)}
              />
            ))}
          </div>
        </div>
        {renderTradeComponent()}
      </div>
    </>
  );
};

export default TradeHistory;
