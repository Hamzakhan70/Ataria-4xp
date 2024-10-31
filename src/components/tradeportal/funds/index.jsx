import React from "react";
import FundsDeposit from "./deposit";
import Withdraw from "./withdraw";
import Transfer from "./transfer";
import WalletHistory from "./wallet-history";
import LiveAccounts from "../accounts/live-accounts";

const FundsTabsContent = ({ activeTab, onTabClick }) => {
  const tradeFundsTabs = ["Deposit", "Withdraw", "Transfer", "Wallet History"];
  const renderFundsComponent = () => {
    switch (activeTab) {
      case "Deposit":
        return <FundsDeposit name={"Deposit"} />;
      case "Withdraw":
        return <FundsDeposit name={"Withdraw"} />;
        return <Withdraw />;
      case "Transfer":
        return <FundsDeposit name={"Transfer"} />;
        return <Transfer />;
      case "Wallet History":
        return <LiveAccounts />;
        return <WalletHistory />;

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
          {tradeFundsTabs.map((tab) => (
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

export default FundsTabsContent;
