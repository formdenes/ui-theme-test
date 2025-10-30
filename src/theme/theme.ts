import type { ThemeOptions } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { AccordionExpandIcon } from "../components/CustomComponents";
import React from "react";

// HCL Color Palette - exported for use in custom components
export const colors = {
  purple: {
    50: "#E2D9FB",
    100: "#C5B4F7",
    200: "#A98EF4",
    300: "#8C69F0",
    400: "#8258E8",
    500: "#7647DD", // Mid Purple
    600: "#6B35D3",
    700: "#5F1EBE", // Tech Purple
    800: "#4c189e",
    900: "#411482", // Dark Purple
  },
  blue: {
    50: "#D7ECFD",
    100: "#B4DBFC",
    200: "#8CC8FA",
    300: "#6EB8F9",
    400: "#4B9EF9",
    500: "#3C91FF", // Tech Blue
    600: "#3282FA",
    700: "#2874f0",
    800: "#0f5fdc", // Dark Blue
    900: "#0049B2",
  },
  teal: {
    50: "#d2f2ed",
    100: "#a5e6dc",
    200: "#8adbcf",
    300: "#6fcfbf",
    400: "#4bc3af",
    500: "#33afa0",
    600: "#2ba096",
    700: "#198e88",
    800: "#007873", // Dark Teal
    900: "#006059",
  },
  green: {
    50: "#def5d9",
    100: "#beebb4",
    200: "#a1e596",
    300: "#82dc73",
    400: "#62d16b",
    500: "#49c173",
    600: "#2db26c",
    700: "#0fa069", // Dark Green
    800: "#0a875d",
    900: "#077251",
  },
  yellow: {
    50: "#fff2d9",
    100: "#ffe6b4",
    200: "#ffe18d",
    300: "#ffd970",
    400: "#ffcd41",
    500: "#f2bb33",
    600: "#e2ab30",
    700: "#d8991d",
    800: "#c8870a", // Dark Yellow
    900: "#ad6f0b",
  },
  coral: {
    50: "#ffdeeb",
    100: "#ffbed7",
    200: "#ffaecb",
    300: "#ff94b5",
    400: "#ff789b",
    500: "#f7668f",
    600: "#ed5a88",
    700: "#d64770",
    800: "#c3325f", // Dark Coral
    900: "#aa1f51",
  },
  bronze: {
    50: "#FAF0E6", // Cream
    100: "#eadcd6",
    200: "#e0cdc6",
    300: "#d7beb4",
    400: "#c6aaa1",
    500: "#b79d9a",
    600: "#a88a83",
    700: "#9e7c75",
    800: "#936e64",
    900: "#896056",
  },
  grey: {
    50: "#FFFFFF",
    100: "#E6EBF5",
    200: "#D5DCE5",
    300: "#C8D2DD",
    400: "#B9C3D0",
    500: "#A5AFBE",
    600: "#919EAF",
    700: "#8291A0",
    800: "#6C7882",
    900: "#5B666D",
    A100: "#475156",
    A200: "#333A3D",
    A400: "#1D2123",
    A700: "#000000",
  },
};

