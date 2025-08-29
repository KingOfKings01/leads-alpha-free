import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Login from './pages/Login'
import Home from './pages/Home';
import Layout from './components/Layout/Layout';
import "../public/App.css"
import About from './pages/About';
import Services from './pages/Services';
import FAQCreators from './pages/FAQCreators';
import FAQBrand from './pages/FAQBrand';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/login" element={<Login />} />
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/faqs-creators' element={<FAQCreators />} />
          <Route path='/faqs-brands' element={<FAQBrand />} />
        </Route>
        <Route path="*" element={<>404 Page not found</>} />
      </Routes>
    </Router>
  );
}

export default App;
