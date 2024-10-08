import React from "react";
import { Typography } from "@material-tailwind/react";
import { headingStyles, longParaStyles } from "../../../utilities/cssHelper";

import { approachScg } from "../../../utilities/svgs";

const HeroSection = () => {
  return (
    <div className="flex items-center gap-4 w-full flex-col lg:flex-row md:flex-row">
      <div className="order-2 md:order-1 lg:order-1 md:w-[50%] lg:w-[50%] w-full sm:w-full flex flex-col gap-8 justify-center items-center lg:items-start lg:text-left text-center">
        <div className="flex flex-col gap-4 items-center lg:items-start text-center lg:text-left md:text-left">
          <Typography variant="h1" className={headingStyles}>
            Our <span className="text-blue-600">Approach.</span>
          </Typography>
          <Typography
            variant="paragraph"
            className={`max-w-[750px] md:pr-[30px] lg:pr-[30px] ${longParaStyles}`}
          >
            At SA Accounting Solutions, we blend cutting-edge technology with seasoned expertise to empower small business owners. We understand that accounting isn’t just about numbers; it’s about fostering financial growth and stability. Our tech-driven approach uses innovative tools and cloud-based solutions to streamline financial processes, offering real-time insights into your business’s financial health..
          </Typography>
        </div>
      </div>
      <div className="order-1 md:order-2 lg:order-2 md:w-[50%] lg:w-[50%] w-full sm:w-full flex justify-center md:justify-end lg:justify-end items-center">
      <div dangerouslySetInnerHTML={{ __html: approachScg }}></div>
      </div>
    </div>
  );
};

export default HeroSection;
