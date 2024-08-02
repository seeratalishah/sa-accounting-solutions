import React from "react";
import { IconCard } from "../../../components/IconCard";
import { Typography } from "@material-tailwind/react";
import {
  cardParaStyles,
  headingStyles,
} from "../../../utilities/cssHelper";
import { PTSQuestData } from "../data";

const PTSQuestion = () => {
  return (
    <div className="flex flex-col items-center">
      <Typography variant="h1" className={`text-center ${headingStyles}`}>
        Our Ethos.
      </Typography>
      <Typography variant="paragraph" className={`text-center ${cardParaStyles}`}>
        Let’s take a look at who benefits from Ledgerly’s services.
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full justify-items-center mt-10">
        {PTSQuestData.map((item, index) => {
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

export default PTSQuestion;
