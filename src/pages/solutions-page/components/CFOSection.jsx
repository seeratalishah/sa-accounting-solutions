import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import {
  headingStyles,
  longParaStyles,
  primaryButton,
} from "../../../utilities/cssHelper";

import { cfoSvg } from "../../../utilities/svgs";

const CFOSection = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col lg:flex-row md:flex-row items-center gap-4 w-full">
      <div className="w-full md:w-[50%] flex justify-center lg:justify-start md:justify-start items-center">
        <div dangerouslySetInnerHTML={{ __html: cfoSvg }}></div>
      </div>
      <div className="w-full md:w-[50%] flex flex-col gap-8 items-center lg:items-end md:items-end text-center lg:text-left md:text-left">
        <div className="flex flex-col gap-4 items-center lg:items-start text-center lg:text-left md:text-left">
          <Typography variant="h1" className={headingStyles}>
            CFO Services.
          </Typography>
          <Typography
            variant="paragraph"
            className={`max-w-[750px] md:pr-[30px] lg:pr-[30px] ${longParaStyles}`}
          >
            Need help creating a budget or forecast? Looking to grow or expand
            but don’t know how? Struggling to get a bank loan? That's where we
            come in. Our CFOs have years of experience and can offer significant
            value to your organization, providing the same services without the
            extra payroll costs.
          </Typography>
        </div>
        <div className="flex w-full justify-center lg:justify-start md:justify-start">
          <Button
            size="md"
            className={primaryButton}
            onClick={() => navigate("/CFO-services")}
          >
            <span className="text-[16px]">Learn More</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CFOSection;
