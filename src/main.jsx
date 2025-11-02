import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import About from './pages/About.jsx'
import DownPayment from './pages/DownPayment.jsx'
import Developer from './pages/Developer.jsx'
import Blogs from './pages/Blogs.jsx'
import ExploreBuilding from './pages/ExploreBuilding.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/down-payment" element={<DownPayment />} />
        <Route path="/developer" element={<Developer />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/explore-building" element={<ExploreBuilding />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
