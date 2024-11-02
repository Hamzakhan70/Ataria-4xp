import React, { useState } from "react";
import TechnicalAnalysis from "./technical-analysis";
import Calendar from "./calendar";
import EmailSignUp from "./email-signup";
import ReferencePortal from "./research-portal";
import EmailSignUp from "./email-signup";

const MarketAnalysis = () => {
  const marketAnalysisTabs = [
    "Technical Analysis",
    "Calendar",
    "Performance Statistics",
    "Email Sign up",
    "Reference Portal",
  ];
  const renderTabContent = () => {
    switch (activeTab) {
      case "Technical Analysis":
        return <TechnicalAnalysis />;
      case "Calendar":
        return <Calendar />;
      case "Performance Statistics":
        return <PerformanceStatistics />;
      case "Email Sign up":
        return <EmailSignUp />;
      case "Reference Portal":
        return <ReferencePortal />;
      default:
        break;
    }
  };
  const [activeTab, setActiveTab] = useState("Technical Analysis");
  return (
    <div>
      MarketAnalysis
      <div className="bg-gray-100 h-full w-full py-8">
        <div className="flex justify-between flex-wrap lg:flex border-2 rounded border-gray-300">
          {marketAnalysisTabs.map((tab) => (
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

export default MarketAnalysis;
