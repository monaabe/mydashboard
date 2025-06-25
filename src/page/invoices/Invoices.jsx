import { Box } from "@mui/material";
import { GridToolbar } from "@mui/x-data-grid/internals";
import React from "react";
import { columns } from "./data";
import { rows } from "./data";
import { DataGrid } from "@mui/x-data-grid";

const Invoices = () => {
  return (
    <Box sx={{ height: 300, width: "98%", mx: "auto" }}>
      <DataGrid
        checkboxSelection
        // @ts-ignore
        // @ts-ignore
        rows={rows}
        // @ts-ignore
        columns={columns}
        // @ts-ignore
        slots={{ toolbar: GridToolbar }}
      />
    </Box>
  );
};
export default Invoices;
