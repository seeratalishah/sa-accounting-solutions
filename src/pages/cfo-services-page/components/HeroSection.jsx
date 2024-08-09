import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import {
  cardBlueParaStyles,
  headingStyles,
  longParaStyles,
  primaryButton,
  subBlueHeadingStyles,
} from "../../../utilities/cssHelper";

import { cfoSvg } from "../../../utilities/svgs";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center gap-4 w-full flex-col lg:flex-row md:flex-row">
      <div className="order-2 md:order-1 lg:order-1 md:w-[50%] lg:w-[50%] w-full sm:w-full flex flex-col gap-8 justify-center items-center lg:items-start lg:text-left text-center">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left md:text-left">
          <Typography variant="h1" className={headingStyles}>
            CFO Services.
          </Typography>
          <Typography variant="h2" className={`${subBlueHeadingStyles}`}>
            Unlock your Business’s Financial Potential.
          </Typography>
          <Typography
            variant="paragraph"
            className={`max-w-[750px] md:pr-[30px] lg:pr-[30px] mt-4 ${longParaStyles}`}
          >
            Experience the peace of mind that comes with having a dedicated CFO
            without the full-time commitment. Unlock growth, savings, and
            financial success with Ledgerly’s CFO services. Your business
            deserves the best in financial leadership – contact us today to get
            started!
          </Typography>
        </div>
        <div className="flex gap-2 w-full justify-center sm:justify-center md:justify-start lg:justify-start">
          <Button
            size="md"
            className={primaryButton}
            onClick={() => navigate("/contact")}
          >
            <span className="text-[16px]"> Get Stared Now</span>
          </Button>
        </div>
      </div>
      <div className="order-1 md:order-2 lg:order-2 md:w-[50%] lg:w-[50%] w-full sm:w-full flex justify-center md:justify-end lg:justify-end items-center">
        <div dangerouslySetInnerHTML={{ __html: cfoSvg }}></div>
      </div>
    </div>
  );
};

export default HeroSection;
