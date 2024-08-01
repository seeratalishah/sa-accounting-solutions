import React from "react";
import { YNOXOSFData } from "../data";
import { Typography } from "@material-tailwind/react";
import { cardParaStyles, headingStyles } from "../../../utilities/cssHelper";
import { ServiceCard } from "../../../components/ServiceCard";

const YNOXOS = () => {
  return (
    <div className="flex flex-col items-center">
      <Typography variant="h1" className={headingStyles}>
        Your numbers. Our expertise. One story.
      </Typography>
      <Typography variant="paragraph" className={`mb-10 ${cardParaStyles}`}>
        Here’s some of the benefits of working with Ledgerly
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full justify-items-center">
        {YNOXOSFData.map((item, index) => {
          return (
            <div key={index} className="flex justify-center items-center">
              <ServiceCard item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default YNOXOS;
