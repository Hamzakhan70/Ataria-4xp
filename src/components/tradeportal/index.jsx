import React, { useState } from "react";

const TradePortal = () => {
  const [activeTab, setActiveTab] = useState("Accounts");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Accounts":
        return (
          <div className="p-4">
            <div className="flex gap-4 mb-4">
              <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
                Live Accounts
              </button>
              <button className="bg-gray-300 text-black font-bold py-2 px-4 rounded">
                Demo Accounts
              </button>
              <button className="bg-gray-300 text-black font-bold py-2 px-4 rounded">
                Open Real Account
              </button>
              <button className="bg-gray-300 text-black font-bold py-2 px-4 rounded">
                Open Demo Account
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-2 px-4 border-b">A-ID</th>
                    <th className="py-2 px-4 border-b">Login</th>
                    <th className="py-2 px-4 border-b">Account Type</th>
                    <th className="py-2 px-4 border-b">Date of Registration</th>
                    <th className="py-2 px-4 border-b">Balance</th>
                    <th className="py-2 px-4 border-b">Equity</th>
                    <th className="py-2 px-4 border-b">Free Margin</th>
                    <th className="py-2 px-4 border-b">Credit</th>
                    <th className="py-2 px-4 border-b">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">1</td>
                    <td className="py-2 px-4 border-b">600143</td>
                    <td className="py-2 px-4 border-b">test (MT5)</td>
                    <td className="py-2 px-4 border-b">23-09-2024 09:58 AM</td>
                    <td className="py-2 px-4 border-b">0</td>
                    <td className="py-2 px-4 border-b">0</td>
                    <td className="py-2 px-4 border-b">0</td>
                    <td className="py-2 px-4 border-b">0</td>
                    <td className="py-2 px-4 border-b">
                      <button className="bg-blue-500 text-white px-3 py-1 rounded">
                        ⋮
                      </button>
                    </td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </div>
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
        {["Accounts", "Funds", "Trade History", "Help"].map((tab) => (
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
