import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter , Router, Route, Routes } from 'react-router-dom'
import Testing from './testing'
createRoot(document.getElementById('root')).render(

  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Testing></Testing>} />
  </Routes>
  </BrowserRouter>
)
