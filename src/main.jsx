import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ExploreBuilding from './pages/ExploreBuilding.jsx'
import FloorDetail from './pages/FloorDetail.jsx'
import ExplorePlan from './pages/ExplorePlan.jsx'
import Amenities from './pages/Amenities.jsx'
import Blogs from './pages/Blogs.jsx'
import BlogDetail from './pages/BlogDetail.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/explore-building" element={<ExploreBuilding />} />
        <Route path="/floor/:floorId" element={<FloorDetail />} />
        <Route path="/explore-plan/:floorId/:unitId?" element={<ExplorePlan />} />
        <Route path="/amenities" element={<Amenities />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:blogId" element={<BlogDetail />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
