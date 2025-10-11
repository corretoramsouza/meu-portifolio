import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Treino from './Treino.tsx'
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Simulacao from './Pages/Simulacao.tsx'


const theme = createTheme({
  typography: {
    fontFamily: "Josefin Slab, sans-serif",
    h3: { fontFamily: "Literata, sans-serif" },
    h4: { fontFamily: "Literata, sans-serif" }
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <BrowserRouter basename="/meu-portifolio">
          <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/meu-treino" element={<Treino />}/>
            <Route path="/simulacao" element={<Simulacao />}/>
          </Routes>
        </BrowserRouter>
      </CssBaseline>
    </ThemeProvider>
  </StrictMode>,
)
