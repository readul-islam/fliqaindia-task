import React from "react";
import { success } from "../../Utils/mockData";

const Success = () => {
  return (
    <section className="Success my-24 bg-primary">
      <div className="mx-1 py-4 md:mx-8 ">
        <div className=" text-center">
          <h2
            className="font-serif text-2xl
           font-bold text-secondary md:text-3xl lg:text-4xl  "
          >
            Our success
          </h2>
          <small className="text-gray-600  md:text-lg  ">
            Journey of our success
          </small>
        </div>
        <div className="my-8 grid w-full grid-cols-1 gap-10 md:grid-cols-2 md:gap-8 lg:grid-cols-5 lg:place-items-center ">
          {success.map((d, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-y-3"
            >
              <div className="flex h-32  w-32 flex-col items-center justify-center rounded-full bg-white shadow-2xl xl:h-52 xl:w-52 ">
                <img className="w-fit" src={d.img} alt="" />
              </div>
              <p className="text-center text-sm text-black xl:px-10">
                Back in 2019, FliqaIndia recognize as a startup with DPIT in
                Startup India.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Success;
