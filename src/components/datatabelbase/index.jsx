import React,{useState} from "react";
import DataTable from "react-data-table-component";
// import Checkbox from "@material-ui/core/Checkbox";
import Checkbox from "@mui/material/Checkbox";
import ArrowDownward from "@mui/icons-material/ArrowDownward";
import "./style.css";
const sortIcon = <ArrowDownward />;
const selectProps = { indeterminate: (isIndeterminate) => isIndeterminate };
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
const paginationComponentOptions = {
  rowsPerPageText: 'show rows',
  rangeSeparatorText: 'of',
  selectAllRowsItem: true,
  selectAllRowsItemText: '',
};
// Custom Pagination Component
const CustomPagination = ({currentPage, paginationProps, pageRange, rowsPerPage }) => (
  <div className="custom-pagination">
    <div className="pagination-top-left">
      <label>{paginationComponentOptions.rowsPerPageText}</label>
      <select
        onChange={e => paginationProps.onChangeRowsPerPage(Number(e.target.value))}
        value={rowsPerPage}
      >
        {[10, 20, 30, 50, 100].map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>

    <div className="pagination-bottom-left">
    <span>
        showing {pageRange[0]} to {rowsPerPage}  {paginationComponentOptions.rangeSeparatorText} {pageRange[1]} entries
      </span>
    </div>

    <div className="pagination-bottom-right">
      <label>{paginationComponentOptions.selectAllRowsItemText}</label>
      <div className="pagination-container">
        <button
          className="btn-pagination"
          // onClick={() => setCurrentPage(currentPage - 1)}
          // disabled={currentPage === 1}
        >
          ‹
        </button>
        {currentPage}
        <button
          className="btn-pagination"
          // onClick={() => setCurrentPage(currentPage + 1)}
          // disabled={currentPage === page}
        >
          ›
        </button>
      </div>
    </div>
  </div>
);
function DataTableBase(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const totalRows = data.length;

  // Calculate pageRange based on current page and rows per page
  const pageRange = [
    (currentPage - 1) * rowsPerPage + 1,
    Math.min(currentPage * rowsPerPage, totalRows),
  ];
  const paginationProps = {
    onChangePage: (page) => setCurrentPage(page),
    onChangeRowsPerPage: (newRowsPerPage) => {
      setRowsPerPage(newRowsPerPage);
      setCurrentPage(1); // Reset to the first page when rows per page changes
    },
    pageRange: pageRange,
    selectAllRows: false, // Default state for select all rows
    onChangeSelectAllRows: (isSelected) => {
      console.log("Select all rows:", isSelected);
    }}

  return (
    <DataTable
      title="Example Table"
      columns={columns}
      data={data}
      sortIcon={sortIcon}
      selectableRowsComponent={Checkbox}
      selectableRowsComponentProps={selectProps}
      pagination
      paginationPerPage={rowsPerPage}
      paginationTotalRows={totalRows}
      paginationComponentOptions={paginationComponentOptions}
      paginationComponent={() => (
        <CustomPagination currentPage={currentPage} paginationProps={paginationProps} pageRange={pageRange} rowsPerPage={rowsPerPage} />
      )}
      onChangePage={paginationProps.onChangePage}
      onChangeRowsPerPage={paginationProps.onChangeRowsPerPage}
    />
  );
}

export default DataTableBase;