export const getThemeOptions = (): ThemeOptions => ({
  cssVariables: true,
  palette: {
    primary: {
      main: colors.purple[700], // Tech Purple
      light: colors.purple[500],
      dark: colors.purple[900],
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: colors.blue[500], // Tech Blue
      light: colors.blue[400],
      dark: colors.blue[800],
      contrastText: "#FFFFFF",
    },
    error: {
      main: colors.coral[600],
      light: colors.coral[400],
      dark: colors.coral[800],
      contrastText: "#FFFFFF",
    },
    warning: {
      main: colors.yellow[500],
      light: colors.yellow[300],
      dark: colors.yellow[800],
      contrastText: colors.grey.A400,
    },
    info: {
      main: colors.blue[600],
      light: colors.blue[300],
      dark: colors.blue[900],
      contrastText: "#FFFFFF",
    },
    success: {
      main: colors.green[600],
      light: colors.green[400],
      dark: colors.green[800],
      contrastText: "#FFFFFF",
    },
    grey: colors.grey,
    text: {
      primary: colors.grey.A400,
      secondary: colors.grey[900],
      disabled: colors.grey[700],
    },
    background: {
      default: colors.grey[50],
      paper: colors.grey[50],
    },
    divider: colors.grey[300],
    action: {
      active: colors.purple[700],
      hover: colors.purple[50],
      selected: colors.purple[100],
      disabled: colors.grey[500],
      disabledBackground: colors.grey[200],
    },
  },
  typography: {
    fontFamily: '"HclTechRoobert", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      lineHeight: 1.2,
      color: colors.grey.A400,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 700,
      lineHeight: 1.3,
      color: colors.grey.A400,
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 600,
      lineHeight: 1.4,
      color: colors.grey.A400,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 600,
      lineHeight: 1.4,
      color: colors.grey.A400,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 600,
      lineHeight: 1.5,
      color: colors.grey.A400,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 600,
      lineHeight: 1.6,
      color: colors.grey.A400,
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 500,
      lineHeight: 1.75,
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 500,
      lineHeight: 1.57,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.43,
    },
    button: {
      fontSize: "0.875rem",
      fontWeight: 600,
      lineHeight: 1.75,
      textTransform: "none",
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: 1.66,
    },
    overline: {
      fontSize: "0.75rem",
      fontWeight: 600,
      lineHeight: 2.66,
      textTransform: "uppercase",
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 6,
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
      defaultProps: {
        disableFocusRipple: true,
        disableRipple: true,
        disableTouchRipple: true,
      },
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          borderRadius: "6px",
          boxShadow: "none",
          textTransform: "none",
          fontSize: "14px",
          fontWeight: 500,
          "&:hover": {
            boxShadow: "none",
          },
          "&.MuiButton-contained": {
            backgroundColor: colors.purple[700],
            border: `2px solid ${colors.purple[700]}`,

            "&:hover": {
              backgroundColor: colors.purple[700],
              borderColor: colors.purple[200],
            },
            "&:focus": {
              backgroundColor: colors.purple[700],
              borderColor: colors.grey[400],
            },
            "&:disabled": {
              backgroundColor: colors.purple[200],
              borderColor: colors.purple[200],
              color: "white",
            },
          },
          "&.MuiButton-contained.MuiButton-colorSecondary": {
            backgroundColor: "transparent",
            border: `1px solid ${colors.purple[700]}`,
            color: colors.grey.A400,
            "&:hover": {
              border: `2px solid ${colors.purple[700]}`,
            },
            "&:focus": {
              border: `3px solid ${colors.purple[700]}`,
            },
            "&:disabled": {
              backgroundColor: colors.grey[100],
              border: "none",
              color: colors.grey[800],
            },
          },
          "&.MuiButton-outlined": {
            backgroundColor: "transparent",
            border: `1px solid ${colors.grey[200]}`,
            boxShadow: "0px 1px 2px -1px #0000001A",
            color: colors.grey.A400,

            "&:hover": {
              boxShadow: "0px 1px 3px 0px #0000001A",
            },
            "&:focus": {
              boxShadow: "0px 0px 0px 3px #D4D4D4",
            },
            "&:disabled": {
              borderColor: colors.grey[100],
              color: colors.grey[800],
            },
          },
          "&.MuiButton-ghost": {
            //backgroundColor: colors.purple[700],
            border: "3px solid transparent",

            "&:hover": {
              backgroundColor: colors.grey[200],
              borderColor: colors.grey[200],
            },
            "&:focus": {
              backgroundColor: "transparent",
              borderColor: colors.grey[200],
            },
            "&:disabled": {
              color: colors.grey[800],
            },
          },
          "&.MuiButton-destructive": {
            backgroundColor: "#DC2626",
            border: `3px solid #DC2626`,
            color: "white",

            "&:hover": {
              backgroundColor: "#DC2626",
            },
            "&:focus": {
              backgroundColor: "#DC2626",
              borderColor: colors.grey[400],
            },
            "&:disabled": {
              backgroundColor: "#ee9292",
              borderColor: "#ee9292",
              color: "white",
            },
          },
          "&.MuiButton-hcl": {
            background: "linear-gradient(90deg, #5F1EBE 10%, #3C91FF 100%)",
            //border: `3px solid transparent`,
            color: "white",

            "&:hover": {
              background: "linear-gradient(90deg, #5F1EBE 10%, #5F1EBE 100%)",
              borderColor: colors.purple[700],
            },
            "&:focus": {
              background: `linear-gradient(90deg, ${colors.purple[800]} 10%, ${colors.purple[800]} 100%)`,
              border: `3px solid ${colors.grey[200]}`,
            },
            "&:disabled": {
              background: colors.purple[200],
              borderColor: colors.purple[200],
              color: "white",
            },
          },
          "&.MuiButton-ai": {
            background: "transparent",
            border: "none",
            position: "relative",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              borderRadius: "inherit",
              padding: "1px",
              background: "linear-gradient(135deg, #7ABEF7 0%, #572AC2 100%)",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            },
            /* borderColor: "transparent",
            background:
              "linear-gradient(to right, white, white),linear-gradient(to right, #7ABEF7 14.04% , #572AC2 83.84%)",
            backgroundClip: "padding-box, border-box",
            backgroundOrigin: "padding-box, border-box", */
            "&:hover": {
              background: "linear-gradient(135deg, #764ba2 0%, #667eea 100%)",
              padding: "2px",
            },
            "&:focus": {
              background: `linear-gradient(90deg, ${colors.purple[800]} 10%, ${colors.purple[800]} 100%)`,
              border: `3px solid ${colors.grey[200]}`,
            },
            "&:disabled": {
              backgroundColor: colors.purple[200],
              borderColor: colors.purple[200],
              color: "white",
            },
          },
          "&.MuiButton-sizeMini": {
            fontSize: "12px",
            height: "28px",
          },
          "&.MuiButton-sizeSmall": {
            height: "32px",
          },
          "&.MuiButton-sizeMedium": {
            height: "36px",
          },
          "&.MuiButton-sizeLarge": {
            height: "40px",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0px 2px 8px rgba(29, 33, 35, 0.08)",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 8,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: 12,
          boxShadow: "0 2px 40px #00000014",
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          display: "none",
        },
        root: {
          background: colors.grey[100],
          borderRadius: "12px",
          display: "inline-flex",
          alignItems: "center",
          height: "40px",
          minHeight: "auto",
          padding: 0,
          width: "100%",
        },
      },
    },
    MuiTab: {
      defaultProps: {
        disableFocusRipple: true,
        disableRipple: true,
        disableTouchRipple: true,
      },
      styleOverrides: {
        root: {
          alignItems: "center",
          border: "1px solid transparent",
          borderRadius: "8px",
          color: colors.grey.A400,
          flex: 1,
          fontSize: "12.25px",
          fontWeight: 500,
          margin: "4px 1px",
          minHeight: "32px",
          minWidth: "30px",
          padding: "6px 0",
          textTransform: "capitalize",
          "&.Mui-selected": {
            backgroundColor: "white",
            borderColor: "white",
            boxShadow:
              "0 1px 2px -1px rgba(0, 0, 0, 0.1), 0 1px 3px 0 rgba(0, 0, 0, 0.1);",
            color: "inherit",
          },
          "&.Mui-focusVisible": {
            borderColor: colors.grey[200],
            borderWidth: "1px",
            borderStyle: "solid",
          },
        },
      },
    },
    MuiTouchRipple: {
      styleOverrides: {
        root: {
          "& .MuiTouchRipple-child": {
            backgroundColor: "rgba(0, 0, 0, 0.14)",
          },
        },
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          ".MuiCircularProgress-circle": {
            strokeLinecap: "round",
          },
        },
      },
    },
    MuiTooltip: {
      defaultProps: {
        arrow: true,
        slotProps: {
          popper: {
            modifiers: [
              {
                name: "offset",
                options: {
                  offset: [0, -6],
                },
              },
            ],
          },
        },
      },
      styleOverrides: {
        tooltip: {
          backgroundColor: colors.grey.A400,
          padding: "6px 8px",
        },
        arrow: {
          color: colors.grey.A400,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: colors.grey.A400,
          fontSize: "14px",
          fontWeight: 500,
          marginBottom: "5px",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: colors.grey.A400,
          fontSize: "14px",
          fontWeight: 500,
          marginBottom: "5px",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          border: `1px solid ${colors.grey[200]}`,
          borderRadius: "8px",
          color: colors.grey.A400,
          fontSize: "14px",
          padding: "2.5px 7.5px",
          width: "100%",
          "&::before": {
            display: "none",
          },
          "&::after": {
            display: "none",
          },
          "&.Mui-focused": {
            borderColor: "transparent",
            background:
              "linear-gradient(to right, white, white),linear-gradient(to right, #7ABEF7 14.04% , #572AC2 83.84%)",
            backgroundClip: "padding-box, border-box",
            backgroundOrigin: "padding-box, border-box",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          border: "none",
          borderRadius: "8px",
          fontStyle: "normal",
          "& .MuiOutlinedInput-notchedOutline": {
            border: `1px solid ${colors.grey[200]}`,
          },
          "&:hover": {
            "& .MuiOutlinedInput-notchedOutline": {
              border: `1px solid ${colors.grey[200]}`,
            },
          },
          "&.Mui-focused": {
            backgroundColor: "red",
            border: `none`,
            "& .MuiOutlinedInput-notchedOutline": {
              border: `1px solid ${colors.grey[200]}`,
            },
            "& .MuiSelect-icon": {
              color: colors.grey[200],
            },
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: "4.5px 7.5px",
        },
        root: {
          border: `1px solid ${colors.grey[200]}`,
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        root: {
          marginTop: "5px",
        },
        paper: {
          borderRadius: "8px",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontStyle: "normal",
          fontSize: "14px",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          /* border: `1px solid ${colors.grey[200]}`,
          borderRadius: "4px",
          marginLeft: "10px",
          padding: "6px", */

          "&.Mui-checked": {
            //backgroundColor: colors.purple[800],
          },

          "& .MuiSvgIcon-root": {
            //display: "none",
            //border: `1px solid ${colors.grey[200]}`,
            borderRadius: "4px",
            width: "18px",
            height: "18px",
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          "& .MuiFormControlLabel-label": {
            fontSize: "12px",
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: "26px",
          height: "16px",
          backgroundColor: colors.grey[100],
          borderRadius: "25px",
          padding: 0,
        },
        switchBase: {
          padding: 1,
          "&.Mui-checked": {
            transform: "translateX(10px)",
            backgroundColor: colors.purple[800],
            "& + .MuiSwitch-track": {
              opacity: 1,
            },
          },
        },
        thumb: {
          width: 14,
          height: 14,
          backgroundColor: "white",
        },
      },
    },
    MuiToggleButtonGroup: {},
    MuiToggleButton: {
      defaultProps: {
        disableFocusRipple: true,
        disableRipple: true,
        disableTouchRipple: true,
      },
      styleOverrides: {
        root: ({ theme }) => ({
          borderColor: colors.grey[200],
          color: theme.vars.palette.text.primary,
          fontSize: 14,
          lineHeight: 1.5,
          "&.Mui-focusVisible": {
            boxShadow: `0 0 0 3px var(--focus-ring, ${colors.grey[300]})`,
          },
          "&.Mui-disabled": {
            // color: theme.vars.palette.text.disabled,
            opacity: 0.5,
          },
          "&.MuiToggleButton-sizeMedium": {
            minHeight: "36px",
            gap: "8px",
            padding: "7.5px 8px",
          },
          "&.MuiToggleButton-sizeSmall": {
            minHeight: "32px",
            gap: "6px",
            padding: "5.5px 6px",
          },
          "&.MuiToggleButton-sizeLarge": {
            minHeight: "40px",
            gap: "8px",
            padding: "9.5px 12px",
          },
          variants: [
            {
              props: { size: "mini" },
              style: {
                minHeight: "24px",
                gap: "4px",
                padding: "3px 4px",
                fontSize: 12,
              },
            },
          ],
        }),
      },
    },
    MuiAccordion: {
      defaultProps: {
        disableGutters: true,
      },
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
    MuiAccordionSummary: {
      defaultProps: {
        expandIcon: React.createElement(AccordionExpandIcon),
      },
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: "8px",
          "&.Mui-focusVisible": {
            boxShadow: `0 0 0 3px ${colors.grey[300]}`,
            backgroundColor: "transparent",
          },
        }),
        expandIconWrapper: ({ theme }) => ({
          color: theme.vars.palette.text.primary,
        }),
      },
    },
    // ... all component customizations
  },
});

export const hclTheme = createTheme(getThemeOptions());
