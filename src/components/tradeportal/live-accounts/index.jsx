import React from "react";

const LiveAccounts = () => {
  return (
    <div>
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
};

export default LiveAccounts;
