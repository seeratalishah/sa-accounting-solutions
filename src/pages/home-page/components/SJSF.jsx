import React from "react";
import { SJSFData } from "../data";
import { IconButtonCard } from "../../../components/IconButtonCard";
import { Typography } from "@material-tailwind/react";
import { cardParaStyles, headingStyles } from "../../../utilities/cssHelper";

const SJSF = () => {
  return (
    <div className="flex flex-col items-center">
      <Typography variant="h1" className={`text-center ${headingStyles}`}>
      Stop Multitasking. Start Concentrating.
      </Typography>
      <Typography variant="paragraph" className={`mb-10 text-center ${cardParaStyles}`}>
        Integrated accounting solutions that move your business forward.
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full justify-items-center">
        {SJSFData.map((item, index) => {
          return (
            <div key={index} className="flex justify-center items-center">
              <IconButtonCard item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SJSF;
