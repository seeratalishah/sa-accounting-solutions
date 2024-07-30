import React from "react";
import ourApproach from "../../../assets/our-approach.png";
import { Button, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import {
  cardBlueParaStyles,
  headingStyles,
  longParaStyles,
  primaryButton,
} from "../../../utilities/cssHelper";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center gap-4 w-full flex-col lg:flex-row md:flex-row">
      <div className="order-2 md:order-1 lg:order-1 md:w-[60%] lg:w-[70%] w-full sm:w-full flex flex-col gap-8 justify-center items-center lg:items-start lg:text-left text-center">
        <div className="flex flex-col gap-4 items-center lg:items-start text-center lg:text-left md:text-left">
          <Typography variant="h1" className={headingStyles}>
            Personal Tax Services.
          </Typography>
          <Typography variant="lead" className={`${cardBlueParaStyles}`}>
            100% Convenience. Zero Confusion.
          </Typography>
          <Typography
            variant="paragraph"
            className={`max-w-[750px] md:pr-[30px] lg:pr-[30px] ${longParaStyles}`}
          >
            Fast, convenient and a secure way to file your personal taxes on
            time and with competitive rates to suit your budget. And better yet,
            it’s all done online right from your mobile device. No need to visit
            our office (unless you really want to).
          </Typography>
        </div>
        <div className="flex gap-2 w-full justify-center sm:justify-center md:justify-start lg:justify-start">
          <Button size="md" className={primaryButton}>
            Get Stared Now
          </Button>
        </div>
      </div>
      <div className="order-1 md:order-2 lg:order-2 md:w-[40%] lg:w-[30%] w-full sm:w-full flex justify-center md:justify-end lg:justify-end items-center">
        <img
          src={ourApproach}
          alt="new-accounting-image"
          className="h-[400px]"
        />
      </div>
    </div>
  );
};

export default HeroSection;
