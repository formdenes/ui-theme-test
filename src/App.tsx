import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { lightTheme } from "./index";
import AllMaterialUIComponents from "./components/all-components";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <AllMaterialUIComponents />
    </ThemeProvider>
  );
}

export default App;
