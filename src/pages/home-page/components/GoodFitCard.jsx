import { Button, Typography } from "@material-tailwind/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  whiteLongParaStyles,
  primaryButton,
  whiteHeadingStyles,
} from "../../../utilities/cssHelper";

import blueSwooshBottom from "../../../assets/blue-swoosh-bottom.svg";
import blueSwooshTop from "../../../assets/blue-swoosh-top.svg";

const GoodFitCard = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col items-center">
      {/* Image before the main content */}
      <img src={blueSwooshTop} alt="Image Before" className="w-full" />

      {/* Main content */}
      <div className="bg-[#31B0D0] w-full flex items-center justify-center py-16 px-8">
        <div className="max-w-[1300px] bg-black-50 text-white p-10 lg:p-16 rounded-[32px] shadow-lg w-full flex flex-col md:flex-row">
          {/* Left Section - Heading */}
          <div className="flex-none md:flex-1 md:text-left mb-4 md:mb-0">
            <Typography variant="h1" className={whiteHeadingStyles}>
              We’re more than just accountants.
            </Typography>
          </div>
          {/* Divider */}
          <div className="hidden md:block w-px bg-gray-700 mx-6"></div>
          {/* Right Section - Content */}
          <div className="flex flex-col gap-6">
            <Typography
              variant="paragraph"
              className={`max-w-[750px] ${whiteLongParaStyles}`}
            >
              We are ambitious accounting professionals turned disruptive
              entrepreneurs who noticed that the accounting industry wasn’t
              evolving with the times or with the needs of small business owners
              in mind.
            </Typography>
            <Typography
              variant="paragraph"
              className={`max-w-[750px] ${whiteLongParaStyles}`}
            >
              Having significant knowledge and insight into the world of
              accounting, technology and business process optimization, we
              formed Ledgerly to re-shape the accounting industry to engage and
              excite small business owners with better, faster and technology
              driven accounting services.
            </Typography>
            <div className="flex justify-center md:justify-start">
              <a href="#" className="inline-block">
                <Button
                  size="md"
                  className={`mt-6 ${primaryButton}`}
                  onClick={() => navigate("/about")}
                >
                  Find out if we’re a good fit
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Image after the main content */}
      <img src={blueSwooshBottom} alt="Image After" className="w-full" />
    </div>
  );
};

export default GoodFitCard;
