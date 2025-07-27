import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../public/index.css'
import '../public/mobile.css'
import "../public/footer.css"
import "../public/navbar.css"
import "../public/home.css"
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';

createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>
)