import React from "react";
import { treading } from "../../Utils/mockData";

const TreadingCard = () => {
  return (
    <>
      <div>
        {treading.map((data, index) => (
          <div
            key={index}
            className="mb-4 flex flex-col items-center justify-center text-center text-black md:mb-0 md:flex-row md:gap-2   md:text-left"
          >
            <img className="w-full md:w-fit" src={data.img} alt="" />
            <div>
              <h4 className="font-semibold">{data.title}</h4>
              <p className="md:text-md text-sm">{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TreadingCard;
