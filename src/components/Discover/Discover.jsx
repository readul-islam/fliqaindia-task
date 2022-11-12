import React from "react";

const Discover = () => {
  return (
    <section className=" discover my-24">
      <div
        className="  bg-cover "
        style={{
          backgroundImage: `url("https://i.ibb.co/BgV5jD9/image-74.png")`,
        }}
      >
        <div className="flex flex-col items-center justify-between pb-20 lg:flex-row">
          <div className="p-8">
            <div className="text-4xl  uppercase  md:text-6xl ">
              <h1 className=" font-light text-white ">Discover</h1>
              <h1 className="pt-1 font-bold text-white ">
                graphic Design Ideas and SerVices
              </h1>
              <h1 className="py-5      font-sans text-4xl">
                from Branding to marketing
              </h1>
            </div>
            <div className=" relative mt-2 max-w-[500px]">
              <input
                placeholder="Search service, blog and many more.."
                className="w-full rounded-full border border-gray-400  py-1  text-black md:py-1.5"
                type="text"
              />
              <button className="absolute top-0 right-0 rounded-full bg-black py-[5px]  px-6 text-white md:py-[7px] md:px-12">
                Search
              </button>
            </div>
          </div>

          <div className="images-card grid grid-cols-2 gap-4  md:grid-cols-4 md:gap-20">
            <div className="flex flex-col  items-center justify-center">
              <p className="h-32 border-r-2 border-white md:h-44 "></p>
              <img src="https://i.ibb.co/y0TSgHc/image-49.png" alt="" />
            </div>
            <div className="flex  flex-col   items-center justify-center">
              <p className="h-10 border-r-2 border-white "></p>
              <img src="https://i.ibb.co/R3GS9cB/image-32.png" alt="" />
            </div>

            <div className="flex flex-col items-center justify-center">
              <p className="h-10 border-r-2  border-white md:h-32 "></p>
              <img src="https://i.ibb.co/W5g66vs/Rectangle-166.png" alt="" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="h-32 border-r-2  border-white md:h-44 "></p>
              <img src="https://i.ibb.co/23Czzh6/image-24.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <h2 className="mt-6 text-center font-mono text-2xl text-[#4C696D] ">
        Popular: Website Design Logo Design Brochure Label Design
      </h2>
      <div className=" mx-auto my-10 h-[2px] w-[80vw] bg-gray-400"></div>
    </section>
  );
};

export default Discover;
