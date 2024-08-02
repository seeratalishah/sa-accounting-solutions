import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import {
  headingStyles,
  longParaStyles,
  primaryButton,
} from "../../../utilities/cssHelper";

import { personalReturnSvg } from "../../../utilities/svgs";

const PRSection = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center gap-4 w-full flex-col lg:flex-row md:flex-row">
      <div className="order-2 md:order-1 lg:order-1 md:w-[50%] w-full sm:w-full flex flex-col gap-8 justify-center items-center lg:items-start lg:text-left text-center">
        <div className="flex flex-col gap-4 items-center lg:items-start text-center lg:text-left md:text-left">
          <Typography variant="h1" className={headingStyles}>
            Personal Returns.
          </Typography>
          <Typography
            variant="paragraph"
            className={`max-w-[750px] md:pr-[30px] lg:pr-[30px] ${longParaStyles}`}
          >
            Whether you’re a solopreneur, side hustler, or full blown e-commerce
            mogul; we have the knowledge and insights to make tax season a
            breeze. We offer convenient, 100% virtual tax preparation services,
            all from the comfort of your home. We’ll even help you with all your
            deductions to make sure you get as much money back as possible.
          </Typography>
        </div>
        <div className="flex w-full justify-center sm:justify-center md:justify-start lg:justify-start">
          <Button
            size="md"
            className={primaryButton}
            onClick={() => navigate("/personal-returns")}
          >
            <span className="text-[16px]">Learn More</span>
          </Button>
        </div>
      </div>
      <div className="order-1 md:order-2 lg:order-2 md:w-[50%] w-full sm:w-full flex justify-center md:justify-end lg:justify-end items-center">
      <div dangerouslySetInnerHTML={{ __html: personalReturnSvg }}></div>
      </div>
    </div>
  );
};

export default PRSection;
