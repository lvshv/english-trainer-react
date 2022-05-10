import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { StrictMode } from 'react'
import App from './App'
import { store } from 'store/store'
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals'
// import 'styles/index.scss'

const container = document.getElementById('root')
const root = createRoot(container as HTMLElement)
const app = (
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
)

root.render(app)

reportWebVitals()
