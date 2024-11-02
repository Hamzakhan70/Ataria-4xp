import React, { useState } from "react";
import TechnicalAnalysis from "./technical-analysis";
import Calendar from "./calendar";
import ResearchPortal from "./research-portal";
import EmailSignUp from "./email-signup";
import PerformanceStatistics from "./performance-statistics";

const iFrames = [
  {
    name: "Technical Analysis",
    path: "https://component.autochartist.com/to/?broker_id=918&amp;token=33342405d3748cec6f845b7826b485f1&amp;expire=1767564000&amp;user=Trillium&amp;locale=en_GB&amp;layout=horizontal&amp;account_type=LIVE&amp;trade_now=y&amp;style=ds#/results",
  },
  {
    name: "Calendar",
    path: "https://eia.autochartist.com/calendar/?broker_id=918&amp;nextdays=3&amp;token=33342405d3748cec6f845b7826b485f1&amp;expire=1767564000&amp;user=Trillium&amp;locale=en&amp;style=ds#/calendar",
  },
  {
    name: "Performance Statistics",
    path: "https://performancestats.autochartist.com/918_consolidateddark_en.xml",
  },
  {
    name: "Email Sign Up",
    path: "https://reports.autochartist.com/signup/market-reports?bid=918&amp;user=email&amp;demo=0&amp;locale=en&amp;expire=1767564000&amp;token=f94bbf58b140d2d4001d878bb582d48a&amp;css=https:%2F%2Fbroker-resources.autochartist.com%2Fcss%2Fcomponents%2F918-signup-form-mr-app_ds.css",
  },
  {
    name: "Research Portal",
    path: "https://webapp.autochartist.com/componentcontainer/broker.php?broker_id=918&amp;user=email&amp;logintoken=f94bbf58b140d2d4001d878bb582d48a&amp;expire=1767564000&amp;account_type=LIVE&amp;locale=en_GB",
  },
];
const MarketAnalysis = () => {
  const marketAnalysisTabs = [
    "Technical Analysis",
    "Calendar",
    "Performance Statistics",
    "Email Sign up",
    "Research Portal",
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
      case "Research Portal":
        return <ResearchPortal />;
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
