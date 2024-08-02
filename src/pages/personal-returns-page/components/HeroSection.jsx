import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import {
  headingStyles,
  longParaStyles,
  primaryButton,
  subBlueHeadingStyles,
} from "../../../utilities/cssHelper";
import { personalReturnSvg } from "../../../utilities/svgs";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center gap-4 w-full flex-col lg:flex-row md:flex-row">
      <div className="order-2 md:order-1 lg:order-1 md:w-[50%] w-full sm:w-full flex flex-col gap-8 justify-center items-center lg:items-start lg:text-left text-center">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left md:text-left">
          <Typography variant="h1" className={headingStyles}>
            Personal Tax Services.
          </Typography>
          <Typography variant="h2" className={`${subBlueHeadingStyles}`}>
            100% Convenience. Zero Confusion.
          </Typography>
          <Typography
            variant="paragraph"
            className={`max-w-[750px] md:pr-[30px] lg:pr-[30px] mt-4 ${longParaStyles}`}
          >
            Fast, convenient and a secure way to file your personal taxes on
            time and with competitive rates to suit your budget. And better yet,
            it’s all done online right from your mobile device. No need to visit
            our office (unless you really want to).
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
      <div className="order-1 md:order-2 lg:order-2 md:w-[50%] w-full sm:w-full flex justify-center md:justify-end lg:justify-end items-center">
        <div dangerouslySetInnerHTML={{ __html: personalReturnSvg }}></div>
      </div>
    </div>
  );
};

export default HeroSection;
