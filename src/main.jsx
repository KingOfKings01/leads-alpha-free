import { createRoot } from 'react-dom/client'
import '../public/index.css'
import "../public/home.css"
import "swiper/css";
import "swiper/css/navigation";

import App from './App.jsx' 

createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>
)
