import React from "react";
import { servicesData } from "../data";
import { IconCard } from "../../../components/IconCard";

const Services = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full justify-items-center'>
        {servicesData.map((item, index) => {
          const IconComponent = item.icon;
          return (<div key={index} className='flex justify-center items-center w-full'>
            <IconCard item={item} IconComponent={IconComponent} iconColor="text-blue-600"/>
          </div>)
        })}
      </div>
  );
};

export default Services;
