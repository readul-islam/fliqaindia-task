import React from "react";
import TreadingCard from "../TreadingCard/TreadingCard";

const Blog = () => {
  return (
    <section className="blog bg-primary">
      <div className="mx-8 py-4 ">
        <div className=" md:text-left text-center">
          <h2
            className="text-2xl md:text-3xl
           lg:text-4xl text-secondary font-bold font-serif  "
          >
            Our Blogs
          </h2>
          <small className="text-gray-600 md:text-lg  ">
            Check Out our Latest Blog
          </small>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-8">
          <div className="relative rounded-3xl ">
            <img
              className="w-full h-full"
              src="https://i.ibb.co/p18QLN3/Fliqa-India-wedding.png"
              alt=""
            />
            <div className="absolute  p-3 md:p-8 text-white top-0 z-10 left-0 rounded-l-2xl bg-black/50 w-2/3 h-[95%]">
              <p className="font-semibold text-lg md:text-2xl">
                Featured on: Sep 15, 2021
              </p>
              <h1 className="xl:text-4xl  md:text-2xl text-sm  font-light pt-1 md:pt-4  ">
                Wedding Photography at Goa
              </h1>
            </div>
          </div>

          <div className="relative rounded-3xl ">
            <img
              className="w-full h-full"
              src="https://i.ibb.co/YB2pXmw/Wedding-Trailer.png"
              alt=""
            />
            <div className="absolute p-3 md:p-8 text-white top-0 z-10 rounded-l-2xl left-0 bg-black/60 w-2/3 h-[95%]">
              <p className="font-semibold text-lg md:text-2xl">
                Featured on: Sep 15, 2021
              </p>
              <h1 className="xl:text-4xl  md:text-2xl text-sm font-light pt-1 md:pt-4  ">
                Photography Expectations VS. Reality
              </h1>
            </div>
          </div>
          <div>
            <div className="text-black flex justify-between items-center mb-4">
                <h1 className="text-xl font-medium">Trending Now</h1>
                <p>View All</p>
            </div>
            <TreadingCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
