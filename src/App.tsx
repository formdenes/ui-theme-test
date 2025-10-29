import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { hclTheme } from "./index";
import AllMaterialUIComponents from "./components/all-components";

function App() {
  return (
    <ThemeProvider theme={hclTheme}>
      <CssBaseline />
      <AllMaterialUIComponents />
    </ThemeProvider>
  );
}

export default App;
