import React, { useState, useRef } from "react";
import { styled, useTheme } from "@mui/material/styles";
import { Link, Outlet } from "react-router-dom";
import { icons } from "./icons";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import {
  Box,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  Divider,
  List,
  FormControlLabel,
  Switch,
  ListItem,
  Dialog,
  DialogTitle,
  DialogContent,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { ColorPicker, Color } from "mui-color";
import { useThemeUpdate, useColorPicker } from "./ThemeContext";
import useMediaQuery from "@mui/material/useMediaQuery";
import ListItemText from "@mui/material/ListItemText";

const {
  GitHubIcon,
  LinkedInIcon,
  FacebookOutlinedIcon,
  MenuIcon,
  Brightness4Icon,
  ChevronLeftIcon,
  ChevronRightIcon,
  Brightness5OutlinedIcon,
} = icons;

const iconItems = [
  {
    iconname: "github",
    href: "https://github.com/tonyxqing",
    icon: <GitHubIcon />,
  },
  {
    iconname: "linkedin",
    href: "https://www.linkedin.com/in/tony-qing-123600192/",
    icon: <LinkedInIcon />,
  },
  {
    iconname: "facebook",
    href: "https://www.facebook.com/tony.qing.904/",
    icon: <FacebookOutlinedIcon />,
  },
];

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.background.default,
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    background: theme.palette.background.default,
    color: theme.palette.background.default,
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
  background: theme.palette.background.default,
  color: theme.palette.background.default,
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    background: theme.palette.background.default,
    color: theme.palette.background.default,
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
  background: theme.palette.background.default,
  color: theme.palette.background.default,
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

function App() {
  const theme = useTheme();

  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const handleDrawerOpen = () => setOpenDrawer(true);
  const handleDrawerClose = () => setOpenDrawer(false);

  const [openColorPicker, setOpenColorPicker] = useState<boolean>(false);

  const handleColorPickerClose = () => {
    setOpenColorPicker(false);
  };

  const chooseColor = useColorPicker();

  const [nightMode, setNightMode] = useState<boolean>(() => {
    const saved = localStorage.getItem("nightmode");
    const loaded = JSON.parse(saved!);
    return loaded || false;
  });

  React.useEffect(() => {
    localStorage.setItem("nightmode", JSON.stringify(nightMode));
  }, [nightMode]);
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const [pickToggleBtn, setPickToggleBtn] = React.useState<{
    name: string;
    color: any;
    update: (color: Color) => void;
  }>({
    name: "border",
    color: theme.palette.primary.main,
    update: chooseColor.pickMainColor,
  });
  const colorPickerItems = [
    {
      name: "border",
      color: theme.palette.primary.main,
      update: chooseColor.pickMainColor,
    },
    {
      name: "background",
      color: theme.palette.background.default,
      update: chooseColor.pickDefaultColor,
    },

    {
      name: "text",
      color: theme.palette.text.primary,
      update: chooseColor.pickPrimaryColor,
    },
    {
      name: "subtext",
      color: theme.palette.text.secondary,

      update: chooseColor.pickSecondaryColor,
    },
    {
      name: "this",
      color: theme.palette.background.paper,
      update: chooseColor.pickPaperColor,
    },
  ];
  const toggleTheme = useThemeUpdate();

  return (
    <div className="App">
      <ClickAwayListener onClickAway={handleDrawerClose}>
        <Box>
          <AppBar position="static" open={openDrawer}>
            <Toolbar sx={{ backgroundColor: "primary.main" }}>
              {!matches ? (
                <IconButton
                  sx={{
                    color: "text.primary",
                  }}
                  size="large"
                  edge="start"
                  aria-label="menu"
                  onClick={handleDrawerOpen}
                >
                  <MenuIcon />
                </IconButton>
              ) : (
                <>
                  {["", "About", "Portfolio", "Contact"].map((text) => (
                    <Link to={`/${text.toLowerCase()}`}>
                      <Button
                        sx={{
                          color: "text.primary",
                          textTransform: "capitalize",
                          fontWeight: "bold",
                        }}
                      >
                        {text === "" ? "Home" : text}
                      </Button>
                    </Link>
                  ))}
                  <div style={{ flexGrow: 1 }}></div>
                  <FormControlLabel
                    sx={{
                      justifyContent: "center",
                      alignItems: "end",
                      paddingRight: 3,
                      color: "text.primary",
                    }}
                    value="night mode"
                    label={
                      !nightMode ? (
                        <Brightness5OutlinedIcon />
                      ) : (
                        <Brightness4Icon />
                      )
                    }
                    labelPlacement="start"
                    control={<Switch defaultChecked color="warning" />}
                    checked={nightMode}
                    onChange={() => {
                      setNightMode(!nightMode);
                      toggleTheme.toggleColorMode();
                    }}
                  />

                  {iconItems.map((item, i) => (
                    <IconButton
                      size="large"
                      edge="start"
                      sx={
                        i !== iconItems.length - 1
                          ? { mr: 2, color: "text.primary" }
                          : { color: "text.primary" }
                      }
                      href={item.href}
                      target="_blank"
                    >
                      {item.icon}
                    </IconButton>
                  ))}
                </>
              )}
            </Toolbar>
          </AppBar>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
                backgroundColor: "primary.main",
                color: "white",
              },
            }}
            variant="persistent"
            anchor="left"
            open={openDrawer}
          >
            <DrawerHeader sx={{ color: "background.default" }}>
              <IconButton
                sx={{ color: "text.primary" }}
                onClick={handleDrawerClose}
              >
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </DrawerHeader>
            <Divider />
            <FormControlLabel
              sx={{
                justifyContent: "start",
                alignItems: !matches ? "center" : "end",
                color: "text.primary",
              }}
              value="night mode"
              label={
                !nightMode ? <Brightness5OutlinedIcon /> : <Brightness4Icon />
              }
              labelPlacement="start"
              control={<Switch defaultChecked color="warning" />}
              checked={nightMode}
              onChange={() => {
                setNightMode(!nightMode);
                toggleTheme.toggleColorMode();
              }}
            />
            <Divider />
            <List>
              {["", "About", "Portfolio", "Contact"].map((text) => (
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/${text.toLowerCase()}`}
                >
                  <ListItem
                    button
                    key={text}
                    sx={{ color: "text.primary", textTransform: "capitalize" }}
                  >
                    <ListItemText
                      primary={text === "" ? "Home" : text}
                    ></ListItemText>
                  </ListItem>
                </Link>
              ))}

              <Divider />
              <Box
                sx={{
                  paddingLeft: theme.spacing(2),
                  paddingRight: theme.spacing(2),
                  border: "text.secondary",
                }}
              >
              </Box>
              <Dialog
                hideBackdrop
                open={openColorPicker}
                onClose={handleColorPickerClose}
              >
                <DialogTitle>Pick a color</DialogTitle>
                <DialogContent>
                  <ToggleButtonGroup
                    value={pickToggleBtn}
                    exclusive
                    onChange={(e, val) => {
                      setPickToggleBtn(val);
                    }}
                  >
                    {colorPickerItems.map((item) => {
                      return (
                        <ToggleButton value={item}>{item.name}</ToggleButton>
                      );
                    })}
                  </ToggleButtonGroup>
                  <Divider sx={{ margin: theme.spacing(2) }} />
                  <ColorPicker
                    value={pickToggleBtn.color}
                    onChange={(color: any) => {
                      pickToggleBtn.update(color);
                    }}
                  ></ColorPicker>
                </DialogContent>
              </Dialog>
            </List>
            <div style={{ flexGrow: 1 }}></div>
            <Box
              sx={{
                display: "flex",
                margin: theme.spacing(2),
                justifyContent: "space-evenly",
              }}
            >
              {iconItems.map((item, i) => (
                <IconButton
                  size="large"
                  edge="start"
                  sx={
                    i !== iconItems.length - 1
                      ? { mr: 2, color: "text.primary" }
                      : { color: "text.primary" }
                  }
                  href={item.href}
                  target="_blank"
                >
                  {item.icon}
                </IconButton>
              ))}
            </Box>
          </Drawer>
        </Box>
      </ClickAwayListener>

      <Main
        open={openDrawer}
        sx={{
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Box
          sx={{
            justifyContent: "start",
            textAlign: "start",
            paddingLeft: theme.spacing(27),
            background: theme.palette.background.default,
            margin: theme.spacing(4),
          }}
        >
          <Outlet />
        </Box>
      </Main>
    </div>
  );
}

export default App;
