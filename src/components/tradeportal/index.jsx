import React, { useState } from "react";

import Accounts from "./accounts";
import Funds from "./funds";
import TradeHistory from "./trade-history";
import Help from "./help";

const TradePortal = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const renderComponent = () => {
    switch (activeComponent) {
      case "A":
        return <Accounts />;
      case "B":
        return <Funds />;
      case "C":
        return <TradeHistory />;
      case "D":
        return <Help />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-red-300 h-full w-full float-right py-4">
      <div className="flex border-2 border-gray-300 text-bold">
        <button
          className="w-full  bg-blue-500 text-white px-4  rounded"
          onClick={() => setActiveComponent("A")}
        >
          Accounts
        </button>
        <button
          className="w-full bg-blue-500 text-white p-2 rounded"
          onClick={() => setActiveComponent("B")}
        >
          Funds
        </button>
        <button
          className="w-full bg-blue-500 text-white p-2 rounded"
          onClick={() => setActiveComponent("C")}
        >
          Trade History
        </button>
        <button
          className="w-full bg-blue-500 text-white p-2 rounded"
          onClick={() => setActiveComponent("D")}
        >
          Help
        </button>
      </div>
      <div className="mt-4">{renderComponent()}</div>
    </div>
  );
};

export default TradePortal;
