import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import {
  headingStyles,
  longParaStyles,
  primaryButton,
} from "../../../utilities/cssHelper";

import { corporateReturnsSvg } from "../../../utilities/svgs";

const CRSection = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col lg:flex-row md:flex-row items-center gap-4 w-full">
      <div className="w-full md:w-[50%] flex justify-center lg:justify-start md:justify-start items-center">
        <div dangerouslySetInnerHTML={{ __html: corporateReturnsSvg }}></div>
      </div>
      <div className="w-full md:w-[50%] flex flex-col gap-8 items-center lg:items-end md:items-end text-center lg:text-left md:text-left">
        <div className="flex flex-col gap-4 items-center lg:items-start text-center lg:text-left md:text-left">
          <Typography variant="h1" className={headingStyles}>
            Corporate Returns.
          </Typography>
          <Typography
            variant="paragraph"
            className={`max-w-[750px] md:pr-[30px] lg:pr-[30px] ${longParaStyles}`}
          >
            Dreading tax season? You shouldn’t be. We are your full-service
            accounting solution. We’ll manage your books year-round and file
            your return for you. Say goodbye to dragging boxes to your
            accountant and all that back and forth. We make tax time painless.
          </Typography>
        </div>
        <div className="flex w-full justify-center lg:justify-start md:justify-start">
          <Button
            size="md"
            className={primaryButton}
            onClick={() => navigate("/corporate-returns")}
          >
            <span className="text-[16px]">Learn More</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CRSection;
