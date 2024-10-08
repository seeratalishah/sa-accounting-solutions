import React from "react";
import { IconCard } from "../../../components/IconCard";
import { Typography } from "@material-tailwind/react";
import { headingStyles, longParaStyles } from "../../../utilities/cssHelper";
import lightSwooshBottom from "../../../assets/light-swoosh-bottom.svg";
import lightSwooshTop from "../../../assets/light-swoosh-top.svg";
import { timeBackData } from "../data";

const TimeBack = () => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Image before the main content */}
      <img src={lightSwooshTop} alt="Image Before" className="w-full" />

      {/* Main content */}
      <div className="bg-[#F3FCFE] w-full flex items-center justify-center py-16 px-8">
        <div className="max-w-[1300px] flex flex-col items-center">
          <Typography variant="h1" className={`text-center ${headingStyles}`}>
            Get Your Time Back!
          </Typography>
          <Typography
            variant="paragraph"
            className={`max-w-[750px] md:pr-[30px] lg:pr-[30px] text-center ${longParaStyles}`}
          >
            Stop wasting time wading through spreadsheets and struggling to
            create financial forecasts on your own. Get a better return on your
            time by hiring a virtual CFO
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full justify-items-center mt-10">
            {timeBackData.map((item, index) => {
              return (
                <div key={index} className="flex justify-center items-center mn-h-[360px]">
                  <IconCard item={item} minHeight={360} />
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

export default TimeBack;
