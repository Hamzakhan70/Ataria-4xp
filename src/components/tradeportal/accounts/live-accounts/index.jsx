import React, { useState } from "react";
import "./style.css";
import DataTable from "../../../datatabelbase";

const ExpandedComponent = ({ data }) => (
  <pre>{JSON.stringify(data, null, 2)}</pre>
);

const Export = ({ onExport }) => (
  <button onClick={(e) => onExport(e.target.value)}>Export</button>
);
const columns = [
  {
    name: "Title",
    selector: (row) => row.title,
    sortable: true,
  },
  {
    name: "Year",
    selector: (row) => row.year,
    sortable: true,
  },
  {
    name: "buttons",
    selector: (row) => row.year,
    sortable: true,
  },
];

const data = [
  {
    id: 1,
    title: "Beetlejuice",
    year: "1988",
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
  },
  {
    id: 3,
    title: "Ghostbusters",
    year: "1984",
  },
  {
    id: 4,
    title: "Ghostbusters",
    year: "1984",
  },
  {
    id: 5,
    title: "Ghostbusters",
    year: "1984",
  },
  {
    id: 6,
    title: "Ghostbusters",
    year: "1984",
  },
  {
    id: 7,
    title: "Ghostbusters",
    year: "1984",
  },
  {
    id: 8,
    title: "Ghostbusters",
    year: "1984",
  },
  {
    id: 9,
    title: "Ghostbusters",
    year: "1984",
  },
  {
    id: 10,
    title: "Ghostbusters",
    year: "1984",
  },
  {
    id: 11,
    title: "Ghostbusters",
    year: "1984",
  },
];
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
const LiveAccounts = () => {
  const [filterText, setFilterText] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const actionsMemo = React.useMemo(
    () => <Export onExport={() => downloadCSV(data)} />,
    []
  );


  // converter to excel
  function convertArrayOfObjectsToCSV(array) {
    let result;

    const columnDelimiter = ",";
    const lineDelimiter = "\n";
    const keys = Object.keys(data[0]);

    result = "";
    result += keys.join(columnDelimiter);
    result += lineDelimiter;

    array.forEach((item) => {
      let ctr = 0;
      keys.forEach((key) => {
        if (ctr > 0) result += columnDelimiter;

        result += item[key];

        ctr++;
      });
      result += lineDelimiter;
    });

    return result;
  }
  function downloadCSV(array) {
    const link = document.createElement("a");
    let csv = convertArrayOfObjectsToCSV(array);
    if (csv == null) return;

    const filename = "export.csv";

    if (!csv.match(/^data:text\/csv/i)) {
      csv = `data:text/csv;charset=utf-8,${csv}`;
    }

    link.setAttribute("href", encodeURI(csv));
    link.setAttribute("download", filename);
    link.click();
  }
  // Filter handler
  const handleFilter = (e) => {
    const searchText = e.target.value.toLowerCase();
    setFilterText(searchText);

    // Update filtered data based on search text
    const newFilteredData = data.filter((item) =>
      item.title.toLowerCase().includes(searchText)
    );
    setFilteredData(newFilteredData);
  };
  return (
    <div>
      <h1 className="text-center font-bold">demo table</h1>

      {/* <div className="entries-dropdown">
        <label>
          Show entries:&nbsp;
          <select
            value={rowsPerPage}
            onChange={(e) => setRowsPerPage(Number(e.target.value))}
            style={{ padding: "5px", borderRadius: "4px" }}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </select>
        </label>
      </div>
      <input
        type="text"
        placeholder="Filter by Title"
        value={filterText}
        onChange={handleFilter}
        style={{
          marginBottom: "10px",
          padding: "8px",
          width: "200px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      /> */}
      <DataTable
        columns={columns}
        data={filteredData}
        selectableRows
        expandableRows
        expandableRowsComponent={ExpandedComponent}
        actions={actionsMemo}
      />
    </div>
  );
};

export default LiveAccounts;
