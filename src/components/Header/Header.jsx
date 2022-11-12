import React from "react";
import Banner from "../../Assets/Banner.png";
import HeaderCard from "../HeaderCard";

const Header = () => {
  return (
    <section className="header-section ">
      <img className="w-full bg-cover " src={Banner} alt="" />
      <div className="flex flex-col items-center justify-center gap-1 py-2">
        <h3 className="font-serif text-xl leading-none   text-black md:text-5xl lg:text-[64px]">
          India's Leading creative Platform
        </h3>
        <p className="text-center  font-serif  text-sm  text-gray-500 md:text-xl lg:text-2xl  ">
          Experience hassle free bookings trusted by 2500+ Customers
        </p>
        <div className=" relative mt-2">
          <input
            placeholder="Search service, blog and many more.."
            className="w-72 rounded-full border border-gray-400  py-1 text-black md:w-[600px] md:py-1.5 lg:w-[700px]"
            type="text"
          />
          <button className="absolute top-0 right-0 rounded-full bg-black py-[5px] px-6 text-white md:py-[7px] md:px-12">
            Search
          </button>
        </div>
      </div>

      <div className="card-section ">
        <HeaderCard />
      </div>
      <div className=" mx-auto my-10 h-[2px] w-[80vw] bg-gray-400"></div>
    </section>
  );
};

export default Header;
