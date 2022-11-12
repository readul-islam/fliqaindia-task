import React from "react";
import { headerCard } from "../../Utils/mockData";

const HeaderCard = () => {
  return (
    <div className="my-10 grid w-full grid-cols-1 gap-10 px-8 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:place-items-center">
      {headerCard.map((data, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-3 md:flex-row"
        >
          <img src={data.img} alt="" />
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-black">{data.title}</h3>
            <p className="text-gray-500 ">{data.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeaderCard;
