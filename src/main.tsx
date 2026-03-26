import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./index.css";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});
createRoot(document.getElementById('root')!).render(
    <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <StrictMode>
            <App />
        </StrictMode>,
    </ThemeProvider>

)
