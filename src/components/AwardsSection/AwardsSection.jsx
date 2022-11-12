import React from "react";
import { rating } from "../../Utils/mockData";

const AwardsSection = () => {
  return (
    <section className="blog  bg-primary">
      <div className="mx-8 flex flex-col gap-5 p-16 md:justify-evenly lg:flex-row">
        <div className="mb-8 flex flex-col items-center gap-4 rounded-3xl bg-secondary px-4 py-4  md:gap-10 md:px-10 lg:mb-0 xl:flex-row">
          <img src="https://i.ibb.co/qxyjrHq/Rectangle-208.png" alt="" />
          <img src="https://i.ibb.co/CPvqJLP/Rectangle-209.png" alt="" />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {rating.map((data) => (
            <>
              <div className="flex  flex-col items-center justify-between rounded-2xl  bg-white py-2 px-4 text-black shadow-lg lg:flex-row">
                <img className="h-16" src={data.img} alt="" />
                <p>5/10</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
