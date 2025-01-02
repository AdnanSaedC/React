import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Example from '../src/components/example.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Example username="Loved also" />
    <Example />
  </StrictMode>,
)
