import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

function ButtonAppBar(props: any) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
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

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
function App() {
  return (
    <div className="App">
      <ButtonAppBar>
        <Link to="/About"> About Me</Link>
        <Link to="/Portfolio"> Portfolio </Link>
        <Link to="/Test"> Test </Link>
      </ButtonAppBar>
      <header className="App-header"></header>
    </div>
  );
}

export default App;
