import { Theme } from "@mui/material";

export declare const hclTheme: Theme;

export declare module "@mui/material/ToggleButtonGroup" {
  interface ToggleButtonGroupPropsSizeOverrides {
    mini: true;
  }
}

export declare module "@mui/material/Button" {
  interface ButtonPropsSizeOverrides {
    mini: true;
  }

  interface ButtonPropsVariantOverrides {
    ghost: true;
    destructive: true;
    hcl: true;
    ai: true;
  }
}

export declare module "@mui/material/Alert" {
  interface AlertPropsVariantOverrides {
    iconFlipped: true;
  }
}
