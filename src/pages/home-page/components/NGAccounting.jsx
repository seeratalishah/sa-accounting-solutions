import React from "react";
import newAccounting from "../../../assets/home-img.png";
import { Button, Typography } from "@material-tailwind/react";
import {
  headingStyles,
  longParaStyles,
  primaryButton,
  secondaryButton,
} from "../../../utilities/cssHelper";
import { useNavigate } from "react-router-dom";

const NGAccounting = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center gap-4 w-full flex-col sm:flex-col lg:flex-row md:flex-row">
      <div className="order-2 md:order-1 lg:order-1 md:w-[60%] lg:w-[70%] w-full sm:w-full flex flex-col gap-8 justify-center items-center lg:items-start lg:text-left text-center">
        <div className="flex flex-col gap-4 items-center lg:items-start text-center lg:text-left md:text-left">
          <Typography variant="h1" className={headingStyles}>
            Welcome to a <span className="text-blue-600">New Generation</span>{" "}
            of Accounting.
          </Typography>
          <Typography
            variant="paragraph"
            className={`max-w-[750px] md:pr-[30px] lg:pr-[30px] ${longParaStyles}`}
          >
            We understand that dealing with your business finances can be
            stressful. That’s why we made it our mission to help thousands of
            small business owners just like you, spend less time on all the
            soul-sapping stuff like bookkeeping, payroll and tax, and focus more
            on what they do best – growing their business.
          </Typography>
        </div>
        <div className="flex gap-2 w-full justify-center sm:justify-center md:justify-start lg:justify-start">
          <Button size="md" className={primaryButton}>
            What We Do
          </Button>
          <Button size="md" className={secondaryButton} onClick={() => navigate("/about")}>
            Who We Are
          </Button>
        </div>
      </div>
      <div className="order-1 md:order-2 lg:order-2 md:w-[40%] lg:w-[30%] w-full sm:w-full flex justify-center md:justify-end lg:justify-end items-center">
        <img
          src={newAccounting}
          alt="new-accounting-image"
          className="h-[400px]"
        />
      </div>
    </div>
  );
};

export default NGAccounting;
