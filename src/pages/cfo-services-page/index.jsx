import React from "react";
import ScheduleConsult from "../solutions-page/components/ScheduleConsult";
import Testimonial from "../../components/Testimonials";
import HeroSection from "./components/HeroSection";
import VirtualCFO from "./components/VirtualCFO";
import ServicesMap from "./components/ServicesMap";
import TimeBack from "./components/TimeBack";
import PTSQuestion from "./components/CFOBenefits";

const CFOServicesPage = () => {
  return (
    <>
      <section className="mt-[180px] mb-[60px] px-8">
        <div className="max-w-[1300px] mx-auto">
          <HeroSection />
        </div>
      </section>
      <section className="mt-[60px]">
        <VirtualCFO />
      </section>
      <section className="mt-[60px]">
        <TimeBack />
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

export default CFOServicesPage;
