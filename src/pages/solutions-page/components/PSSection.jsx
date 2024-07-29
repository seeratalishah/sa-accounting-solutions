import React from "react";
import accountingDiffWay from "../../../assets/about-img.png";
import { Button, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import {
  headingStyles,
  longParaStyles,
  primaryButton,
} from "../../../utilities/cssHelper";

const PSSection = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center gap-4 w-full flex-col lg:flex-row md:flex-row">
      <div className="order-2 md:order-1 lg:order-1 md:w-[60%] lg:w-[70%] w-full sm:w-full flex flex-col gap-8 justify-center items-center lg:items-start lg:text-left text-center">
        <div className="flex flex-col gap-4 items-center lg:items-start text-center lg:text-left md:text-left">
          <Typography variant="h1" className={headingStyles}>
          Payroll Services.
          </Typography>
          <Typography variant="paragraph" className={`max-w-[750px] md:pr-[30px] lg:pr-[30px] ${longParaStyles}`}>
          No more rushing to the office at 11pm on a Thursday to enter that last minute timesheet. We will automate your data capture so you can run your payroll from anywhere. We’ll even look after all your reporting, so CRA stays happy.
          </Typography>
        </div>
        <div className="flex w-full justify-center sm:justify-center md:justify-start lg:justify-start">
          <Button
            size="md"
            className={primaryButton}
            onClick={() => navigate("/our-approach")}
          >
            Learn More
          </Button>
        </div>
      </div>
      <div className="order-1 md:order-2 lg:order-2 md:w-[40%] lg:w-[30%] w-full sm:w-full flex justify-center md:justify-end lg:justify-end items-center">
        <img
          src={accountingDiffWay}
          alt="new-accounting-image"
          className="h-[400px]"
        />
      </div>
    </div>
  );
};

export default PSSection;
