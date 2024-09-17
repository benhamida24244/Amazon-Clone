import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SideNavContent from './SideNavContent';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion'; // Correct import of motion from framer-motion

function HeaderButton() {
  const [SideNav, setSideNav] = useState(false);

  const togglerSidebar = () => {
    setSideNav((prev) => !prev);
  };

  const closeSidebar = () => {
    setSideNav(false);
  };

  return (
    <div className='w-full px-4 h-[36px] bg-amazon_light text-white flex items-center'>
      {/* All Items Start */}
      <ul className='flex items-center text-sm gap-2 tracking-wide'>
        <li onClick={togglerSidebar} className='headerHover flex items-center gap-1'>
          <MenuIcon /> All
        </li>
        <li className='headerHover hidden md:flex lg:flex'>Today's Deals</li>
        <li className='headerHover hidden md:flex lg:flex'>Customer Service</li>
        <li className='headerHover hidden md:flex lg:flex'>Gift Cards</li>
        <li className='headerHover hidden md:flex lg:flex'>Registry</li>
        <li className='headerHover hidden md:flex lg:flex'>Sell</li>
      </ul>
      {/* All Items End */}

      {/* Sidebar with Animation */}
      {SideNav && (
        <div className='w-full h-screen fixed top-0 left-0 bg-amazon_blue bg-opacity-50 z-50' onClick={closeSidebar}>
          <div className='relative h-full'>
            {/* Animated Sidebar */}
            <motion.div
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className='w-[350px] h-full bg-white text-amazon_blue border border-black'
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              <SideNavContent />
              <span
              onClick={togglerSidebar}
              className='cursor-pointer absolute top-0 left-[300px] md:left-[360px] w-10 h-10 text-black flex items-center justify-center border bg-gray-200 hover:bg-red-500 hover:text-white duration-300 z-50'
            >
              <CloseIcon />
            </span>
            </motion.div>

            {/* Close Button */}
            
          </div>
        </div>
      )}
      {/* Sidebar End */}
    </div>
  );
}

export default HeaderButton;
