import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import {
  whiteLongParaStyles,
  primaryButton,
  whiteHeadingStyles,
  whiteSubHeadingStyles,
} from "../../../utilities/cssHelper";

import blueSwooshBottom from "../../../assets/blue-swoosh-bottom.svg";
import blueSwooshTop from "../../../assets/blue-swoosh-top.svg";
import { FaCalendar } from "react-icons/fa6";
import { pcBenfits } from "../data";

const Benefits = () => {
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
              Advantages of Incorporating Your Business
            </Typography>
          </div>
          {/* Divider */}
          <div className="hidden md:block w-px bg-gray-700 mx-6"></div>
          {/* Right Section - Content */}

          <div>
            <Typography
              variant="paragraph"
              className={`max-w-[750px] ${whiteLongParaStyles}`}
            >
              Starting a business using your personal identity is common, but as
              your business grows, this approach can pose significant risks. If
              your business faces legal issues or liabilities, your personal
              assets could be exposed. Incorporating your business helps protect
              your family’s personal assets from these potential liabilities.
            </Typography>
            <div className="flex flex-col gap-6 py-4">
              {pcBenfits.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div className="flex flex-col pb-4 md:ml-4 lg:ml-4 border-b border-gray-700">
                    <div className="flex items-start md:items-center lg:items-center gap-4 mb-3">
                      <IconComponent size={32} className="text-blue-600" />
                      <Typography
                        variant="h2"
                        className={whiteSubHeadingStyles}
                      >
                        {item.title}
                      </Typography>
                    </div>
                    <Typography
                      variant="paragraph"
                      className={`max-w-[750px] ${whiteLongParaStyles}`}
                    >
                      {item.desc}
                    </Typography>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Image after the main content */}
      <img src={blueSwooshBottom} alt="Image After" className="w-full" />
    </div>
  );
};

export default Benefits;
