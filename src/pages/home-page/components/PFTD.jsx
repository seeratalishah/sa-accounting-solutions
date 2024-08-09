import React from "react";
import { PFTDData } from "../data";
import { Typography } from "@material-tailwind/react";
import { cardParaStyles, headingStyles } from "../../../utilities/cssHelper";

const PFTD = () => {
  return (
    <div className="flex flex-col items-center">
      <Typography variant="h1" className={`text-center ${headingStyles}`}>
        People-centric. Technology-powered.
      </Typography>
      <Typography
        variant="paragraph"
        className={`mb-10 text-center ${cardParaStyles}`}
      >
        Here are some of our preferred tools
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full justify-items-center">
        {PFTDData.map((item, index) => {
          return (
            <div key={index} className="flex justify-center items-center">
              <img src={item} alt="image" className="w-[280px] h-[130px]" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PFTD;
