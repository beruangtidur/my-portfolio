import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router'
import About from './pages/About.jsx'

createRoot(document.getElementById('root')).render(
  <HashRouter>

    {/* <StrictMode>
      <App />
      </StrictMode>, */}
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </HashRouter>
)
