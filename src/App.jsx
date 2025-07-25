import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import SignIn from './pages/SignIn';

import Home from './pages/Home';
// import Navbar from './components/Navbar';
import LogIn from './pages/Login';


function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="*" element={<>404 Page not found</>} />
      </Routes>
    </Router>
  );
}

export default App;
