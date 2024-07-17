import { Button } from "@material-tailwind/react";
import React from "react";

const WWOCard = () => {
  return (
    <div className="bg-black-50 text-white p-10 rounded-lg shadow-lg w-full flex flex-col md:flex-row">
      {/* Left Section - Heading */}
      <div className="flex-none md:flex-1 md:text-left mb-4 md:mb-0">
        <h1 className="text-[35px] font-bold leading-[1.3] text-center md:text-left lg:text-left">
          Ledgerly is bringing accounting into the modern age and beyond.
        </h1>
      </div>
      {/* Divider */}
      <div className="hidden md:block w-px bg-gray-700 mx-6"></div>
      {/* Right Section - Content */}
      <div className="flex-1">
        <p className="text-md sm:text-md md:text-lg lg:text-lg mb-6 font-paraFont text-center md:text-left lg:text-left">
          If you’re a small business owner, then you probably already know that
          speaking with your accountant once a year to discuss your financials
          and scramble to process your tax return is a thing of the past!
        </p>
        <p className="text-md sm:text-md md:text-lg lg:text-lg mb-6 font-paraFont text-center md:text-left lg:text-left">
          These days, with the advent of automation, slick new accounting
          software and real-time financial reporting, it means that clever,
          creatively minded accountants (like us) are now uniquely equipped to
          offer businesses value add strategic advice.
        </p>
        <p className="text-md sm:text-md md:text-lg lg:text-lg mb-6 font-paraFont text-center md:text-left lg:text-left">
          And with the accounting industry so ripe for disruption, we are
          stepping in…by embracing automation, enhanced business processes, and
          cutting-edge cloud technology, we are giving the accounting industry
          the kick in the pants it so sorely needed.
        </p>
        <div className="flex justify-center md:justify-start">
          <a href="#" className="inline-block">
            <Button size="md" className="bg-blue-600 text-sm font-paraFont">
              See What We Offer
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WWOCard;
