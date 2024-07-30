import React from "react";
import ScheduleConsult from "../solutions-page/components/ScheduleConsult";
import Testimonial from "../../components/Testimonials";
import CFOBenefits from "./components/PTSQuestion";
import HeroSection from "./components/HeroSection";
import RulesChanging from "./components/RulesChanging";
import ServicesMap from "./components/ServicesMap";
import CorporateTaxServicesPage from "./components/WhyPTS";
import WhyPTS from "./components/WhyPTS";
import PTSQuestion from "./components/PTSQuestion";

const PersonalReturnsPage = () => {
  return (
    <>
      <section className="mt-[180px] mb-[60px] px-8">
        <div className="max-w-[1300px] mx-auto">
          <HeroSection />
        </div>
      </section>
      <section className="mt-[60px]">
        <RulesChanging />
      </section>
      <section className="mt-[60px]">
        <WhyPTS />
      </section>
      <section className="my-[60px] px-8">
        <div className="max-w-[1300px] mx-auto">
          <PTSQuestion />
        </div>
      </section>
      <section className="my-[60px] px-8">
        <div className="max-w-[1300px] mx-auto">
          <ServicesMap />
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

export default PersonalReturnsPage;
