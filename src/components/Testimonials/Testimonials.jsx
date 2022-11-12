import React from "react";
import { testimonials } from "../../Utils/mockData";

const Testimonials = () => {
  return (
    <div className="mx-8 flex flex-col items-center justify-between xl:flex-row">
      <img
        className="flex-1 "
        src="https://i.ibb.co/kG9SnsN/Screenshot-from-2022-11-12-14-51-40.png"
        alt=""
      />

      <div className="flex-1">
        <div className="mb-6 flex flex-col items-center justify-between md:flex-row">
          <div>
            <h3
              className="font-serif text-2xl
           font-bold text-secondary md:text-3xl lg:text-4xl"
            >
              Testimonials
            </h3>
            <p className="text-gray-600 md:text-lg">Words from our clients</p>
          </div>
          <div className="mt-4 mb-6 flex flex-col items-center justify-center gap-2 text-black md:mt-0 md:mb-0 md:flex-row">
            <div className="space-x-2">
              <button className="rounded-full border bg-secondary py-1 px-3 text-white">
                Google
              </button>
              <button className="rounded-full border border-gray-700 py-1 px-2">
                Facebook
              </button>
            </div>
            <div className="space-x-2">
              <button className="rounded-full border border-gray-700 py-1 px-2">
                Weddingwire
              </button>
              <button className="rounded-full border   border-gray-700 py-1 px-2">
                WedmeGood
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8  md:grid-cols-4 ">
          {testimonials.map((d) => (
            <>
              <div className="relative rounded-3xl bg-secondary p-5 text-left text-white ">
                <div className="avatar absolute -top-4 -right-4">
                  <div className="w-24 rounded-full">
                    <img src={d.avatar} alt="" />
                  </div>
                </div>
                <p className="pt-20">{d.description}</p>
                <h3 className="py-2 text-center text-lg font-semibold">
                  {d.name}
                </h3>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
