import { Paper, Stack, Typography,useTheme } from "@mui/material";
import React from "react";
import Card from "./Card";
import { DonutLarge, DonutSmall, Email, PersonAdd, PointOfSale, Traffic } from "@mui/icons-material";

const Row1 = () => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      gap={1}
      justifyContent={"space-between"}
    >
      <Card
        icon={<Email sx={{ color: theme.palette.primary.main }} />}
        title={12.786}
        subTitle={"Emails Sent"}
      chart={<DonutLarge sx={{ color: theme.palette.primary.light,fontSize:"50px"  }} />}
        incraese={"+14%"}
      />

      <Card
       icon={<PointOfSale sx={{ color: theme.palette.primary.main }} />}
        title={"12,454"}
        subTitle={"Sales Obtained"}
        chart={<DonutSmall sx={{ color: theme.palette.error.main,fontSize:"50px" }}/>}
        incraese={"+21%"}
      />

      <Card
        icon={<PersonAdd sx={{ color: theme.palette.primary.main }} />}
        title={"16, 878"}
        subTitle={"New Clients"}
        chart={<DonutLarge sx={{ color: theme.palette.warning.main ,fontSize:"50px" }}/>}
        incraese={"+17%"}
      />

      <Card
        icon={<Traffic sx={{ color: theme.palette.primary.main }} />}
        title={78.987}
        subTitle={"Traffic Receipe"}
       chart={<DonutSmall sx={{ color: theme.palette.success.main ,fontSize:"50px" }}/>}
        incraese={"+18%"}
      />
    </Stack>
  );
};
export default Row1;
