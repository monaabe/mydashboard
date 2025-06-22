import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./data";
import { Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';


const Team = () => {
  const theme = useTheme();

  const columns = [
    {
      field: "id",
      headerName: "ID",
      align: "center",
      headerAlign: "center",flex:1

    },
    {
      field: "name",
      headerName: "Name",
      align: "center",
      headerAlign: "center",flex:1
    },
    {
      field: "email",
      headerName: "Email",
      align: "center",
      headerAlign: "center",flex:1
    },
    {
      field: "phone",
      headerName: "Phone",
      align: "center",
      headerAlign: "center",flex:1
    },
    {
      field: "age",
      headerName: "Age",
      align: "center",

      headerAlign: "center",flex:1
    },
    {
      field: "access",
      headerName: "Access",
      align: "center",
      headerAlign: "center",flex:1.9,
      // @ts-ignore
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              backgroundColor:
                access === "admin"
                  ? theme.palette.primary.dark
                  : access === "manager"
                  ? theme.palette.secondary.dark
                  : "#3da58a",

              p: "5px",
              width: "99px",
              borderRadius: "3px",
              textAlign: "center",
              mx: "auto",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            {access === "admin" && (
              <AdminPanelSettingsOutlinedIcon fontSize="small" />
            )}

                        {access === "manager" && (
              <SecurityOutlinedIcon fontSize="small" />
            )}

            {access === "user" && (
              <LockOpenOutlinedIcon   fontSize="small" />
              
            )}

            <Typography sx={{ fontSize: "13px", fontWeight: "bold" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box sx={{ height: 300, width: '98%', mx:"auto" }}>
      <DataGrid 
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
  );
};

export default Team;
