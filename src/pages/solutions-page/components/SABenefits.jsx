import React from "react";
import { Typography } from "@material-tailwind/react";
import { headingStyles } from "../../../utilities/cssHelper";
import { IconCard } from "../../../components/IconCard";
import { saBenData } from "../data";

const SABenefits = () => {
  return (
    <div className="flex flex-col items-center">
      <Typography variant="h1" className={`mb-10 text-center ${headingStyles}`}>
        Here’s some of the benefits to working with Ledgerly.
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full justify-items-center">
        {saBenData.map((item, index) => {
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

export default SABenefits;
