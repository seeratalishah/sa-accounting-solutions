import React from "react";
import { IconCard } from "../../../components/IconCard";
import { Typography } from "@material-tailwind/react";
import { headingStyles } from "../../../utilities/cssHelper";

import lightSwooshBottom from "../../../assets/light-swoosh-bottom.svg";
import lightSwooshTop from "../../../assets/light-swoosh-top.svg";
import { whyPTSData } from "../data";

const WhyPTS = () => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Image before the main content */}
      <img src={lightSwooshTop} alt="Image Before" className="w-full" />

      {/* Main content */}
      <div className="bg-[#F3FCFE] w-full flex items-center justify-center py-16 px-8">
        <div className="max-w-[1300px] flex flex-col items-center">
          <Typography variant="h1" className={`text-center ${headingStyles}`}>
            Why Choose Our Personal Tax Services?
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full justify-items-center mt-10">
            {whyPTSData.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="flex justify-center items-center">
                  <IconCard item={item} IconComponent={IconComponent} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Image after the main content */}
      <img src={lightSwooshBottom} alt="Image After" className="w-full" />
    </div>
  );
};

export default WhyPTS;
