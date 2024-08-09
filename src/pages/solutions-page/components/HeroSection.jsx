import React from "react";
import { Typography } from "@material-tailwind/react";
import {
  headingStyles,
  longParaStyles,
  subBlueHeadingStyles,
} from "../../../utilities/cssHelper";

import { corporateReturnsSvg } from "../../../utilities/svgs";

const HeroSection = () => {
  return (
    <div className="flex items-center gap-4 w-full flex-col lg:flex-row md:flex-row">
      <div className="order-2 md:order-1 lg:order-1 md:w-[50%] lg:w-[50%] w-full sm:w-full flex flex-col gap-8 justify-center items-center lg:items-start lg:text-left text-center">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left md:text-left">
          <Typography variant="h1" className={headingStyles}>
            The Future of Accounting.
          </Typography>
          <Typography variant="h2" className={`${subBlueHeadingStyles}`}>
            Don't get left behind. Prepare for the future!
          </Typography>
          <Typography
            variant="paragraph"
            className={`max-w-[750px] md:pr-[30px] lg:pr-[30px] mt-4 ${longParaStyles}`}
          >
            We've combined top-tier cloud technology with real-time reporting
            and expert guidance to create custom paperless solutions that save
            you time and money, and provide valuable insights to drive your
            business forward.
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
