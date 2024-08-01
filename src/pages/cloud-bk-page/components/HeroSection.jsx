import React from "react";
import ourApproach from "../../../assets/our-approach.png";
import { Typography } from "@material-tailwind/react";
import {
  cardBlueParaStyles,
  headingStyles,
  longParaStyles,
  subBlueHeadingStyles,
} from "../../../utilities/cssHelper";
import { cloudBKSvg } from "../../../utilities/svgs";

const HeroSection = () => {
  return (
    <div className="flex items-center gap-4 w-full flex-col lg:flex-row md:flex-row">
      <div className="order-2 md:order-1 lg:order-1 md:w-[50%] lg:w-[50%] w-full sm:w-full flex flex-col gap-8 justify-center items-center lg:items-start lg:text-left text-center">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left md:text-left">
          <Typography variant="h1" className={headingStyles}>
            Cloud Bookkeeping.
          </Typography>
          <Typography variant="h2" className={`${subBlueHeadingStyles}`}>
            Accounting…Anywhere, Anytime!
          </Typography>
          <Typography
            variant="paragraph"
            className={`max-w-[750px] md:pr-[30px] lg:pr-[30px] mt-4 ${longParaStyles}`}
          >
            Know exactly where your money is going. We help you keep a pulse on
            your business to help you make better decisions. Better yet, come
            tax time, your books are up-to-date so we can maximize your returns.
          </Typography>
        </div>
      </div>
      <div className="order-1 md:order-2 lg:order-2 md:w-[50%] lg:w-[50%] w-full sm:w-full flex justify-center md:justify-end lg:justify-end items-center">
      <div dangerouslySetInnerHTML={{ __html: cloudBKSvg }}></div>
      </div>
    </div>
  );
};

export default HeroSection;
