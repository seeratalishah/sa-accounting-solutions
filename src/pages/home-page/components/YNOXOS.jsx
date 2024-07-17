import React from "react";
import { YNOXOSFData } from "../data";
import { IconCard } from "../../../components/IconCard";

const YNOXOS = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center text-[42px] font-headingText font-bold leading-[1.3]">
        Your numbers. Our expertise. One story.
      </h1>
      <p className="text-center text-lg w-full text-lightText-50 mt-2 mb-6 font-paraText">
        Here’s some of the benefits of working with Ledgerly
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full justify-items-center">
        {YNOXOSFData.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div key={index} className="flex justify-center items-center">
              <IconCard item={item} IconComponent={IconComponent} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default YNOXOS;
