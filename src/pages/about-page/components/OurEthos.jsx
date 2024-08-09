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
      <Typography variant="h1" className={`text-center ${headingStyles}`}>
        Our Philosophy.
      </Typography>
      <Typography
        variant="paragraph"
        className={`text-center ${cardParaStyles}`}
      >
        The principles that guide our business, our solutions, and our brand.
      </Typography>
      <Typography
        variant="lead"
        className={`mb-10 text-center ${cardBlueParaStyles}`}
      >
        This is what drives us.
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full justify-items-center">
        {ourEthosData.map((item, index) => {
          return (
            <div key={index} className="flex justify-center items-center">
              <IconCard item={item} minHeight={400} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurEthos;
