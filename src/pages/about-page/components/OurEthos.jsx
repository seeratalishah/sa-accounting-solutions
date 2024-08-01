import React from "react";
import { ourEthosData } from "../data";
import { IconCard } from "../../../components/IconCard";
import { Typography } from "@material-tailwind/react";
import {
  cardBlueParaStyles,
  cardParaStyles,
  headingStyles,
} from "../../../utilities/cssHelper";

const OurEthos = () => {
  return (
    <div className="flex flex-col items-center">
      <Typography variant="h1" className={headingStyles}>
        Our Ethos.
      </Typography>
      <Typography variant="paragraph" className={cardParaStyles}>
        The values that drive our business, our solutions and our brand.
      </Typography>
      <Typography
        variant="lead"
        className={`mb-10 text-center ${cardBlueParaStyles}`}
      >
        This is what makes us tick.
      </Typography>
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
