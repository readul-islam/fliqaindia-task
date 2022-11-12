import React from "react";

const PhotoGraphyBanner = () => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url("https://i.ibb.co/Rcw1KBH/Rectangle-217.png")`,
      }}
    >
      <div className="flex h-[459px] flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center lg:flex-row lg:space-x-2 xl:space-x-10 ">
          <div className="pb-4 text-3xl text-white md:text-4xl md:leading-10 xl:text-6xl xl:leading-tight">
            <p className="font-thin ">
              ULTIMATE <p>COURSE IN </p>{" "}
            </p>
            <h1 className="font-bold ">PHOTOGRAPHY</h1>
          </div>
          <img
            className="w-fit px-4"
            src="https://i.ibb.co/QjWZ0k5/image-183.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoGraphyBanner;
