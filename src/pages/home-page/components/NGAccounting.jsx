import React from "react";
import newAccounting from "../../../assets/home-img.png";
import { Button } from "@material-tailwind/react";

const NGAccounting = () => {
  return (
    <div className="flex items-center gap-4 w-full flex-col sm:flex-col lg:flex-row md:flex-row">
      <div className="md:w-1/2 lg:w-1/2 w-full sm:w-full flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-[35px] font-bold leading-[1.3] text-black-50">
            Welcome to a <span className="text-blue-600">New Generation</span>{" "}
            of Accounting.
          </h1>
          <p className="text-lg max-w-[600px] w-full text-lightText-50">
            We understand that dealing with your business finances can be
            stressful. That’s why we made it our mission to help thousands of
            small business owners just like you, spend less time on all the
            soul-sapping stuff like bookkeeping, payroll and tax, and focus more
            on what they do best – growing their business.
          </p>
        </div>
        <div className="flex gap-2">
          <Button size="md" className="bg-blue-600 text-sm font-paraFont">
            What We Do
          </Button>
          <Button
            size="md"
            className="bg-white border border-blue-600 text-blue-600 text-sm font-paraFont"
          >
            Who We Are
          </Button>
        </div>
      </div>
      <div className="md:w-1/2 lg:w-1/2 w-full sm:w-full">
        <img
          src={newAccounting}
          alt="new-accounting-image"
          className="w-full rounded-lg min-h-[370px]"
        />
      </div>
    </div>
  );
};

export default NGAccounting;
