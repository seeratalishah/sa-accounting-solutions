import React from "react";
import { ImageCard } from "../../../components/ImageCard";
import { servicesData } from "../data";

const ServicesMap = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full justify-items-center">
      {servicesData.map((item, index) => {
        return (
          <div key={index} className="flex justify-center items-center w-full">
            <ImageCard item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default ServicesMap;
