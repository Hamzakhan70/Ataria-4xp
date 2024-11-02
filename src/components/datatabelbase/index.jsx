import React from "react";
import DataTable from "react-data-table-component";
// import Checkbox from "@material-ui/core/Checkbox";
import Checkbox from "@mui/material/Checkbox";
import ArrowDownward from "@mui/icons-material/ArrowDownward";
import "./style.css";
const sortIcon = <ArrowDownward />;
const selectProps = { indeterminate: (isIndeterminate) => isIndeterminate };

function DataTableBase(props) {
  return (
    <DataTable
      pagination
      paginationComponentOptions={{
        rowsPerPageText: "Show entries",
        rangeSeparatorText: "of",
      }}
      paginationClassName="custom-pagination"
      selectableRowsComponent={Checkbox}
      selectableRowsComponentProps={selectProps}
      sortIcon={sortIcon}
      dense
      {...props}
    />
  );
}

export default DataTableBase;
