import DemoAccount from "./demo-account";
import LiveAccountsB from "./live-accounts/indexb";
import OpenDemoAccountForm from "./open-demo-account";
import OpenRealAccount from "./open-real-account";
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
const AccountTabsContent = ({ activeTab, onTabClick }) => {
  const accountTabs = [
    "Live Accounts",
    "Demo Accounts",
    "Open Real Accounts",
    "Open Demo Accounts",
  ];

  const renderAccountComponent = () => {
    switch (activeTab) {
      case "Open Demo Accounts":
        return <OpenDemoAccountForm />;
      case "Live Accounts":
        return <LiveAccountsB title={"Live Accounts"} />;
      case "Demo Accounts":
        return <LiveAccountsB title={"Demo Accounts"} />;
        return <DemoAccount />;
      case "Open Real Accounts":
        return <OpenRealAccount />;
      default:
        return null;
    }
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 md:flex gap-4 mb-4">
        {accountTabs.map((tab) => (
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
export default AccountTabsContent;
