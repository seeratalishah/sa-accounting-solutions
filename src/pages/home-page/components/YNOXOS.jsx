import React from "react";
import { YNOXOSFData } from "../data";
import { Typography } from "@material-tailwind/react";
import { cardParaStyles, headingStyles } from "../../../utilities/cssHelper";
import { ServiceCard } from "../../../components/ServiceCard";

const YNOXOS = () => {
  return (
    <div className="flex flex-col items-center">
      <Typography variant="h1" className={`text-center ${headingStyles}`}>
        Your data. Our expertise. A unified narrative.
      </Typography>
      <Typography
        variant="paragraph"
        className={`mb-10 text-center ${cardParaStyles}`}
      >
        Here are some of the benefits of working with SA Accounting Solutions:
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full justify-items-center">
        {YNOXOSFData.map((item, index) => {
          return (
            <div key={index} className="flex justify-center items-center min-h-[330px]">
              <ServiceCard item={item} minHeight={330}/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default YNOXOS;
