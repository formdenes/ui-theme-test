import { createTheme, ThemeOptions } from "@mui/material/styles";

export const getThemeOptions = (): ThemeOptions => ({
  palette: {
    primary: {
      main: "#aa19d2ff",
      light: "#42f55aff",
      dark: "#544824ff",
    },
    secondary: {
      main: "#dc004e",
    },
    // ... all your color definitions
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 600,
    },
    // ... all typography settings
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
        },
      },
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    // ... all component customizations
  },
  spacing: 8, // base spacing unit
});

export const lightTheme = createTheme(getThemeOptions());

export const darkTheme = createTheme({
  ...getThemeOptions(),
  palette: {
    mode: "dark",
    // ... dark mode overrides
  },
});
