import React from "react";
import HeroSection from "./components/HeroSection";
import Testimonial from "../../components/Testimonials";
import ScheduleConsult from "./components/ScheduleConsult";
import WhySwitchSA from "./components/WhySwitchSA";
import CBSection from "./components/CBSection";
import CFOSection from "./components/CFOSection";
import PRSection from "./components/PRSection";

const SolutionsPage = () => {
  return (
    <>
      <section className="mt-[180px] mb-[60px] px-8">
        <div className="max-w-[1300px] mx-auto">
          <HeroSection />
        </div>
      </section>
      <section className="mt-[60px]">
        <WhySwitchSA />
      </section>
      <section className="my-[60px] px-8">
        <CBSection />
      </section>
      <section className="my-[60px] px-8">
        <CFOSection />
      </section>
      <section className="my-[60px] px-8">
        <PRSection />
      </section>
      <section className="my-[60px]">
        <ScheduleConsult />
      </section>
      <section className="my-[60px] px-8">
        <div className="max-w-[1300px] mx-auto">
          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default SolutionsPage;
