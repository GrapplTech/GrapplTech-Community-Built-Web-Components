import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="px-4 md:px-28 bg-[#EAE3DD]">
      <header className="py-5 flex justify-between items-center">
        <div className="flex gap-5 md:gap-20">
          <div className="cursor-pointer text-xl md:text-2xl">LOGO</div>
          <ul className="hidden md:flex gap-14 cursor-pointer">
            <li>HOME</li>
            <li>Services</li>
            <li>Contact</li>
            <li>About us</li>
          </ul>
        </div>
        <div className="hidden md:flex items-center gap-14 cursor-pointer">
          <SearchIcon />
          <PersonOutlineOutlinedIcon />
          <FavoriteBorderOutlinedIcon />
          <ShoppingBagOutlinedIcon />
        </div>
        <div className="md:hidden flex items-center cursor-pointer" onClick={toggleSidebar}>
          <MenuIcon />
        </div>
      </header>

      <div className={`fixed top-0 left-0 w-64 bg-white h-full z-50 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="flex justify-between items-center p-5 border-b">
          <div className="text-xl">LOGO</div>
          <div className="cursor-pointer" onClick={toggleSidebar}>
            <CloseIcon />
          </div>
        </div>
        <ul className="flex flex-col p-5 gap-5 cursor-pointer">
          <li>HOME</li>
          <li>Services</li>
          <li>Contact</li>
          <li>About us</li>
          <div className="flex items-center gap-5 pt-5 border-t">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <ShoppingBagOutlinedIcon />
          </div>
        </ul>
      </div>

      <div className="hero-section flex flex-col md:flex-row py-10 md:py-28">
        <div className="w-full md:w-1/2 space-y-5 md:space-y-10 py-8">
          <h1 className="text-4xl md:text-8xl font-semibold">Your Phone <br /> Your Style</h1>
          <p className="text-sm md:text-base text-zinc-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nihil facilis ea commodi blanditiis. Debitis voluptatibus eaque eos voluptas incidunt!</p>
          <button className="py-2 md:py-4 px-4 md:px-8 bg-black text-white hover:bg-zinc-500 hover:text-black">Shop Now <ArrowRightAltOutlinedIcon /> </button>
        </div>

        <div className="w-full md:w-1/2 mt-5 md:mt-0">
          <img 
            className="w-full object-cover object-top" 
            src="/banner.png" alt="Banner" 
          />
        </div>
      </div>
    </div>
  );
}

export default App;