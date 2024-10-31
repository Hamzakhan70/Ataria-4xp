import React from "react";

const LiveAccounts = () => {
  const accountData = [
    {
      id: 1,
      login: 600143,
      accountType: "test (MT5)",
      registrationDate: "23-09-2024 09:58 AM",
      balance: 0,
      equity: 0,
      freeMargin: 0,
      credit: 0,
    },
    {
      id: 2,
      login: 600144,
      accountType: "demo (MT4)",
      registrationDate: "24-09-2024 10:15 AM",
      balance: 1500,
      equity: 1500,
      freeMargin: 500,
      credit: 100,
    },
    {
      id: 3,
      login: 600145,
      accountType: "live (MT5)",
      registrationDate: "25-09-2024 11:30 AM",
      balance: 3000,
      equity: 2800,
      freeMargin: 1000,
      credit: 200,
    },
    {
      id: 4,
      login: 600146,
      accountType: "premium (MT5)",
      registrationDate: "26-09-2024 08:45 AM",
      balance: 5000,
      equity: 4800,
      freeMargin: 1500,
      credit: 300,
    },
  ];
  return (
    <div>
      <div className="">
        <div className="flex flex-wrap space-y-1 md:justify-between md:m-2 md:p-3">
          <div className="border border-black p-1">
            <label>
              Show entries{" "}
              <select
                name="live-accounts-table_length"
                aria-controls="live-accounts-table"
              >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="-1">All</option>
              </select>
            </label>
          </div>
          <div className="dt-buttons">
            {" "}
            <button
              className="border-green-800 border p-1 text-green-600"
              tabindex="0"
              aria-controls="live-accounts-table"
              type="button"
              // fdprocessedid="s1mgr7"
            >
              <span>
                <i class="fa fa-chart-line"></i> Import Trading Accounts
              </span>
            </button>{" "}
            <button
              className="border-blue-600 border p-1 text-blue-600"
              tabindex="0"
              aria-controls="live-accounts-table"
              type="button"
              fdprocessedid="fuej7"
            >
              <span>
                <i class="fa fa-upload"></i> Export to Excel
              </span>
            </button>{" "}
            <button
              className="border-black border p-1 text-black"
              tabindex="0"
              aria-controls="live-accounts-table"
              type="button"
              fdprocessedid="wemb5g"
            >
              <span>
                <i class="fa fa-filter"></i> Filter
              </span>
            </button>{" "}
          </div>
          <div className="dataTables_filter">
            <label>
              <input
                type="search"
                className="border-black border p-1"
                placeholder="Search..."
                aria-controls="live-accounts-table"
              />
            </label>
          </div>
        </div>
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
            {accountData.map((account) => (
              <tr key={account.id}>
                <td className="py-2 px-4 border-b">{account.id}</td>
                <td className="py-2 px-4 border-b">{account.login}</td>
                <td className="py-2 px-4 border-b">{account.accountType}</td>
                <td className="py-2 px-4 border-b">
                  {account.registrationDate}
                </td>
                <td className="py-2 px-4 border-b">{account.balance}</td>
                <td className="py-2 px-4 border-b">{account.equity}</td>
                <td className="py-2 px-4 border-b">{account.freeMargin}</td>
                <td className="py-2 px-4 border-b">{account.credit}</td>
                <td className="py-2 px-4 border-b">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded">
                    ⋮
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LiveAccounts;
