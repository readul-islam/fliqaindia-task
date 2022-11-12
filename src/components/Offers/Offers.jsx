import { motion } from "framer-motion";
import React from "react";
import { offers } from "../../Utils/mockData";
const Offers = () => {
  return (
    <section className="blog">
      <div className=" ">
        <div className=" text-center">
          <h2
            className="font-serif text-2xl
           font-bold text-secondary md:text-3xl lg:text-4xl  "
          >
            Best Offers
          </h2>
          <small className="text-gray-600 md:text-lg  ">
            Discover the best offers on our services
          </small>
        </div>
        <div className="my-4 grid  grid-cols-1  gap-8 bg-gradient-to-br from-primary/30 via-primary to-primary/30 py-8  bg-blend-multiply md:grid-cols-2 md:gap-4 lg:grid-cols-4">
          {offers.map((d, index) => (
            <motion.div
              initial={{ x: 70, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 * index, duration: 0.8 * index }}
              key={index}
              className="flex flex-col items-center  justify-center"
            >
              <div className="card  bg-base-100 shadow-xl">
                <figure>
                  <img src={d.img} alt="Shoes" />
                </figure>
                <div className="  absolute h-full w-full rounded-2xl bg-black/50 p-4 text-center text-white ">
                  <h1 className="font-sans text-2xl">{d.title}</h1>

                  <div className="pt-24">
                    <p className="text-left font-sans text-lg text-white">
                      Discount
                    </p>
                    <img src={d.discount} alt="" />
                  </div>
                </div>
                <button className="z-50 rounded-b-md rounded-br-md  bg-white py-3 text-black shadow-2xl">
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
