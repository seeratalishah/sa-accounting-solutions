import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import {
  headingStyles,
  longParaStyles,
  primaryButton,
} from "../../../utilities/cssHelper";

import { aboutSvg } from "../../../utilities/svgs";

const AccountingDoneDeff = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center gap-4 w-full flex-col lg:flex-row md:flex-row">
      <div className="order-2 md:order-1 lg:order-1 md:w-[50%] lg:w-[50%] w-full sm:w-full flex flex-col gap-8 justify-center items-center lg:items-start lg:text-left text-center">
        <div className="flex flex-col gap-4 items-center lg:items-start text-center lg:text-left md:text-left">
          <Typography variant="h1" className={headingStyles}>
            Accounting. <span className="text-blue-600">Done Differently.</span>
          </Typography>
          <Typography
            variant="paragraph"
            className={`max-w-[750px] md:pr-[30px] lg:pr-[30px] ${longParaStyles}`}
          >
            We’re the new breed of numbers driven, tech-savvy accountants that
            see accounting solutions as an opportunity to transform accounting
            into an engine for growth and a source of competitive advantage.
          </Typography>
        </div>
        <div className="flex w-full justify-center sm:justify-center md:justify-start lg:justify-start">
          <Button
            size="md"
            className={primaryButton}
            onClick={() => navigate("/our-approach")}
          >
            <span className="text-[16px]"> Our Approach</span>
          </Button>
        </div>
      </div>
      <div className="order-1 md:order-2 lg:order-2 md:w-[50%] lg:w-[50%] w-full sm:w-full flex justify-center md:justify-end lg:justify-end items-center">
      <div dangerouslySetInnerHTML={{ __html: aboutSvg }}></div>
      </div>
    </div>
  );
};

export default AccountingDoneDeff;
