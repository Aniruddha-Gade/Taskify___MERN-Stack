import { Route, Routes, } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Navbar from './components/common/Navbar';
import Signup from './pages/Signup';
import Login from "./pages/Login";
import VerifyEmail from './pages/VerifyEmail';
import OpenRoute from './components/core/auth/OpenRoute';
import ProtectedRoute from "./components/core/auth/ProtectedRoute";

function App() {

  return (
    <div className='w-full h-full bg-[#181818] text-white overflow-x-hidden'>

      <Navbar />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />


        {/* Open Route - for Only Non Logged-in User */}
        <Route
          path="signup" element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />

        <Route
          path="login" element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />

        <Route
          path="verify-email" element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        />

        {/* protected route */}
        <Route
          path='dashboard'
          element={
            <ProtectedRoute>
              <Dashboard/>
            </ProtectedRoute>
          }
        />

      </Routes>
    </div>
  )
}

export default App