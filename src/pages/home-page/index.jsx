import React from "react";
import NGAccounting from "./components/NGAccounting";
import SJSF from "./components/SJSF";
import { BIBDCard } from "./components/BIBD";
import YNOXOS from "./components/YNOXOS";
import PFTD from "./components/PFTD";
import ScheduleConsult from "./components/ScheduleConsult";
import { Testimonial } from "../../components/Testimonials";
import GoodFitCard from "./components/GoodFitCard";

const HomePage = () => {
  return (
    <>
      <section className="mt-[180px] mb-[120px] px-8">
        <div className="max-w-[1300px] mx-auto">
          <NGAccounting />
        </div>
      </section>
      <section className="my-[120px]">
        <GoodFitCard />
      </section>
      <section className="my-[120px] px-8">
        <div className="max-w-[1300px] mx-auto">
          <SJSF />
        </div>
      </section>
      <section className="my-[120px] px-8">
        <div className="max-w-[1300px] mx-auto">
          <BIBDCard />
        </div>
      </section>
      <section className="my-[120px] px-8">
        <div className="max-w-[1300px] mx-auto">
          <YNOXOS />
        </div>
      </section>
      <section className="my-[120px] px-8">
        <div className="max-w-[1300px] mx-auto">
          <PFTD />
        </div>
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

export default HomePage;
