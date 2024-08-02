import React from "react";

const SericesList = ({ data }) => {
  return (
    <div className="flex flex-col gap-6 my-6">
      {data.map((item, index) => {
        return (
          <div className="flex justify-between items-center gap-4 border border-gray-300 rounded-lg shadow-b-lg py-4 px-6">
            <img src={item.icon} alt="icon" />
            <span className="text-[18px] md:text-[24px] text-right font-bold text-black-100">{item.title}</span>
          </div>
        );
      })}
    </div>
  );
};

export default SericesList;
