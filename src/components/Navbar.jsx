import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4  text-black bg-white'>
      <div onClick={handleNav} className=''>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <h1 className='w-full text-1xl font-bold text-[black]  p-10'>Select 1 of 9 languages</h1>
      
      
      
    </div>
  );
};

export default Navbar;
