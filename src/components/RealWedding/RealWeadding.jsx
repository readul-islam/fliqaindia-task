import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import WeddingCard from "../WeddingCard/WeddingCard";
const RealWedding = () => {
  return (
    <>
    <section className="RealWedding bg-primary w-full">
      <div className="md:mx-8 py-4 ">
        <div className=" md:text-left text-center">
          <h2
            className="text-2xl md:text-3xl
           lg:text-4xl text-secondary font-bold font-serif  "
          >
           Real Wedding
          </h2>
          <small className="text-gray-600 md:text-lg  ">
          List your wedding and browse portfolio

          </small>
        </div>
        <div className="">
        <WeddingCard/>
        </div>
      </div>
    </section>

   <button className="text-black flex items-center text-lg gap-4 mt-10 mx-auto bg-primary py-2 px-4 shadow-xl text-center">View more Wedding <AiOutlineArrowRight/></button>

    <div class=" h-[2px] w-[80vw] mx-auto bg-gray-400 my-10"></div>
    </>
  );
};

export default RealWedding;
