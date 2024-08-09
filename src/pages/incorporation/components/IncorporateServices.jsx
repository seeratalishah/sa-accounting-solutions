import React from "react";
import { incorporateServicesData } from "../data";
import { IconCard } from "../../../components/IconCard";
import { Typography } from "@material-tailwind/react";
import {
  cardBlueParaStyles,
  cardParaStyles,
  headingStyles,
} from "../../../utilities/cssHelper";

const IncorporateServices = () => {
  return (
    <div className="flex flex-col items-center">
      <Typography variant="h1" className={`text-center ${headingStyles}`}>
      Our Incorporation Services
      </Typography>
      <Typography variant="paragraph" className={`text-center ${cardParaStyles}`}>
      At SA Accounting Solutions, we have extensive experience in incorporation laws and tax regulations. We have been helping businesses across Greater Toronto Area and Mississauga incorporate successfully for many years. 
      </Typography>
      <Typography
        variant="lead"
        className={`mb-10 text-center ${cardBlueParaStyles}`}
      >
       Our services include
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full justify-items-center">
        {incorporateServicesData.map((item, index) => {
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

export default IncorporateServices;
