import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Self-hosted fonts (bundled by Vite — no Google Fonts request)
import '@fontsource-variable/bricolage-grotesque/opsz.css'  // headings
import '@fontsource-variable/plus-jakarta-sans/wght.css'   // body
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)