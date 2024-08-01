import React from "react";
import { BIBDCard } from "./components/BIBD";
import { Testimonial } from "../../components/Testimonials";
import GoodFitCard from "./components/GoodFitCard";
import NGAccounting from "./components/NGAccounting";
import SJSF from "./components/SJSF";
import YNOXOS from "./components/YNOXOS";
import PFTD from "./components/PFTD";
import ScheduleConsult from "./components/ScheduleConsult";

const HomePage = () => {
  return (
    <>
      <section className="mt-[180px] mb-[60px] px-8">
        <div className="max-w-[1300px] mx-auto">
          <NGAccounting />
        </div>
      </section>
      <section className="my-[60px]">
        <GoodFitCard />
      </section>
      <section className="my-[60px] px-8">
        <div className="max-w-[1300px] mx-auto">
          <SJSF />
        </div>
      </section>
      <section className="my-[60px] px-8">
        <div className="max-w-[1300px] mx-auto">
          <BIBDCard />
        </div>
      </section>
      <section className="my-[60px] px-8">
        <div className="max-w-[1300px] mx-auto">
          <YNOXOS />
        </div>
      </section>
      <section className="my-[60px] px-8">
        <div className="max-w-[1300px] mx-auto">
          <PFTD />
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

export default HomePage;
