import React from "react";
import { ourEthosData } from "../../about-page/data";
import { Typography } from "@material-tailwind/react";
import { cardParaStyles, headingStyles } from "../../../utilities/cssHelper";
import { NumberCard } from "../../../components/NumberCard";
import { engagementData } from "../data";

const EasyEngagement = () => {
  return (
    <div className="flex flex-col items-center">
      <Typography variant="h1" className={`text-center ${headingStyles}`}>
        Effortless Engagement.
      </Typography>
      <Typography
        variant="paragraph"
        className={`mb-10 text-center ${cardParaStyles}`}
      >
        A better accounting experience is just three steps away
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full justify-items-center">
        {engagementData.map((item, index) => {
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
