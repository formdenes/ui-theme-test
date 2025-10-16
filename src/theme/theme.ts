import type { ThemeOptions } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

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
    fontFamily: '"HclTechRoobert", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 600,
    },
    // ... all typography settings
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'HclTechRoobert';
          font-style: normal;
          font-weight: 300;
          font-display: swap;
          src: url('/assets/fonts/hcltechroobert-light.woff2') format('woff2');
        }
        @font-face {
          font-family: 'HclTechRoobert';
          font-style: italic;
          font-weight: 300;
          font-display: swap;
          src: url('/assets/fonts/hcltechroobert-lightitalic.woff2') format('woff2');
        }
        @font-face {
          font-family: 'HclTechRoobert';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url('/assets/fonts/hcltechroobert-regular.woff2') format('woff2');
        }
        @font-face {
          font-family: 'HclTechRoobert';
          font-style: italic;
          font-weight: 400;
          font-display: swap;
          src: url('/assets/fonts/hcltechroobert-regularitalic.woff2') format('woff2');
        }
        @font-face {
          font-family: 'HclTechRoobert';
          font-style: normal;
          font-weight: 500;
          font-display: swap;
          src: url('/assets/fonts/hcltechroobert-medium.woff2') format('woff2');
        }
        @font-face {
          font-family: 'HclTechRoobert';
          font-style: italic;
          font-weight: 500;
          font-display: swap;
          src: url('/assets/fonts/hcltechroobert-mediumitalic.woff2') format('woff2');
        }
        @font-face {
          font-family: 'HclTechRoobert';
          font-style: normal;
          font-weight: 600;
          font-display: swap;
          src: url('/assets/fonts/hcltechroobert-semibold.woff2') format('woff2');
        }
        @font-face {
          font-family: 'HclTechRoobert';
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: url('/assets/fonts/hcltechroobert-bold.woff2') format('woff2');
        }
        @font-face {
          font-family: 'HclTechRoobert';
          font-style: italic;
          font-weight: 700;
          font-display: swap;
          src: url('/assets/fonts/hcltechroobert-bolditalic.woff2') format('woff2');
        }
        @font-face {
          font-family: 'HclTechRoobert';
          font-style: normal;
          font-weight: 800;
          font-display: swap;
          src: url('/assets/fonts/hcltechroobert-extrabold.woff2') format('woff2');
        }
        @font-face {
          font-family: 'HclTechRoobert';
          font-style: italic;
          font-weight: 800;
          font-display: swap;
          src: url('/assets/fonts/hcltechroobert-extrabolditalic.woff2') format('woff2');
        }
        @font-face {
          font-family: 'HclTechRoobert';
          font-style: normal;
          font-weight: 900;
          font-display: swap;
          src: url('/assets/fonts/hcltechroobert-heavy.woff2') format('woff2');
        }
        @font-face {
          font-family: 'HclTechRoobert';
          font-style: italic;
          font-weight: 900;
          font-display: swap;
          src: url('/assets/fonts/hcltechroobert-heavyitalic.woff2') format('woff2');
        }
      `,
    },
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
    MuiTabs: {
      styleOverrides: {
        indicator: {
          display: 'none',
        },
        root: {
          background: "#F7FAFC",
          borderRadius: "12px",
          display: "inline-flex",
          height: "40px",
          minHeight: "auto",
          padding: 0,
          width: "auto",
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          alignItems: "center",
          border: "1px solid transparent",
          borderRadius: "12px",
          color: "#1a1a1a",
          fontSize: "12.25px",
          margin: ".25rem",
          minHeight: "auto",
          minWidth: "126px",
          padding: "7px 10.5px",
          textTransform: "capitalize",
          "&.Mui-selected": {
            backgroundColor: "white",
            borderColor: "white",
            boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);",
            color: "inherit"
          },
        }
      }
    },
    MuiTouchRipple: {
      styleOverrides: {
        root: {
          '& .MuiTouchRipple-child': {
            backgroundColor: "rgba(0, 0, 0, 0.2)"
          }
        }
      }
    }
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
