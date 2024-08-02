import React from "react";
import { Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import {
  cardBlueParaStyles,
  headingStyles,
  longParaStyles,
  subBlueHeadingStyles,
} from "../../../utilities/cssHelper";

import { payrollSvg } from "../../../utilities/svgs";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center gap-4 w-full flex-col lg:flex-row md:flex-row">
      <div className="order-2 md:order-1 lg:order-1 md:w-[50%] lg:w-[50%] w-full sm:w-full flex flex-col gap-8 justify-center items-center lg:items-start lg:text-left text-center">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left md:text-left">
          <Typography variant="h1" className={headingStyles}>
            Payroll Services.
          </Typography>
          <Typography variant="h2" className={`${subBlueHeadingStyles}`}>
            Payroll…Simplified!
          </Typography>
          <Typography
            variant="paragraph"
            className={`max-w-[750px] md:pr-[30px] lg:pr-[30px] mt-4 ${longParaStyles}`}
          >
            Ask any business owner and they will tell you that managing payroll
            is a pain. It’s the single biggest expense for almost all
            businesses, and it’s extremely complicated with frequent updates and
            changes (new hires, changes to deductions, benefits, taxes, laws,
            regulations, etc.). We help you implement the right technology to
            simplify and automate your payroll process.
          </Typography>
        </div>
      </div>
      <div className="order-1 md:order-2 lg:order-2 md:w-[50%] lg:w-[50%] w-full sm:w-full flex justify-center md:justify-end lg:justify-end items-center">
      <div dangerouslySetInnerHTML={{ __html: payrollSvg }}></div>
      </div>
    </div>
  );
};

export default HeroSection;
