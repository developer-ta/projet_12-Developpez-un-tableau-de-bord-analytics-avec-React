import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './presentation_Layer/styles/global/index.scss'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
