import React from 'react';
import france from "../assets/france.jpg"
import newyork from "../assets/newyork.jpg"
import india from "../assets/india.jpg"
import germany from "../assets/germany.jpg"



const Cards = () => {
    return (
    <div className='w-full py-[2rem] px-4 bg-white'>
    <div className=' overflow-hidden'>
        <div className='flex p-4 transition-transform duration-300 ease-in-out transform '>
            <img className='w-36 h-36 p-4 mx-auto rounded-full bg-transparent transition-transform duration-500 transform md:-translate-x-2 lg:-translate-x-4 'src={newyork} alt="/" />
            <img className='w-36 h-36 p-4 mx-auto rounded-full bg-transparent transition-transform duration-500 transform md:-translate-x-2 lg:-translate-x-4 'src={france} alt="/" />
            <img className='w-36 h-36  p-4 mx-auto rounded-full bg-transparent transition-transform duration-500 transform md:-translate-x-2 lg:-translate-x-4 'src={india} alt="/" />
            <img className='w-36 h-36 p-4 mx-auto rounded-full bg-transparent transition-transform duration-500 transform md:-translate-x-2 lg:-translate-x-4 'src={germany} alt="/" />
            <img className='w-36 h-36 p-4 mx-auto rounded-full bg-transparent transition-transform duration-500 transform md:-translate-x-2 lg:-translate-x-4 'src={newyork} alt="/" />
            <img className='w-36 h-36 p-4 mx-auto rounded-full bg-transparent transition-transform duration-500 transform md:-translate-x-2 lg:-translate-x-4 'src={newyork} alt="/" />

        </div>
        
    </div>
</div>
    );
};

export default Cards;
