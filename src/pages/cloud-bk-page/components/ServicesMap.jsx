import React from "react";
import { ImageCard } from "../../../components/ImageCard";
import { servicesData } from "../data";
import { Typography } from "@material-tailwind/react";
import { headingStyles } from "../../../utilities/cssHelper";

const ServicesMap = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <Typography variant="h1" className={`mb-10 ${headingStyles}`}>
        Check out our other solutions
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full justify-items-center">
        {servicesData.map((item, index) => {
          return (
            <div
              key={index}
              className="flex justify-center items-center w-full"
            >
              <ImageCard item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesMap;
