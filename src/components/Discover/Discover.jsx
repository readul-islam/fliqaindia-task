import React from "react";

const Discover = () => {
  return (
    <>
      <div
        className=" bg-cover "
        style={{
          backgroundImage: `url("https://i.ibb.co/BgV5jD9/image-74.png")`,
        }}
      >
        <div className="flex flex-col lg:flex-row justify-between items-center pb-20">
          <div className="p-8">
            <div className="uppercase  text-4xl  md:text-6xl ">
              <h1 className=" text-white font-light ">Discover</h1>
              <h1 className="font-bold text-white pt-1 ">
                graphic Design Ideas and SerVices
              </h1>
              <h1 className="text-4xl      font-sans py-5">
                from Branding to marketing
              </h1>
            </div>
            <div className=" relative mt-2 max-w-[500px]">
              <input
                placeholder="Search service, blog and many more.."
                className="border border-gray-400 md:py-1.5 py-1  w-full  rounded-full text-black"
                type="text"
              />
              <button className="bg-black text-white md:py-[7px] py-[5px] top-0 right-0  absolute md:px-12 px-6 rounded-full">
                Search
              </button>
            </div>
          </div>

          <div className="images-card grid grid-cols-2 md:grid-cols-4  gap-4 md:gap-20">
            <div className="flex flex-col  items-center justify-center">
              <p className="border-r-2 h-32 md:h-44 border-white "></p>
              <img src="https://i.ibb.co/y0TSgHc/image-49.png" alt="" />
            </div>
            <div className="flex  flex-col   items-center justify-center">
              <p className="border-r-2 h-10 border-white "></p>
              <img src="https://i.ibb.co/R3GS9cB/image-32.png" alt="" />
            </div>

            <div className="flex flex-col items-center justify-center">
              <p className="border-r-2 h-10  md:h-32 border-white "></p>
              <img src="https://i.ibb.co/W5g66vs/Rectangle-166.png" alt="" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="border-r-2 h-32  md:h-44 border-white "></p>
              <img src="https://i.ibb.co/23Czzh6/image-24.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-center mt-6 text-2xl text-[#4C696D] font-mono ">
        Popular: Website Design Logo Design Brochure Label Design
      </h2>
      <div class=" h-[2px] w-[80vw] mx-auto bg-gray-400 my-10"></div>
    </>
  );
};

export default Discover;
