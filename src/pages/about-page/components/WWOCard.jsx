import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import {
  whiteLongParaStyles,
  primaryButton,
  whiteHeadingStyles,
} from "../../../utilities/cssHelper";

import blueSwooshBottom from "../../../assets/blue-swoosh-bottom.svg";
import blueSwooshTop from "../../../assets/blue-swoosh-top.svg";

const WWOCard = () => {
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
              Ledgerly is bringing accounting into the modern age and beyond.
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
              If you’re a small business owner, then you probably already know
              that speaking with your accountant once a year to discuss your
              financials and scramble to process your tax return is a thing of
              the past!
            </Typography>
            <Typography
              variant="paragraph"
              className={`max-w-[750px] ${whiteLongParaStyles}`}
            >
              These days, with the advent of automation, slick new accounting
              software and real-time financial reporting, it means that clever,
              creatively minded accountants (like us) are now uniquely equipped
              to offer businesses value add strategic advice.
            </Typography>
            <Typography
              variant="paragraph"
              className={`max-w-[750px] ${whiteLongParaStyles}`}
            >
              And with the accounting industry so ripe for disruption, we are
              stepping in…by embracing automation, enhanced business processes,
              and cutting-edge cloud technology, we are giving the accounting
              industry the kick in the pants it so sorely needed.
            </Typography>
            <div className="flex justify-center md:justify-start">
              <a href="#" className="inline-block">
                <Button
                  size="md"
                  className={`mt-6 ${primaryButton}`}
                  onClick={() => navigate("/solutions")}
                >
                  <span className="text-[16px]">See What We Offer</span>
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

export default WWOCard;
