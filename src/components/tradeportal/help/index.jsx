import React from "react";
import TradeContactUs from "./contact-us";
import TradeFAQS from "./faq";
const TradeHelpContent = ({ activeTab, onTabClick }) => {
  const TradeHelpContentTabs = ["Contact Us", "FAQ'S"];
  // const [activeTab, setActiveTab] = useState("Contact Us");
  const renderFundsComponent = () => {
    switch (activeTab) {
      case "Contact Us":
        return <TradeContactUs />;
      case "FAQ'S":
        return <TradeFAQS />;
      default:
        break;
    }
  };
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
  return (
    <div>
      <div className="p-4">
        <div className="grid grid-cols-2 md:flex gap-4 mb-4">
          {TradeHelpContentTabs.map((tab) => (
            <TabButton
              key={tab}
              tab={tab}
              isActive={activeTab === tab}
              onClick={() => onTabClick(tab)}
            />
          ))}
        </div>
      </div>
      {renderFundsComponent()}
    </div>
  );
};

export default TradeHelpContent;
