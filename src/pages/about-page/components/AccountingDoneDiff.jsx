import React from "react";
import accountingDiffWay from "../../../assets/about-img.png";
import { Button } from "@material-tailwind/react";

const AccountingDoneDeff = () => {
  return (
    <div className="flex items-center gap-4 w-full flex-col lg:flex-row md:flex-row">
      <div className="order-2 md:order-1 lg:order-1 md:w-1/2 lg:w-1/2 w-full sm:w-full flex flex-col gap-8 justify-center items-center lg:items-start lg:text-left text-center">
        <div className="flex flex-col gap-4 items-center lg:items-start text-center lg:text-left md:text-left">
          <h1 className="text-[35px] font-bold leading-[1.3] text-black-50">
            Accounting. <span className="text-blue-600">Done Differently.</span>
          </h1>
          <p className="text-lg max-w-[600px] w-full text-lightText-50">
            We’re the new breed of numbers driven, tech-savvy accountants that
            see accounting solutions as an opportunity to transform accounting
            into an engine for growth and a source of competitive advantage. We
            understand that dealing with your business finances can be
            stressful. That’s why we made it our mission to help thousands of
            small business owners just like you, spend less time on all the
            soul-sapping stuff like bookkeeping, payroll and tax, and focus more
            on what they do best – growing their business.
          </p>
        </div>
        <div className="flex w-full justify-center sm:justify-center md:justify-start lg:justify-start">
          <Button size="md" className="bg-blue-600 text-sm font-paraFont">
            Our Approach
          </Button>
        </div>
      </div>
      <div className="order-1 md:order-2 lg:order-2 md:w-1/2 lg:w-1/2 w-full sm:w-full flex justify-center items-center">
        <img
          src={accountingDiffWay}
          alt="new-accounting-image"
          className="w-full rounded-lg min-h-[370px]"
        />
      </div>
    </div>
  );
};

export default AccountingDoneDeff;
