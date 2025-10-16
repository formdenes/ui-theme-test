import type { ThemeOptions } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

export const getThemeOptions = (): ThemeOptions => ({
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
  },
});

export const lightTheme = createTheme(getThemeOptions());

export const darkTheme = createTheme({
  ...getThemeOptions(),
  palette: {
    mode: "dark",
    // ... dark mode overrides
  },
});
