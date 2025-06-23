import {
  Avatar,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Typography,
} from "@mui/material";
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import CalendarViewMonthOutlinedIcon from '@mui/icons-material/CalendarViewMonthOutlined';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
/*import InboxIcon from "@mui/icons-material/Inbox";*/
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
/*import MailIcon from "@mui/icons-material/Mail";*/
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { useTheme } from "@mui/material/styles";
/*import {
  BarChartOutlined,
  CalendarTodayOutlined,
  ContactsOutlined,
  HomeOutlined,
  LiveHelpOutlined,
  ManageAccountsOutlined,
  MapOutlined,
  PersonOutlineOutlined,
  PieChartOutlined,
  ReceiptLongOutlined,
  TimelineOutlined,
} from "@mui/icons-material";*/
 import MuiDrawer from '@mui/material/Drawer';

import { useNavigate } from "react-router-dom";
import React from "react";
import  ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  };
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

const Array1 = [
  { text: "Dashboard",icon:<HomeOutlinedIcon/>  ,path: "/" },
  { text: "Manage Team",icon:<GroupsOutlinedIcon/>,  path: "/team" },
  { text: "Contacts",icon:<ContactsOutlinedIcon/>, path: "/contacts" },
  {
    text: "Invoices Balances",
    icon:<DescriptionOutlinedIcon/>,
    path: "/invoices",
  },
];

const Array2 = [
  { text: "ProfileForm",icon:< ReceiptOutlinedIcon />,  path: "/form" },
  { text: "Calendar",icon:<CalendarViewMonthOutlinedIcon />, path: "/calendar" },
  { text: "FaQ Page",icon:<LiveHelpOutlinedIcon />, path: "/faq" },
];

const Array3 = [
  { text: "Bar Chart",icon:<BarChartOutlinedIcon  />,  path: "/bar" },
  { text: "Pie Chart",icon:<PieChartOutlineOutlinedIcon />,  path: "/pie" }
  /*{ text: "Geography Chart",  path: "/line" },*/
];

const SideBar = ({ open, handleDrawerClose }) => {
  const navigate = useNavigate();

  const theme = useTheme();

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>

      <Divider />
      <Avatar
        sx={{
          mx: "auto",
          width: open ? 88 : 44,
          height: open ? 88 : 44,
          border: "2px gray solide ",
          my: "1",
          transition: "0.25s",
        }}
        alt="Cindy Baker"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQabvlv3A9IEvy1ELgSLj0oMcZoABvIek6gdQ&s"
      />
      <Typography
        align="center"
        sx={{ fontSize: open ? 17 : 0, transition: ".025s" }}
      >
        Mona Abed
      </Typography>
      <Typography
        align="center"
        sx={{
          fontSize: open ? 15 : 0,
          transition: "0.25s",
          color: theme.palette.info.main,
        }}
      >
        Admin
      </Typography>

      <Divider />
      <List>
        {Array1.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => {
                navigate(item.path);
              }}
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                  bgcolor: 
                  'ButtonShadow',
                },
                open
                  ? {
                      justifyContent: "initial",
                    }
                  : {
                      justifyContent: "center",
                    },
              ]}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: "center",
                  },
                  open
                    ? {
                        mr: 3,
                      }
                    : {
                        mr: "auto",
                      },
                ]}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={[
                  open
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      },
                ]}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />
      <List>
        {Array2.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => {
                navigate(item.path);
              }}
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                    bgcolor: 
                  'ButtonShadow',
                },
                open
                  ? {
                      justifyContent: "initial",
                    }
                  : {
                      justifyContent: "center",
                    },
              ]}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: "center",
                      bgcolor: 
                  'grey[900]',
                  },
                  open
                    ? {
                        mr: 3,
                      }
                    : {
                        mr: "auto",
                      },
                ]}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={[
                  open
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      },
                ]}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />
      <List>
        {Array3.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => {
                navigate(item.path);
              }}
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                },
                open
                  ? {
                      justifyContent: "initial",
                    }
                  : {
                      justifyContent: "center",
                    },
              ]}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: "center",
                  },
                  open
                    ? {
                        mr: 3,
                      }
                    : {
                        mr: "auto",
                      },
                ]}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={[
                  open
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      },
                ]}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideBar;
