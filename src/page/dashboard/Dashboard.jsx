import React from "react";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import { Box, Button } from "@mui/material";
import { DownloadOutlined } from "@mui/icons-material";

const Dashboard = () => {
  return (
    <div>
    <Box sx={{textAlign:"right"}}>
      
      <Button sx={{p:"3px 8px" ,mb:"4px",textTransform:"capitalize"}} variant="contained" color="primary">
        <DownloadOutlined/>
        Download Reports
        </Button>
      <Row1 />
      <Row2 />
      <Row3 />

    </Box>
    </div>
  );
};

export default Dashboard;
