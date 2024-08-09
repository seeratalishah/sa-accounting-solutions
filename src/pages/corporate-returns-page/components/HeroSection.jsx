import React from "react";
import { Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import {
  cardBlueParaStyles,
  headingStyles,
  longParaStyles,
  subBlueHeadingStyles,
} from "../../../utilities/cssHelper";

import { corporateReturnsSvg } from "../../../utilities/svgs";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center gap-4 w-full flex-col lg:flex-row md:flex-row">
      <div className="order-2 md:order-1 lg:order-1 md:w-[50%] lg:w-[50%] w-full sm:w-full flex flex-col gap-8 justify-center items-center lg:items-start lg:text-left text-center">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left md:text-left">
          <Typography variant="h1" className={headingStyles}>
            Corporate Tax Services.
          </Typography>
          <Typography variant="h2" className={`${subBlueHeadingStyles}`}>
            Taxes….Automated and Simplified!
          </Typography>
          <Typography
            variant="paragraph"
            className={`max-w-[750px] md:pr-[30px] lg:pr-[30px] mt-4 ${longParaStyles}`}
          >
            One of the most specialized types of accounting involves corporate
            taxes. Many firms are not equipped to handle both bookkeeping and
            filing your return. That's where we come in. There's no need to
            prepare a package for another accountant to file your tax return –
            we handle it all. Our dedicated teams of accountants specialize in
            corporate tax, making tax season a breeze.
          </Typography>
        </div>
      </div>
      <div className="order-1 md:order-2 lg:order-2 md:w-[50%] lg:w-[50%] w-full sm:w-full flex justify-center md:justify-end lg:justify-end items-center">
        <div dangerouslySetInnerHTML={{ __html: corporateReturnsSvg }}></div>
      </div>
    </div>
  );
};

export default HeroSection;
