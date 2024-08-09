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
              SA Accounting Solutions is ushering accounting into the modern age
              and beyond.
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
              If you’re a small business owner, you likely already know that the
              days of meeting with your accountant once a year to discuss your
              financials and hastily process your tax return are over!
            </Typography>
            <Typography
              variant="paragraph"
              className={`max-w-[750px] ${whiteLongParaStyles}`}
            >
              Nowadays, with the rise of automation, advanced accounting
              software, and real-time financial reporting, clever, creatively
              minded accountants (like us) are uniquely equipped to provide
              businesses with value-added strategic advice.
            </Typography>
            <Typography
              variant="paragraph"
              className={`max-w-[750px] ${whiteLongParaStyles}`}
            >
              And with the accounting industry primed for disruption, we are
              stepping in. By embracing automation, improving business
              processes, and utilizing cutting-edge cloud technology, we are
              giving the accounting industry the shake-up it has long needed.
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
