import React, { useState } from "react";
import {
  headingStyles,
  longParaStyles,
  primaryButton,
  subHeadingStyles,
} from "../../../utilities/cssHelper";
import { Button, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { FAQsData } from "../data";

const FAQs = () => {
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
          <Typography
            variant="h1"
            className={`text-center md:text-left ${headingStyles}`}
          >
            Accounting, Assurance & Advisory
          </Typography>
          <div className="flex flex-col gap-6 my-6">
            <Typography
              variant="paragraph"
              className={`max-w-[750px] md:pr-[30px] lg:pr-[30px] text-center md:text-left ${longParaStyles}`}
            >
              Our accounting, assurance, and advisory professionals will help
              you prepare and understand your financial reports, unveiling the
              story they tell. Through insight and strategic thinking, our
              expert team will find tailored solutions to help you better
              understand and more effectively manage your business.
            </Typography>
            <Typography
              variant="paragraph"
              className={`max-w-[750px] md:pr-[30px] lg:pr-[30px] text-center md:text-left ${longParaStyles}`}
            >
              As a business owner, you are great at managing your product or
              service and taking it to market. But businesses are complex and so
              is the regulatory and compliance environment that you operate in
              every day. You can’t know everything, and you don’t have the time
              to deal with it all. It is important that you have a trusted
              advisor on your side to get you through it. That is where we come
              in.
            </Typography>
            <Typography
              variant="paragraph"
              className={`max-w-[750px] md:pr-[30px] lg:pr-[30px] text-center md:text-left ${longParaStyles}`}
            >
              As CPAs, we know financial statements and tax but we also
              understand business and the operating environment for both private
              enterprise and not-for-profit organizations. We can help you
              navigate the business world and make your goals a reality.
            </Typography>
          </div>
          <Button
            size="md"
            className={`mt-16 hidden md:block ${primaryButton}`}
            onClick={() => navigate("/contact")}
          >
            <span className="text-[16px]">
              Still have questions? Contact us!
            </span>
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
                    className="text-blue-600 cursor-pointer flex-none"
                    onClick={() => toggleCollapse(index)}
                    style={{ minWidth: "24px", minHeight: "24px" }} // Added explicit width and height
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
        <Button
          size="md"
          className={`mt-6 block md:hidden ${primaryButton}`}
          onClick={() => navigate("/contact")}
        >
          <span className="text-[16px]">Still have questions? Contact us!</span>
        </Button>
      </div>
    </div>
  );
};

export default FAQs;
