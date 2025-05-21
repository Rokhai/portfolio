import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import {MouseRadialTorch} from './components/'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MouseRadialTorch />
    <App />
  </StrictMode>,
)
