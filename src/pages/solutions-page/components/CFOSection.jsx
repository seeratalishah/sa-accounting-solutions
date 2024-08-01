import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import {
  headingStyles,
  longParaStyles,
  primaryButton,
} from "../../../utilities/cssHelper";

import accountingDiffWay from "../../../assets/about-img.png";

const CFOSection = () => {
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
            CFO Services.
          </Typography>
          <Typography
            variant="paragraph"
            className={`max-w-[750px] md:pr-[30px] lg:pr-[30px] ${longParaStyles}`}
          >
            Need help putting a budget or forecast together? Looking to
            grow/expand but don’t know how? Having trouble getting a bank loan?
            That’s where we step in. CFO’s have years of experience and can
            provide significant value to your organization. We can provide the
            same services without all that added payroll.
          </Typography>
        </div>
        <div className="flex w-full justify-center lg:justify-start md:justify-start">
          <Button
            size="md"
            className={primaryButton}
            onClick={() => navigate("/CFO-services")}
          >
            <span className="text-[16px]">Learn More</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CFOSection;
