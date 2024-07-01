import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IoHomeOutline,IoFastFoodOutline,IoLocationOutline, IoLogInOutline } from "react-icons/io5";
import { RiDrinks2Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";

const data = [
    {
        name: 'Home',
        path: '/',
        icon: <IoHomeOutline/>
    },
    {
        name: 'Food',
        path: '/food',
        icon: <IoFastFoodOutline/>
    },
    {
        name: 'Drinks',
        path: '/drinks',
        icon: <RiDrinks2Line/>
    },
    {
        name: 'About Us',
        path: '/about-us',
        icon: <IoLocationOutline/>
    },
]
function Header() {
  return (
    <div className='flex justify-between items-center py-5'>
        <div className='text-3xl font-semibold'>
            <Link to='/'>The Coffee Shop</Link>
        </div>
        <div className='flex justify-between items-center gap-12'>
          {
            data.map((item,idx) => (
                <div key={idx} className=''>
                    <NavLink 
                    to={item.path} 
                    className={({ isActive }) =>
                        isActive ? "text-pink-500 flex justify-center items-center gap-1" : 'flex justify-center items-center gap-1 hover:text-pink-500 transition-all duration-300 ease-in-out'
                      }
                    >
                        <span>{item.icon}</span>
                        <span>{item.name}</span>
                    </NavLink>
                </div>
            ))
          }
        </div>
        <div className='flex justify-center items-center cursor-pointer bg-blue-300 w-10 h-10 text-xl rounded-full hover:text-pink-50 transition-all duration-300 ease-out'>
        <FaRegUser/>
          
        </div>
    </div>
  )
}

export default Header