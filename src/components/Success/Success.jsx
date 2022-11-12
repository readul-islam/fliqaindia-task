import React from "react";
import { success } from "../../Utils/mockData";

const Success = () => {
  return (
    <section className="blog bg-primary">
      <div className="md:mx-8 mx-1 py-4 ">
        <div className=" text-center">
          <h2
            className="text-2xl md:text-3xl
           lg:text-4xl text-secondary font-bold font-serif  "
          >
            Our success
          </h2>
          <small className="text-gray-600  md:text-lg  ">
            Journey of our success
          </small>
        </div>
        <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 w-full my-8 gap-10 md:gap-8 lg:place-items-center ">
          {success.map((d) => (
            <div className="flex flex-col justify-center items-center gap-y-3">
              <div className="bg-white shadow-2xl  w-32 h-32 xl:w-52 xl:h-52 flex flex-col justify-center items-center rounded-full ">
                <img className="w-fit" src={d.img} alt="" />
              </div>
              <p className="text-black text-center text-sm xl:px-10">
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
