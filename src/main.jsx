import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Homepage from './Components/Homepage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Homepage></Homepage>
  </StrictMode>,
)
