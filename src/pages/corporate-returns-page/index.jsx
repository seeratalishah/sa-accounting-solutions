import React from "react";
import ScheduleConsult from "../solutions-page/components/ScheduleConsult";
import Testimonial from "../../components/Testimonials";
import CloudPayroll from "./components/CorporateTaxAccount";
import HeroSection from "./components/HeroSection";
import TaxLaws from "./components/TaxLaws";
import ServicesMap from "./components/ServicesMap";
import CorporateTaxServicesPage from "./components/CorporateTaxServices";

const CorporateReturnsPage = () => {
  return (
    <>
      <section className="mt-[180px] mb-[60px] px-8">
        <div className="max-w-[1300px] mx-auto">
          <HeroSection />
        </div>
      </section>
      <section className="mt-[60px]">
        <TaxLaws />
      </section>
      <section className="mt-[60px]">
        <CorporateTaxServicesPage />
      </section>
      <section className="my-[60px] px-8">
        <div className="max-w-[1300px] mx-auto">
          <CloudPayroll />
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

export default CorporateReturnsPage;
