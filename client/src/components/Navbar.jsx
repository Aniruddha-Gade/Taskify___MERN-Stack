import { useEffect, useState } from 'react';
import { NavbarLinks } from '../../constants/navbar-links'
import { Link, matchPath, useLocation } from 'react-router-dom'

import logo from '../../public/images/taskify-logo.png'

const Navbar = () => {

  const location = useLocation();

  // when user click Navbar link then it will hold green color
  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  }

  const [lastScollY, setLastScrollY] = useState(0);
  const [showNavBar, setShowNavBar] = useState('top');


  useEffect(() => {
    // control Navbar
    const controlNavbar = () => {
      // console.log('controlNavbar')
      if (window.scrollY > 200) {
        if (window.scrollY > lastScollY) {
          setShowNavBar('hide')
        }
        else setShowNavBar('show')
      }

      else setShowNavBar('top')

      setLastScrollY(window.scrollY);
    }
    window.addEventListener('scroll', controlNavbar);
    controlNavbar()
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    }

  }, [lastScollY])

  return (
    <nav
      className={`${showNavBar} w-full h-[70px] fixed top-0 z-[10] translate-y-0 transition-all bg-[#181818] 
                  px-10 py-1 flex items-center justify-between gap-10 border-b-2 border-richblack-700 `}
    >
      {/* logo */}
      <Link to='/'>
        <img
          src={logo}
          className='w-32'
        />
      </Link>

      <ul className='flex justify-between items-center gap-x-5 text-xl  text-white '>
        {
          NavbarLinks.map((link) => (
            <li key={link.title} className={`${matchRoute(link?.path) ? "bg-green-500 " : "text-richblack-25 hover:text-green-500"} rounded-xl p-2 px-5 duration-300`}>
              <Link to={link.path}>
                {link.title}
              </Link>
            </li>
          ))
        }
      </ul>


      {/* Login / SignUp */}
      <div className='flex gap-x-4 items-center'>

        <Link to="/login">
          <button className={` px-[12px] py-[8px] text-richblack-100 rounded-md 
                                 ${matchRoute('/login') ? 'border-[2.5px] border-yellow-50 bg-green-500 text-white' : 'border border-richblack-700 bg-richblack-800'} `}
          >
            Log in
          </button>
        </Link>

        <Link to="/signup">
          <button className={` px-[12px] py-[8px] text-richblack-100 rounded-md 
                                 ${matchRoute('/signup') ? 'border-[2.5px] border-yellow-50 bg-green-500 text-white' : 'border border-richblack-700 bg-richblack-800'} `}
          >
            Sign Up
          </button>
        </Link>
      </div>

    </nav>
  )
}

export default Navbar


