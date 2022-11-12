import React from "react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AssociateCard from "../AssociateCard/AssociateCard";

const Associate = () => {
  return (
    <section className=" Associate my-24   bg-primary">
      <div className="mx-8 py-8">
        <div className=" flex flex-col items-center justify-between gap-2 text-center md:flex-row md:text-left">
          <div>
            <h2
              className="font-serif text-2xl
           font-bold text-secondary md:text-3xl lg:text-4xl  "
            >
              Find Trusted Associate
            </h2>
            <small className="text-gray-600 md:text-lg  ">
              Find the best Fliqa Associate for your special day.
            </small>
          </div>
          <p className="text-secondary">{"See more >>"}</p>
        </div>

        <div className="card py-4">
          <AssociateCard />
        </div>
      </div>
    </section>
  );
};

export default Associate;
