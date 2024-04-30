import { logout } from '../../services/operations/authApi';
import { useSelector, useDispatch } from 'react-redux';
import { sidebarMenu } from './../../../constants/index';
import { Link, useNavigate } from 'react-router-dom';

// icons
import { FaSignOutAlt } from "react-icons/fa";


const Sidebar = () => {

    const { user } = useSelector(state => state.profile)
    // console.log('user = ', user)
    const { firstName, lastName, image: imageUrl } = user
    const dispatch = useDispatch()
    const navigate = useNavigate()



    return (
        <div className='flex flex-col items-center justify-between bg-[#212121] h-[calc(100%-70px)] w-[15rem] mt-[70px] rounded-2xl border-2 py-5 border-[#303030] '>
            <div className='flex items-center gap-5 text-xl capitalize'>
                <img src={imageUrl} className='w-14 rounded-full ' />
                <p>{firstName} {' '} {lastName}</p>
            </div>

            <div className='flex flex-col gap-2 text-[1.1rem] w-full'>
                {
                    sidebarMenu.map((link) => (
                        <Link
                            key={link.id}
                            to={link.link}
                            className='flex items-center gap-5 px-8 py-2 w-full text-white/60 hover:bg-[#303030] duration-300'
                        >
                            {<link.icon />}
                            <p>{link.title}</p>
                        </Link>
                    ))
                }
            </div>

            {/* log out */}
            <button
                onClick={() => dispatch(logout(navigate))}
                className='flex items-center gap-5 text-[1.1rem] w-full px-8 text-white/60'>
                <FaSignOutAlt />
                <p>Log Out</p>
            </button>
        </div>
    );
}

export default Sidebar