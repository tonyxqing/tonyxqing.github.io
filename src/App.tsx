import React, { useState, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import { styled, useTheme } from "@mui/material/styles";
import { Link, Outlet } from "react-router-dom";
import { icons } from "./icons";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import {
  Box,
  Toolbar,
  Button,
  Typography,
  IconButton,
  Drawer,
  Divider,
  List,
  ListItemIcon,
  Switch,
  ListItem,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const {
  GitHubIcon,
  LinkedInIcon,
  FacebookOutlinedIcon,
  SettingsOutlinedIcon,
  MenuIcon,
} = icons;
function ButtonAppBar(props: any) {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const handleDrawerOpen = () => setOpenDrawer(true);
  const handleDrawerClose = () => setOpenDrawer(false);
  const theme = useTheme();
  const iconItems = [
    { href: "https://github.com/tonyxqing", icon: <GitHubIcon /> },
    {
      href: "https://www.linkedin.com/in/tony-qing-123600192/",
      icon: <LinkedInIcon />,
    },
    {
      href: "https://www.facebook.com/tony.qing.904/",
      icon: <FacebookOutlinedIcon />,
    },
  ];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: "#2c2c2c" }} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          {props.children.map((child: any) => {
            return <Button color="inherit">{child}</Button>;
          })}
          <div style={{ flexGrow: 1 }}></div>
          {iconItems.map((item, i) => (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={i !== iconItems.length - 1 ? { mr: 2 } : {}}
              href={item.href}
              target="_blank"
            >
              {item.icon}
            </IconButton>
          ))}
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#2c2c2c",
            color: "white",
          },
        }}
        variant="persistent"
        anchor="left"
        open={openDrawer}
      >
        <DrawerHeader sx={{ color: "white" }}>
          <IconButton color="inherit" onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <div style={{ display: "flex-inline" }}>
          <Typography paragraph> night mode </Typography>{" "}
          <Switch defaultChecked color="warning" />
        </div>

        <Divider />
        <List>
          {["Home", "About", "Portfolio", "Demos", "Contact"].map(
            (text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            )
          )}
        </List>
      </Drawer>
    </Box>
  );
}
function App() {
  return (
    <div className="App">
      <ButtonAppBar>
        <Link className="App-link" to="/about">
          About
        </Link>
        <Link className="App-link" to="/portfolio">
          Portfolio
        </Link>
        <Link className="App-link" to="/demos">
          Demos
        </Link>
      </ButtonAppBar>
      <Outlet />
    </div>
  );
}

export default App;
