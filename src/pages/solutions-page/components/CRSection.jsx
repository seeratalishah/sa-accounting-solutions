import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import {
  headingStyles,
  longParaStyles,
  primaryButton,
} from "../../../utilities/cssHelper";

import accountingDiffWay from "../../../assets/about-img.png";

const CRSection = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col lg:flex-row md:flex-row items-center gap-4 w-full">
      <div className="w-full lg:w-[30%] md:w-[40%] flex justify-center lg:justify-start md:justify-start items-center">
        <img
          src={accountingDiffWay}
          alt="new-accounting-image"
          className="h-[400px]"
        />
      </div>
      <div className="w-full lg:w-[70%] md:w-[60%] flex flex-col gap-8 items-center lg:items-end md:items-end text-center lg:text-left md:text-left">
        <div className="flex flex-col gap-4 items-center lg:items-start text-center lg:text-left md:text-left">
          <Typography variant="h1" className={headingStyles}>
            Corporate Returns.
          </Typography>
          <Typography
            variant="paragraph"
            className={`max-w-[750px] md:pr-[30px] lg:pr-[30px] ${longParaStyles}`}
          >
            Dreading tax season? You shouldn’t, we are your full-service
            accounting solution. We’ll look after your books throughout the year
            and file your return for you. Gone are the days of dragging all
            those boxes to your accountant and all that back and forth. We make
            tax time painless.
          </Typography>
        </div>
        <div className="flex w-full justify-center lg:justify-start md:justify-start">
          <Button
            size="md"
            className={primaryButton}
            onClick={() => navigate("/corporate-returns")}
          >
            <span className="text-[16px]">Learn More</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CRSection;
