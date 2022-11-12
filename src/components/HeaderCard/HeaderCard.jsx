import { motion } from "framer-motion";
import React from "react";
import { headerCard } from "../../Utils/mockData";
const HeaderCard = () => {
  return (
    <div className="my-10 grid w-full grid-cols-1 gap-10 px-8 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:place-items-center">
      {headerCard.map((data, index) => (
        <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 * index, duration: 0.8 * index }}
          key={index}
          className="flex flex-col items-center gap-3 md:flex-row"
        >
          <img src={data.img} alt="" />
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-black">{data.title}</h3>
            <p className="text-gray-500 ">{data.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default HeaderCard;
