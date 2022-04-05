import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { StrictMode } from 'react'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './index.css'

const container = document.getElementById('root')
const root = createRoot(container as HTMLElement)
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

root.render(app)

reportWebVitals()
