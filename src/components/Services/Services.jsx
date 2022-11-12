import { motion } from "framer-motion";
import React from "react";

import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import PrimaryButton from "../../Common/PrimaryButton/PrimaryButton";
import { services } from "../../Utils/mockData";

const Services = () => {
  return (
    <section className="services mx-8">
      <div className=" text-center md:text-left">
        <h2
          className="font-serif text-2xl
           font-bold text-secondary md:text-3xl lg:text-4xl  "
        >
          Our Featured Services
        </h2>
        <small className="text-gray-600 md:text-lg  ">
          Discover the range of services provided by fliqaIndia
        </small>
      </div>
      <motion.div
        className="mx-4 py-4 md:mx-0 "
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          freeMode={true}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {services.map((data, index) => (
            <div key={index}>
              <SwiperSlide>
                <div className=" my-10  rounded-xl  border-2 pb-8 shadow-xl ">
                  <img src={data.img} className="w-full bg-cover" alt="Shoes" />

                  <div className="flex flex-col items-center justify-center gap-10 p-1 text-center">
                    <div>
                      <h3 className="text-base font-semibold text-black  md:text-lg xl:text-xl">
                        {data.title}
                      </h3>
                      <hr className="my-1 border-2" />
                      <small className="xl:text-md  text-sm text-gray-400 ">
                        <span className="font-semibold text-secondary">
                          Starting a{" "}
                        </span>
                        ( {data.salary + " " + data.time.slice(0, 12)})
                      </small>
                    </div>
                    <PrimaryButton styles="bg-secondary px-4 w-2/3 py-2  rounded-md text-white">
                      Know more
                    </PrimaryButton>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Services;
