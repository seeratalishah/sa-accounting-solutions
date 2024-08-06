import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import {
  headingStyles,
  longParaStyles,
  primaryButton,
  secondaryButton,
} from "../../../utilities/cssHelper";
import { useNavigate } from "react-router-dom";

import { homeSvg } from "../../../utilities/svgs";

const NGAccounting = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center gap-4 w-full flex-col sm:flex-col lg:flex-row md:flex-row">
      <div className="order-2 md:order-1 lg:order-1 md:w-[50%] w-full sm:w-full flex flex-col gap-8 justify-center items-center lg:items-start lg:text-left text-center">
        <div className="flex flex-col gap-4 items-center lg:items-start text-center lg:text-left md:text-left">
          <Typography variant="h1" className={headingStyles}>
            Welcome to the <span className="text-blue-600">Next Era</span> of Accounting Innovation.
          </Typography>
          <Typography
            variant="paragraph"
            className={`max-w-[750px] md:pr-[30px] lg:pr-[30px] ${longParaStyles}`}
          >
            We recognize that managing your business finances can be daunting.
            That’s why we are dedicated to helping thousands of small business
            owners like you spend less time on tedious tasks such as
            bookkeeping, payroll, and taxes, and more time focusing on what they
            excel at – growing their business.
          </Typography>
        </div>
        <div className="flex gap-2 w-full justify-center sm:justify-center md:justify-start lg:justify-start">
          <Button
            size="md"
            className={primaryButton}
            onClick={() => navigate("/solutions")}
          >
            <span className="text-[16px]">What We Do</span>
          </Button>
          <Button
            size="md"
            className={secondaryButton}
            onClick={() => navigate("/about")}
          >
            <span className="text-[16px]">Who We Are</span>
          </Button>
        </div>
      </div>
      <div className="order-1 md:order-2 lg:order-2 md:w-[50%] w-full sm:w-full flex justify-center md:justify-end lg:justify-end items-center">
        <div dangerouslySetInnerHTML={{ __html: homeSvg }}></div>
      </div>
    </div>
  );
};

export default NGAccounting;
