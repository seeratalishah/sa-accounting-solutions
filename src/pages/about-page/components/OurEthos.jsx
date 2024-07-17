import React from "react";
import { ourEthosData } from "../data";
import { IconCard } from "../../../components/IconCard";

const OurEthos = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center text-[42px] font-headingText font-bold leading-[1.3]">
        Our Ethos.
      </h1>
      <p className="text-center text-lg w-full text-lightText-50 mt-2 font-paraText">
        The values that drive our business, our solutions and our brand.
      </p>
      <p className="text-center text-lg w-full text-blue-600 mb-6 font-paraText">
        This is what makes us tick.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full justify-items-center">
        {ourEthosData.map((item, index) => {
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

export default OurEthos;
