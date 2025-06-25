import { Box, Paper, Stack } from "@mui/material";
import Bar from "../../page/barChart/Bar";
import React from "react";
import Form from "../../page/form/Form";

const Row2 = () => {
  return (
    <Stack
      direction={"row"} flexWrap={"wrap"}       justifyContent={"space-between"} gap={2}

    >
      <Paper sx={{ width:400,mt:"20px" , flexGrow: 1}}>
        <Bar />
      </Paper>

      <Paper sx={{mt:"20px", flexGrow: 1,width:400}}>
        <Form/>
      </Paper>

    </Stack>
  );
};
export default Row2;
