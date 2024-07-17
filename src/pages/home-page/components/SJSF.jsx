import React from 'react';
import { SJSFData } from '../data';
import { IconButtonCard } from '../../../components/IconButtonCard';

const SJSF = () => {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-center text-[42px] font-headingText font-bold leading-[1.3]'>
        Stop Juggling. Start Focusing.
      </h1>
      <p className='text-center text-lg w-full text-lightText-50 mt-2 mb-6 font-paraText'>
        Integrated accounting solutions that move your business forward.
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full justify-items-center'>
        {SJSFData.map((item, index) => {
          const IconComponent = item.icon;
          return (<div key={index} className='flex justify-center items-center'>
            <IconButtonCard item={item} IconComponent={IconComponent}/>
          </div>)
        })}
      </div>
    </div>
  );
};

export default SJSF;
