import React from "react";
import { ourEthosData } from "../../about-page/data";
import { IconCard } from "../../../components/IconCard";
import { Typography } from "@material-tailwind/react";
import {
  cardBlueParaStyles,
  cardParaStyles,
  headingStyles,
} from "../../../utilities/cssHelper";
import { NumberCard } from "../../../components/NumberCard";

const EasyEngagement = () => {
  return (
    <div className="flex flex-col items-center">
      <Typography variant="h1" className={headingStyles}>
        Easy Engagement.
      </Typography>
      <Typography variant="paragraph" className={`mb-10 ${cardParaStyles}`}>
        A better accounting experience is only 3 steps away:
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full justify-items-center">
        {ourEthosData.map((item, index) => {
          return (
            <div key={index} className="flex justify-center items-center">
              <NumberCard item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EasyEngagement;
