import React from 'react';
import flag from "../assets/flag.jpg"
import { FaPlay } from 'react-icons/fa';
import {AiOutlineClockCircle} from 'react-icons/ai';
import {AiOutlinePlayCircle} from 'react-icons/ai';


const Content = () => {
  return (
    <div className='text-black bg-white'>
    <div className='flex justify-center items-center  mx-auto py-4 px-4 text-black bg-white'>
        <div className='flex items-center'>
            <img className='w-5 h-3 bg-transparent rounded' src={flag} alt="/" />
            <h1 className='text-3xl font-bold px-4 text-black '>French</h1>
        </div>
        
    </div>
    <div className='flex justify-center items-center '>
    <p className='italic text-center w-1/4 md: w-1/2'>
        Bienvenue dans un monde de baguettes et de petits pains frais, ainsi que de café aromatique.
    </p>
</div>


    <div className="flex items-center justify-center py-8">
      <div className="w-16 h-16 rounded-full bg-pink-700 flex items-center justify-center">
        <FaPlay color="white" size={24} />
      </div>
    </div>
    <div className='flex justify-center items-center  mx-auto py-4 px-4 text-black bg-white'>
        <div className='flex items-center'>
            <AiOutlineClockCircle/>
            <h1 className='text-1xl  px-2 text-black '>320 min</h1>
            <AiOutlinePlayCircle/>
            <h1 className='text-1xl  px-2 text-black '>28 lessons </h1>


        </div>
        
    </div>
    
    
    <div className='py-4'><button className='text-white flex mx-auto bg-pink-700 rounded  px-16 py-3 items-center justify-center'>Start learning French </button></div>

</div>
  );
};

export default Content ;
