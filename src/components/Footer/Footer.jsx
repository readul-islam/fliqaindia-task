import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin, BsYoutube } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdFacebook } from "react-icons/md";
const Footer = () => {
  return (
    <>
      <div
        className=" bg-cover "
        style={{
          backgroundImage: `url("https://i.ibb.co/tLCRtVb/image-110.png")`,
        }}
      >
        <div className="flex flex-col items-center justify-between p-8  lg:flex-row">
          <div className="">
            <div className=" ">
              <h1 className="max-w-lg pt-1  text-2xl font-semibold text-white ">
                Grow your freelancing career with Fliqa Associate
              </h1>
              <h1 className="max-w-lg  py-5    font-sans text-4xl">
                Register yourself Verification & Quality Check Verified
                Associate at FliqaIndia
              </h1>
            </div>
            {/* <div className=" relative mt-2 max-w-[500px]">
              <input
                placeholder="Search service, blog and many more.."
                className="border border-gray-400 md:py-1.5 py-1  w-full  rounded-full text-black"
                type="text"
              />
              <button className="bg-black text-white md:py-[7px] py-[5px] top-0 right-0  absolute md:px-12 px-6 rounded-full">
                Search
              </button>
            </div> */}
          </div>

          <button className=" rounded-lg bg-white py-2 px-4 text-black">
            Join now
          </button>
        </div>
      </div>
      <footer className="relative overflow-hidden">
        <div className="footer bg-black p-10 text-white">
          <div>
            <div className="flex flex-col  gap-y-9">
              <div className=" relative mt-2 max-w-[600px]">
                <input
                  placeholder="Email Address"
                  className="w-full rounded-full border border-gray-400  py-1  text-black md:py-1.5"
                  type="text"
                />
                <button className="absolute top-0   right-0 rounded-full bg-black/50 px-4  py-[9px] text-white">
                  Subscriber
                </button>
              </div>
              <p>Be in touch</p>
              <div className="flex items-center gap-x-4">
                <MdFacebook size={30} />
                <IoLogoWhatsapp size={30} />
                <BsLinkedin size={30} />
                <BsYoutube size={30} />
                <AiFillInstagram size={30} />
              </div>
            </div>
          </div>
          <div>
            <span className="link-hover link">Services</span>
            <a className="link-hover link">Blog</a>
            <a className="link-hover link">Portfolio</a>
          </div>
          <div>
            <span className="link-hover link">Tutorial</span>
            <a className="link-hover link">Careers</a>
            <a className="link-hover link">Flim</a>
          </div>
          <div>
            <span className="link-hover link">Contact us</span>
            <a className="link-hover link">Feedback</a>
            <a className="link-hover link">FAQ</a>
            <a className="link-hover link">Terms and conditions</a>
            <a className="link-hover link">Privacy Policy</a>
            <a className="link-hover link">Data Deletion Protocol</a>
          </div>
        </div>
        <div className="absolute -bottom-12 -left-12 hidden h-32 w-32 rounded-full bg-white md:block"></div>
        <div className="absolute -top-20 -right-4 hidden h-48 w-52 rounded-full bg-white md:block"></div>
        {/* <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" /> */}
        <span className="block bg-black text-center text-sm text-gray-500  ">
          © 2022 2019-2021, FliqaIndia Pvt Ltd. <br /> -ALL RIGHT RESERVED
          POWERED BY FLIQAINDIA PVT. LTD. <br /> VERSION 5.1.5
        </span>
      </footer>
    </>
  );
};

export default Footer;
