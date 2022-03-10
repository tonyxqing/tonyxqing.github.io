import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link, Outlet } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { icons } from "./icons";

const {
  GitHubIcon,
  LinkedInIcon,
  FacebookOutlinedIcon,
  SettingsOutlinedIcon,
  MenuIcon,
} = icons;
function ButtonAppBar(props: any) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: "#2c2c2c" }} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          {props.children.map((child: any) => {
            return <Button color="inherit">{child}</Button>;
          })}
          <div style={{ flexGrow: 1 }}></div>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            href="https://github.com/tonyxqing"
            target="_blank"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            href="https://www.linkedin.com/in/tony-qing-123600192/"
            target="_blank"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            href="https://www.facebook.com/tony.qing.904/"
            target="_blank"
          >
            <FacebookOutlinedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
function App() {
  return (
    <div className="App">
      <ButtonAppBar>
        <Link className="App-link" to="/About">
          About Me
        </Link>
        <Link className="App-link" to="/Portfolio">
          Portfolio
        </Link>
        <Link className="App-link" to="/Demos">
          Demos
        </Link>
      </ButtonAppBar>
      <Outlet />
    </div>
  );
}

export default App;