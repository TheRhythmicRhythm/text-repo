import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const slider = () => {
 
  return (
    <section className="testimonial_card items-center justify-center max-w-2xl mx-auto p-5 mt-10" >
      <div
        className=" flex flex-col items-center justify-center max-w-2xl mx-auto mb-4"
        id="home"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold text-gray-800">
         
          Client Testimonial
        </h1>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className=" flex flex-col items-center  justify-center  mx-auto p-4"
            id="home"
          >
            <div className="testimonial_flex">
              <img
                className="h-20 w-20"
                src="https://img.icons8.com/stickers/100/000000/parse-resumes.png"
                alt=""
              />
            </div>

            <h1 className="font-bold"> John Doe</h1>
            <h3 className="text-center mt-3 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            </h3>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className=" flex flex-col items-center  justify-center  mx-auto p-4"
            id="home"
          >
            <div className="testimonial_flex">
              <img
                className="h-20 w-20"
                src="https://img.icons8.com/bubbles/50/000000/user.png"
                alt=""
              />
            </div>

            <h1 className="font-bold"> John Doe</h1>
            <h3 className="text-center mt-3 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            </h3>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className=" flex flex-col items-center  justify-center  mx-auto p-4"
            id="home"
          >
            <div className="testimonial_flex">
              <img
                className="h-20 w-20"
                src="https://img.icons8.com/bubbles/50/000000/user.png"
                alt=""
              />
            </div>

            <h1 className="font-bold"> John Doe</h1>
            <h3 className="text-center mt-3 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            </h3>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className=" flex flex-col items-center  justify-center  mx-auto p-4"
            id="home"
          >
            <div className="testimonial_flex">
              <img
                className="h-20 w-20"
                src="https://img.icons8.com/bubbles/50/000000/user.png"
                alt=""
              />
            </div>

            <h1 className="font-bold"> John Doe</h1>
            <h3 className="text-center mt-3 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            </h3>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default slider;
