import { createTheme, ThemeProvider } from "@mui/material/styles";
import { PaletteMode, PaletteOptions, Box } from "@mui/material";
import React, { useContext, useMemo } from "react";
import { Color, createColor } from "mui-color";
import { grey, amber } from "@mui/material/colors";
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const ColorPickerContext = React.createContext({
  pickMainColor: (color: Color) => {},
  pickDefaultColor: (color: Color) => {},
  pickPaperColor: (color: Color) => {},
  pickPrimaryColor: (color: Color) => {},
  pickSecondaryColor: (color: Color) => {},
});

export function useThemeUpdate() {
  return useContext(ColorModeContext);
}

export function useColorPicker() {
  return useContext(ColorPickerContext);
}

export default function ThemeContext({ children }: { children: JSX.Element }) {
  const [mode, setMode] = React.useState<PaletteMode>("light");
  const ColorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );
  console.log("yo I just re rendered");

  const [main, setMain] = React.useState(createColor("#FDF9BB"));
  const [background, setBackground] = React.useState(createColor("#FCFCE3"));
  const [paper, setPaper] = React.useState(createColor(amber[500]));
  const [primary, setPrimary] = React.useState(createColor("#B1953A"));
  const [secondary, setSecondary] = React.useState(createColor("#1C0101"));
  const ColorPicker = React.useMemo(
    () => ({
      pickMainColor: (color: Color) => {
        setMain(color);
      },
      pickDefaultColor: (color: Color) => {
        setBackground(color);
      },
      pickPaperColor: (color: Color) => {
        setPaper(color);
      },
      pickPrimaryColor: (color: Color) => {
        setPrimary(color);
      },
      pickSecondaryColor: (color: Color) => {
        setSecondary(color);
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            ...amber,
            ...(mode === "light"
              ? {
                  main: main.css.backgroundColor,
                }
              : {
                  main: grey[900],
                }),
          },
          ...(mode === "light"
            ? {
                background: {
                  default: background.css.backgroundColor,
                  paper: paper.css.backgroundColor,
                },
              }
            : {
                background: {
                  default: grey[700],
                  paper: grey[700],
                },
              }),
          text: {
            ...(mode === "light"
              ? {
                  primary: primary.css.backgroundColor,
                  secondary: secondary.css.backgroundColor,
                }
              : {
                  primary: grey[300],
                  secondary: grey[200],
                }),
          },
        },
      }),
    [mode, main, background, paper, primary, secondary]
  );

  return (
    <ColorPickerContext.Provider value={ColorPicker}>
      <ColorModeContext.Provider value={ColorMode}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </ColorModeContext.Provider>
    </ColorPickerContext.Provider>
  );
}
