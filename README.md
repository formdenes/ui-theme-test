# @hcl/aifoundry-ui-theme

A custom Material UI theme library featuring HCL branding, custom color palettes, typography, and component customizations.

## Features

- **Custom HCL Color Palette** - Purple, blue, teal, green, yellow, coral, bronze, and grey variants
- **HCL Tech Roobert Font** - Custom branded typography with multiple font weights
- **Component Customizations** - Styled overrides for all major MUI components
- **TypeScript Support** - Full type definitions included
- **CSS Variables** - Modern CSS custom properties for dynamic theming

## Installation

Install the package along with required peer dependencies:

```bash
npm install github:starschema/aifoundry-ui-theme
```

## Usage

### Basic Setup

Wrap your application with the `ThemeProvider` and use either the `hclTheme`:

```tsx
import { ThemeProvider, CssBaseline } from "@mui/material";
import { hclTheme } from "@hcl/aifoundry-ui-theme";
import React from "react";

function App() {
  return (
    <ThemeProvider theme={hclTheme}>
      <CssBaseline />
      {/* Your app components */}
    </ThemeProvider>
  );
}

export default App;
```

### Font Assets

The fonts are available in the installed npm package. You need to copy these files into your public assets folder. You have to make sure that this folder exists first.

To achieve this, you can run these commands from your project's root folder.

```bash
mkdir -p public/assets/fonts
cp -r node_modules/@hcl/aifoundry-ui-theme/public/assets/fonts public/assets
```

## Available Exports

```typescript
import { hclTheme } from "@hcl/ui-theme-test";
```

- **`hclTheme`** - Pre-configured theme with HCL branding

## Color Palette

The theme includes the following color families, each with multiple shades (50-900):

- **Purple** (Primary) - Tech Purple
- **Blue** (Secondary) - Tech Blue
- **Teal** - Dark Teal
- **Green** - Success colors
- **Yellow** - Warning colors
- **Coral** - Error colors
- **Bronze** - Accent colors
- **Grey** - Neutral colors with extended scale

## Typography

The theme uses **HCL Tech Roobert** as the primary font family with the following weights:

- Light (300)
- Regular (400)
- Medium (500)
- Semibold (600)
- Bold (700)
- Extrabold (800)
- Heavy (900)

All font faces include both normal and italic variants.

## Component Customizations

The theme includes styled overrides for:

- **Buttons** - Custom padding, no text transform, disabled ripple effects
- **Cards** - Rounded corners (12px), subtle shadows
- **Chips** - Rounded (8px) with medium font weight
- **Text Fields** - Custom border radius and focus states
- **Tabs** - Pill-style tabs with background highlights
- **Tooltips** - Arrow tooltips with custom styling
- **Alerts** - Rounded corners
- **Menus & Dropdowns** - Custom borders and shadows
- **Checkboxes & Switches** - HCL-branded styling
- **Toggle Buttons** - Multiple size variants including custom `mini` size
- **Accordions** - Custom expand icons and focus states
- And more...

## Development

### Local Development

Clone the repository and install dependencies:

```bash
git clone https://github.com/starschema/aifoundry-ui-theme.git
cd aifoundry-ui-theme
npm install
```

### Available Scripts

- **`npm run dev`** - Start Vite development server with live preview
- **`npm run build`** - Build the library for production
- **`npm run preview`** - Preview the production build
- **`npm run lint`** - Run ESLint

### Testing the Theme

Start the development server to see all components with the theme applied:

```bash
npm run dev
```

The development app includes a comprehensive showcase of all Material UI components styled with the HCL theme.

## TypeScript

The package includes full TypeScript definitions. The theme extends Material UI's theme with custom properties:

```typescript
import type { Theme } from "@mui/material";
import { hclTheme } from "@hcl/ui-theme-test";

// TypeScript will provide full autocomplete and type checking
const theme: Theme = hclTheme;
```

### Custom Size Variants

The theme includes custom size variants for some components:

```tsx
import { ToggleButtonGroup } from "@mui/material";

// The 'mini' size is available in addition to 'small', 'medium', 'large'
<ToggleButtonGroup size="mini">{/* ... */}</ToggleButtonGroup>;
```
