import React from "react";
import { associate } from "../../Utils/mockData";

const AssociateCard = () => {
  return (
    <div className="grid grid-cols-5 mt-10 gap-4 ">
      {associate.map((data) => (
        <div className="bg-[#2C2C2C] w-[304px] rounded-3xl shadow-2xl shadow-[#2c2c2c]">
          <img src={data.img} alt="" />
          <div
            className=" flex items-center justify-between pl-3 pr-2 py-3   "
          >
            <div>
                <h3>{data.title}</h3>
                <p>Location:</p>
            </div>
            <img src={data.bage} alt="" />
            {!data.bage && <div> 
                <small className="text-sm px-1">5.0</small>
                <input type="radio" name="rating-5" className="mask  mask-star-2 bg-orange-400" />
                </div>}

          </div>
        </div>
      ))}
    </div>
  );
};

export default AssociateCard;
