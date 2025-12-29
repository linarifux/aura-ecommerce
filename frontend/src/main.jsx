import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'
import './index.css'
import App from './App.jsx'
import ScrollToTop from './components/utils/ScrollToTop.jsx' // 1. Import it

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop /> {/* 2. Add it here, inside the Router */}
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)