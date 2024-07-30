import React, { useState } from "react";
import {
  headingStyles,
  longParaStyles,
  primaryButton,
  subHeadingStyles,
} from "../../../utilities/cssHelper";
import { Button, Typography } from "@material-tailwind/react";
import { Fa42Group, FaPlus } from "react-icons/fa6";
import faqImg from "../../../assets/faq-img (2).png";
import { useNavigate } from "react-router-dom";
import { FAQsData } from "../../our-approach-page/data";

const CloudPayroll = () => {
  const [collapsedIndices, setCollapsedIndices] = useState([]);
  const navigate = useNavigate();

  const toggleCollapse = (index) => {
    setCollapsedIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="flex flex-col gap-4 max-w-[1300px] mx-auto">
      <div className=" text-white py-4 w-full grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        {/* Left Section - Heading */}
        <div className="mb-4 md:mb-0">
          <Typography variant="h1" className={headingStyles}>
            Here’s some of the benefits to our cloud payroll services.
          </Typography>
          <div className="flex flex-col gap-6 my-6">
            <div className="flex justify-between items-center border border-gray-300 rounded-lg shadow-b-lg py-4 px-6">
              <Fa42Group size={64} className="text-blue-600" />
              <span className="text-[34px] text-black-100">title</span>
            </div>
            <div className="flex justify-between items-center border border-gray-200 rounded-lg shadow-sm py-4 px-6">
              <Fa42Group size={64} className="text-blue-600" />
              <span className="text-[34px] text-black-100">title</span>
            </div>
            <div className="flex justify-between items-center border border-gray-200 rounded-lg shadow-sm py-4 px-6">
              <Fa42Group size={64} className="text-blue-600" />
              <span className="text-[34px] text-black-100">title</span>
            </div>
            <div className="flex justify-between items-center border border-gray-200 rounded-lg shadow-sm py-4 px-6">
              <Fa42Group size={64} className="text-blue-600" />
              <span className="text-[34px] text-black-100">title</span>
            </div>
            <div className="flex justify-between items-center border border-gray-200 rounded-lg shadow-sm py-4 px-6">
              <Fa42Group size={64} className="text-blue-600" />
              <span className="text-[34px] text-black-100">title</span>
            </div>
            <div className="flex justify-between items-center border border-gray-200 rounded-lg shadow-sm py-4 px-6">
              <Fa42Group size={64} className="text-blue-600" />
              <span className="text-[34px] text-black-100">title</span>
            </div>
          </div>
          <Button
            size="md"
            className={`mt-6 ${primaryButton}`}
            onClick={() => navigate("/contact")}
          >
            Still have questions? Contact us!
          </Button>
        </div>
        {/* Divider */}
        <div className="hidden md:block absolute left-1/2 h-full w-px bg-gray-300"></div>
        {/* Right Section - Content */}
        <div className="flex flex-col gap-6">
          {FAQsData.map((item, index) => {
            const isCollapsed = collapsedIndices.includes(index);
            return (
              <div
                key={index}
                className="flex flex-col pb-4 md:ml-4 lg:ml-4 border-b border-gray-300"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <Typography variant="h2" className={subHeadingStyles}>
                    {item.title}
                  </Typography>
                  <FaPlus
                    size={24}
                    className="text-blue-600 cursor-pointer"
                    onClick={() => toggleCollapse(index)}
                  />
                </div>
                <div
                  className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                    isCollapsed ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  {isCollapsed && (
                    <Typography
                      variant="paragraph"
                      className={`max-w-[750px] ${longParaStyles}`}
                    >
                      {item.desc}
                    </Typography>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CloudPayroll;
