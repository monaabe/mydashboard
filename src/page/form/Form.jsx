import { Box, Stack, TextField } from "@mui/material";
import React from "react";

const Form = () => {
  return (
    <Box
      component="form"
      sx={{ display: "flex", flexDirection: "column", gap: 3 }}
      noValidate
      autoComplete="off"
    >
      <Stack direction={'row'} sx={{gap:2}}>
        <TextField sx={{flex:1}} label="Firstname" variant="filled" />
        <TextField sx={{flex:1}} label="Lastname" variant="filled" />
      </Stack>

      <TextField  label="Email" variant="filled" />
      <TextField  label="Contact Number" variant="filled" />
      <TextField  label="Adress1" variant="filled" />
      <TextField  label="Adress2" variant="filled" />
    </Box>
  );
};
export default Form;
