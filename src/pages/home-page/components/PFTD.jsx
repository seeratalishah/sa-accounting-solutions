import React from 'react';
import { PFTDData } from '../data';

const PFTD = () => {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-center text-[42px] font-headingText font-bold leading-[1.3]'>
      People focused. Technology driven.
      </h1>
      <p className='text-center text-lg w-full text-lightText-50 mt-2 mb-6 font-paraText'>
      Here are some of our favourite tools
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full justify-items-center'>
        {PFTDData.map((item, index) => {
          return (<div key={index} className='flex justify-center items-center'>
            <img src={item} alt="image" className='w-[280px] h-[130px]' />
          </div>)
        })}
      </div>
    </div>
  );
};

export default PFTD;
