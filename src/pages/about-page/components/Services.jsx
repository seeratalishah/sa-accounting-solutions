import React from "react";
import { servicesData } from "../data";
import { ServiceCard } from "../../../components/ServiceCard";

import lightSwooshBottom from "../../../assets/light-swoosh-bottom.svg";
import lightSwooshTop from "../../../assets/light-swoosh-top.svg";

const Services = () => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Image before the main content */}
      <img src={lightSwooshTop} alt="Image Before" className="w-full" />

      {/* Main content */}
      <div className="bg-[#F3FCFE] w-full flex items-center justify-center py-16 px-8">
        <div className="max-w-[1300px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full justify-items-center">
          {servicesData.map((item, index) => {
            return (
              <div
                key={index}
                className="flex justify-center items-center w-full"
              >
                <ServiceCard
                  item={item}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Image after the main content */}
      <img src={lightSwooshBottom} alt="Image After" className="w-full" />
    </div>
  );
};

export default Services;
