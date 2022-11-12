import { motion } from "framer-motion";
import React from "react";
import { associate } from "../../Utils/mockData";
const AssociateCard = () => {
  return (
    <div
      className="mt-10 grid gap-10 md:grid-cols-2
     md:gap-4 xl:grid-cols-5 "
    >
      {associate.map((data, index) => (
        <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 * index, duration: 0.8 * index }}
        
        key={index} className="flex flex-col items-center justify-center">
          <div className="rounded-3xl bg-[#2C2C2C] shadow-2xl shadow-[#2c2c2c] md:w-[300px]">
            <img src={data.img} alt="" />
            <div className=" flex items-center justify-between py-3 pl-3 pr-2   ">
              <div>
                <h3>{data.title}</h3>
                <p>Location:</p>
              </div>
              <img src={data.bage} alt="" />
              {!data.bage && (
                <div>
                  <small className="px-1 text-sm">5.0</small>
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask  mask-star-2 bg-orange-400"
                  />
                </div>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default AssociateCard;
