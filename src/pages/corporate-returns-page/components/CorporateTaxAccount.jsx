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
            Why you need a Corporate Tax Accountant.
          </Typography>
          <div className="flex flex-col gap-6 my-6">
            <Typography
              variant="paragraph"
              className={`max-w-[750px] md:pr-[30px] lg:pr-[30px] ${longParaStyles}`}
            >
              A small business can greatly benefit from the expertise of a
              corporate tax accountant for several crucial reasons.
            </Typography>
            <Typography
              variant="paragraph"
              className={`max-w-[750px] md:pr-[30px] lg:pr-[30px] ${longParaStyles}`}
            >
              Firstly, tax regulations are complex and constantly changing,
              making it challenging for business owners to stay compliant and
              optimize their tax strategies. A skilled corporate tax accountant
              can navigate this intricate landscape, ensuring that the business
              takes advantage of available deductions, credits, and exemptions
              to minimize tax liabilities legally.
            </Typography>
            <Typography
              variant="paragraph"
              className={`max-w-[750px] md:pr-[30px] lg:pr-[30px] ${longParaStyles}`}
            >
              Secondly, having a tax expert on board can help prevent costly
              mistakes or audits by accurately preparing tax returns and
              maintaining meticulous financial records. Additionally, they can
              provide valuable advice on structuring the business to minimize
              taxes, plan for future growth, and offer insights into financial
              strategies that can enhance profitability.
            </Typography>
            <Typography
              variant="paragraph"
              className={`max-w-[750px] md:pr-[30px] lg:pr-[30px] ${longParaStyles}`}
            >
              In essence, a corporate tax accountant is an indispensable partner
              for small businesses, ensuring financial efficiency, compliance,
              and peace of mind.
            </Typography>
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
