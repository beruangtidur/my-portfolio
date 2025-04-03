import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import About from './pages/About.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <StrictMode>
      <App />
    </StrictMode>, */}
    <Routes>
      <Route path="/my-portfolio/" element={<App />} />
      <Route path="/my-portfolio/about" element={<About />} />
    </Routes>
  </BrowserRouter>
)
