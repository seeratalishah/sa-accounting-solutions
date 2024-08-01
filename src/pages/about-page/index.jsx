import React from "react";
import { Testimonial } from "../../components/Testimonials";
import AccountingDoneDeff from "./components/AccountingDoneDiff";
import WWOCard from "./components/WWOCard";
import Services from "./components/Services";
import OurEthos from "./components/OurEthos";
import EOS from "./components/EOS";

const AboutPage = () => {
  return (
    <>
      <section className="mt-[180px] mb-[60px] px-8">
        <div className="max-w-[1300px] mx-auto">
          <AccountingDoneDeff />
        </div>
      </section>
      <section className="mt-[60px]">
        <WWOCard />
      </section>
      <section className="mb-[60px]">
        <Services />
      </section>
      <section className="my-[60px] px-8">
        <div className="max-w-[1300px] mx-auto">
          <OurEthos />
        </div>
      </section>
      <section className="my-[60px]">
        <EOS />
      </section>
      <section className="my-[60px] px-8">
        <div className="max-w-[1300px] mx-auto">
          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default AboutPage;
