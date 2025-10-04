import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";


const theme = createTheme({
  typography: {
    fontFamily: "Josefin Slab, sans-serif",
    h3: { fontFamily: "Literata, sans-serif"},
    h4: { fontFamily: "Literata, sans-serif"}
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <App />
      </CssBaseline>
    </ThemeProvider>
  </StrictMode>,
)
