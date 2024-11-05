// import { Button } from "./Button";

// export default {
//   component: Button,
// };
import DataTable from "react-data-table-component";
import React, { useState } from "react";

const MyCustomTable = ({ columns, data }) => {
  // State for items per page
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Custom Header Component for the top-left items-per-page control
  const CustomHeader = () => (
    <div className="flex justify-start p-2">
      <label htmlFor="topItemsPerPage">Options for items per page:</label>
      <select
        id="topItemsPerPage"
        className="ml-2"
        value={itemsPerPage}
        onChange={(e) => setItemsPerPage(Number(e.target.value))}
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
      </select>
      <button>add me</button>
      <button>delete me</button>
    </div>
  );

  // Custom Pagination Component for the bottom-left control
  const CustomPagination = ({ rowCount, currentPage, onChangePage }) => (
    <div className="flex justify-between p-2">
      <div>
        <label>Default items per page: </label>
        <select
          value={itemsPerPage}
          onChange={(e) => setItemsPerPage(Number(5))}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </div>
      <div>{/* Add your custom pagination buttons here */}</div>
    </div>
  );

  return (
    <div className="dataTable-wrapper">
      <CustomHeader />
      <DataTable
        columns={columns}
        data={data}
        pagination
        paginationComponent={() => (
          <CustomPagination
            rowCount={data.length}
            currentPage={1} // Customize page control if needed
            onChangePage={() => {}} // Handle page change
          />
        )}
        paginationRowsPerPageOptions={[5, 10, 20]}
        paginationPerPage={itemsPerPage}
        // Hide default pagination controls
        paginationComponentOptions={{
          noRowsPerPage: true,
        }}
      />
    </div>
  );
};
export default MyCustomTable;
