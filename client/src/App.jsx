import { Route, Routes, } from "react-router-dom";
import Home from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';
import Dashboard from './pages/dashboard';

function App() {

  return (
    <div className='bg-red-700 text-green-500 text-6xl underline '>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="courses/:courseId" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App
