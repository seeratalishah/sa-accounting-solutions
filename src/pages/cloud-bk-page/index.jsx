import React from "react";
import ScheduleConsult from "../solutions-page/components/ScheduleConsult";
import Testimonial from "../../components/Testimonials";
import CloudTechnology from "./components/CloudTechnology";
import HeroSection from "./components/HeroSection";
import BusinessHealth from "./components/BusinessHealth";
import ServicesMap from "./components/ServicesMap";

const CloudBKPage = () => {
  return (
    <>
      <section className="mt-[180px] mb-[60px] px-8">
        <div className="max-w-[1300px] mx-auto">
          <HeroSection />
        </div>
      </section>
      <section className="mt-[60px]">
        <BusinessHealth />
      </section>
      <section className="my-[60px] px-8">
        <div className="max-w-[1300px] mx-auto">
          <CloudTechnology />
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

export default CloudBKPage;
