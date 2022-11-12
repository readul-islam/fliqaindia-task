import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import WeddingCard from "../WeddingCard/WeddingCard";
const RealWedding = () => {
  return (
    <section className="RealWedding my-24">
      <div className=" w-full bg-primary">
        <div className="py-4 md:mx-8 ">
          <div className=" text-center md:text-left">
            <h2
              className="font-serif text-2xl
           font-bold text-secondary md:text-3xl lg:text-4xl  "
            >
              Real Wedding
            </h2>
            <small className="text-gray-600 md:text-lg  ">
              List your wedding and browse portfolio
            </small>
          </div>
          <div className="">
            <WeddingCard />
          </div>
        </div>
      </div>

      <button className="mx-auto mt-10 flex items-center gap-4 bg-primary py-2 px-4 text-center text-lg text-black shadow-xl">
        View more Wedding <AiOutlineArrowRight />
      </button>

      <div className=" mx-auto my-10 h-[2px] w-[80vw] bg-gray-400"></div>
    </section>
  );
};

export default RealWedding;
