import React from "react";
import Testimonial from "../../components/Testimonials";
import HeroSection from "./components/HeroSection";
import ScheduleConsult from "./components/ScheduleConsult";
import WhatToExpect from "./components/WhatToExpect";
import FAQs from "./components/FAQs";

const OurApproachPage = () => {
  return (
    <>
      <section className="mt-[180px] mb-[120px] px-8">
        <div className="max-w-[1300px] mx-auto">
          <HeroSection />
        </div>
      </section>
      <section className="mt-[120px]">
          <WhatToExpect />
      </section>
      <section className="mb-[120px] px-8">
        <FAQs />
      </section>
      <section className="my-[120px]">
          <ScheduleConsult />
      </section>
      <section className="my-[120px] px-8">
        <div className="max-w-[1300px] mx-auto">
          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default OurApproachPage;
