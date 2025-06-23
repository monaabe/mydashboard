import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { rows,columns } from "./data";
// @ts-ignore
import React from "react";
import { GridToolbar } from "@mui/x-data-grid/internals";


const Contacts = () => {


  return (

    <Box sx={{ height: 300, width: '98%', mx:"auto" }}>
      <DataGrid 
      // @ts-ignore
        // @ts-ignore
        rows={rows}
        // @ts-ignore
        columns={columns}

                // @ts-ignore
                slots={{ toolbar:  GridToolbar }}

        
      />
    </Box>

  );
};
export default Contacts;
