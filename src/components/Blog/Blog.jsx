import React from "react";
import TreadingCard from "../TreadingCard/TreadingCard";

const Blog = () => {
  return (
    <section className="blog bg-primary">
      <div className="mx-8 py-4 ">
        <div className=" text-center md:text-left">
          <h2
            className="font-serif text-2xl
           font-bold text-secondary md:text-3xl lg:text-4xl  "
          >
            Our Blogs
          </h2>
          <small className="text-gray-600 md:text-lg  ">
            Check Out our Latest Blog
          </small>
        </div>
        <div className="grid grid-cols-1 gap-4 py-8 lg:grid-cols-3">
          <div className="relative rounded-3xl ">
            <img
              className="h-full w-full"
              src="https://i.ibb.co/p18QLN3/Fliqa-India-wedding.png"
              alt=""
            />
            <div className="absolute  top-0 left-0 z-10 h-[95%] w-2/3 rounded-l-2xl bg-black/50 p-3 text-white md:p-8">
              <p className="text-lg font-semibold md:text-2xl">
                Featured on: Sep 15, 2021
              </p>
              <h1 className="pt-1  text-sm font-light  md:pt-4 md:text-2xl xl:text-4xl  ">
                Wedding Photography at Goa
              </h1>
            </div>
          </div>

          <div className="relative rounded-3xl ">
            <img
              className="h-full w-full"
              src="https://i.ibb.co/YB2pXmw/Wedding-Trailer.png"
              alt=""
            />
            <div className="absolute top-0 left-0 z-10 h-[95%] w-2/3 rounded-l-2xl bg-black/60 p-3 text-white md:p-8">
              <p className="text-lg font-semibold md:text-2xl">
                Featured on: Sep 15, 2021
              </p>
              <h1 className="pt-1  text-sm font-light md:pt-4 md:text-2xl xl:text-4xl  ">
                Photography Expectations VS. Reality
              </h1>
            </div>
          </div>
          <div>
            <div className="mb-4 flex items-center justify-between text-black">
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
