import React from "react";
import AccountingDoneDeff from "./components/AccountingDoneDiff";
import WWOCard from "./components/WWOCard";
import Services from "./components/Services";
import OurEthos from "./components/OurEthos";
import EOS from "./components/EOS";
import { Testimonial } from "../../components/Testimonials";

const AboutPage = () => {
  return (
    <>
      <section className="mt-[180px] mb-[120px] px-8">
        <div className="max-w-[1300px] mx-auto">
          <AccountingDoneDeff />
        </div>
      </section>
      <section className="mt-[120px]">
        <WWOCard />
      </section>
      <section className="mb-[120px]">
        <Services />
      </section>
      <section className="my-[120px] px-8">
        <div className="max-w-[1300px] mx-auto">
          <OurEthos />
        </div>
      </section>
      <section className="my-[120px]">
          <EOS />
      </section>
      <section className="my-[120px] px-8">
        <div className="max-w-[1300px] mx-auto">
          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default AboutPage;
