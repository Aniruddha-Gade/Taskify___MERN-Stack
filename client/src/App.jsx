import { Route, Routes, } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Navbar from "./components/Navbar";
import Signup from './pages/Signup';
import Login from "./pages/Login";

function App() {

  return (
    <div className='w-full h-full bg-[#181818] text-white overflow-x-hidden'>

      <Navbar />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />


      </Routes>
    </div>
  )
}

export default App
