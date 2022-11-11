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
    <section className="mx-8 services">
      <div className=" md:text-left text-center">
        <h2
          className="text-2xl md:text-3xl
           lg:text-4xl text-secondary font-bold font-serif  "
        >
          Our Featured Services
        </h2>
        <small className="text-gray-600 md:text-lg  ">
          Discover the range of services provided by fliqaIndia
        </small>
      </div>
      <motion.div
        className="mx-4 md:mx-0 py-4 "
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
          {services.map((data) => (
            <div key={data.id}>
              <SwiperSlide>
                <div className=" rounded-xl  border-2  shadow-xl my-10 pb-8 ">
                  <img src={data.img} className="w-full bg-cover" alt="Shoes" />

                  <div className="flex flex-col justify-center text-center items-center gap-10 p-1">
                    <div>
                      <h3 className="xl:text-xl md:text-lg text-base  font-semibold text-black">
                        {data.title}
                      </h3>
                      <hr className="border-2 my-1" />
                      <small className="text-gray-400  text-sm xl:text-md ">
                        <span className="text-secondary font-semibold">
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
