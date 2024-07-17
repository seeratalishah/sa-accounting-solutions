import React from "react";
import { GoodFitCard } from "./components/GoodFitCard";
import NGAccounting from "./components/NGAccounting";
import SJSF from "./components/SJSF";
import { BIBDCard } from "./components/BIBD";
import YNOXOS from "./components/YNOXOS";
import PFTD from "./components/PFTD";
import ScheduleConsult from "./components/ScheduleConsult";
import { Testimonial } from "../../components/Testimonials";

const HomePage = () => {
  return (
    <div className="">
      <div className="px-8 pt-[180px] pb-[60px] w-full">
        <NGAccounting />
      </div>
      <div className="px-8 py-[60px] w-full">
        <GoodFitCard />
      </div>
      <div className="px-8 py-[60px] w-full">
        <SJSF />
      </div>
      <div className="px-8 py-[60px] w-full">
        <BIBDCard />
      </div>
      <div className="px-8 py-[60px] w-full">
        <YNOXOS />
      </div>
      <div className="px-8 py-[60px] w-full">
        <PFTD />
      </div>
      <div className="px-8 py-[60px] w-full">
        <ScheduleConsult />
      </div>
      <div className="px-8 py-[60px] w-full">
        <Testimonial />
      </div>
    </div>
  );
};

export default HomePage;
