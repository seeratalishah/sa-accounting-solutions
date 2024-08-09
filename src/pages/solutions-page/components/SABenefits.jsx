import React from "react";
import { Typography } from "@material-tailwind/react";
import { headingStyles } from "../../../utilities/cssHelper";
import { IconCard } from "../../../components/IconCard";
import { saBenData } from "../data";

const SABenefits = () => {
  return (
    <div className="flex flex-col items-center">
      <Typography variant="h1" className={`mb-10 text-center max-w-[700px] ${headingStyles}`}>
        Here are some of the benefits of working with SA Accounting Solutions
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full justify-items-center">
        {saBenData.map((item, index) => {
          return (
            <div key={index} className="flex justify-center items-center min-h-[360px]">
              <IconCard item={item} minHeight={360}/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SABenefits;
