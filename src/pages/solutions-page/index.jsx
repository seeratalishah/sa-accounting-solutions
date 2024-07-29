import React from "react";
import HeroSection from "./components/HeroSection";
import Testimonial from "../../components/Testimonials";
import ScheduleConsult from "./components/ScheduleConsult";
import WhySwitchSA from "./components/WhySwitchSA";
import CBSection from "./components/CBSection";
import CFOSection from "./components/CFOSection";
import PRSection from "./components/PRSection";
import CRSection from "./components/CRSection";
import PSSection from "./components/PSSection";
import EasyEngagement from "./components/EasyEngagement";
import SABenefits from "./components/SABenefits";

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
        <div className="max-w-[1300px] mx-auto">
          <CBSection />
        </div>
      </section>
      <section className="my-[60px] px-8">
        <div className="max-w-[1300px] mx-auto">
          <CRSection />
        </div>
      </section>
      <section className="my-[60px] px-8">
        <div className="max-w-[1300px] mx-auto">
          <PSSection />
        </div>
      </section>
      <section className="my-[60px] px-8">
        <div className="max-w-[1300px] mx-auto">
          <CFOSection />
        </div>
      </section>
      <section className="my-[60px] px-8">
        <div className="max-w-[1300px] mx-auto">
          <PRSection />
        </div>
      </section>
      <section className="my-[60px] px-8">
        <div className="max-w-[1300px] mx-auto">
          <EasyEngagement />
        </div>
      </section>
      <section className="my-[60px] px-8">
        <div className="max-w-[1300px] mx-auto">
          <SABenefits />
        </div>
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
