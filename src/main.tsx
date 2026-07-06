import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { restaurants } from '../materials/mock.js'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App restaurants={restaurants} />
  </StrictMode>,
)
