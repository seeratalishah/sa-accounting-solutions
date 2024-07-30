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
import { FaCheckCircle } from "react-icons/fa";
import { payrollData } from "../data";

const BetterPayroll = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col items-center">
      {/* Image before the main content */}
      <img src={blueSwooshTop} alt="Image Before" className="w-full" />

      {/* Main content */}
      <div className="bg-[#31B0D0] w-full flex items-center justify-center py-16 px-8">
        <div className="max-w-[1300px] bg-black-50 text-white p-10 lg:p-16 rounded-[32px] shadow-lg w-full flex flex-col md:flex-row">
          {/* Left Section - Heading */}
          <div className="flex-none md:flex-1 md:text-left mb-4 md:mb-0 md:basis-1/3">
            <Typography variant="h1" className={whiteHeadingStyles}>
              A better way to payroll.
            </Typography>
            <Typography
              variant="paragraph"
              className={`max-w-[750px] ${whiteLongParaStyles}`}
            >
              Employee pay goes beyond just cutting a cheque. We make your
              payroll better by allowing you to provide:
            </Typography>
          </div>
          {/* Divider */}
          <div className="hidden md:block w-px bg-gray-700 mx-6"></div>
          {/* Right Section - Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:basis-2/3">
            {payrollData.map((item, index) => {
              return (
                <div className="flex items-start gap-3" key={index}>
                  <FaCheckCircle size={24} className="text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-lg">{item.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Image after the main content */}
      <img src={blueSwooshBottom} alt="Image After" className="w-full" />
    </div>
  );
};

export default BetterPayroll;
