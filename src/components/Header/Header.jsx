import React from "react";
import Banner from "../../Assets/Banner.png";
import HeaderCard from "../HeaderCard";

const Header = () => {
  return (
    <section className="header-section ">
      <img className="bg-cover w-full " src={Banner} alt="" />
      <div className="flex flex-col justify-center items-center py-2 gap-1">
        <h3 className="lg:text-[64px] md:text-5xl text-xl   text-black leading-none font-serif">
          India's Leading creative Platform
        </h3>
        <p className="text-gray-500  lg:text-2xl  md:text-xl  text-sm text-center font-serif  ">
          Experience hassle free bookings trusted by 2500+ Customers
        </p>
        <div className=" relative mt-2">
          <input
            placeholder="Search service, blog and many more.."
            className="border border-gray-400 md:py-1.5 py-1  rounded-full lg:w-[700px] md:w-[600px] w-72 text-black"
            type="text"
          />
          <button className="bg-black text-white md:py-[7px] py-[5px] top-0 right-0 absolute md:px-12 px-6 rounded-full">
            Search
          </button>
        </div>
      </div>

      <div className="card-section ">
        <HeaderCard />
      </div>
      <div class=" h-[2px] w-[80vw] mx-auto bg-gray-400 my-10"></div>
    </section>
  );
};

export default Header;
