import React from "react";
import Testimonial from "../../components/Testimonials";
import HeroSection from "./components/HeroSection";
import ServicesMap from "./components/ServicesMap";
import ScheduleConsult from "../solutions-page/components/ScheduleConsult";
import Benefits from "./components/Benefits";
import IncorporateServices from "./components/IncorporateServices";

const Incorporation = () => {
  return (
    <>
      <section className="mt-[180px] mb-[60px] px-8">
        <div className="max-w-[1300px] mx-auto">
          <HeroSection />
        </div>
      </section>
      <section className="mt-[60px]">
        <Benefits />
      </section>
      <section className="my-[60px] px-8">
        <div className="max-w-[1300px] mx-auto">
          <IncorporateServices />
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

export default Incorporation;
