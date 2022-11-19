import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image from "next/image";
import chinedu from "../public/chinedu.jpg";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const slider = () => {
  return (
    <section className="testimonial_card items-center justify-center max-w-2xl mx-auto p-5 mt-10">
      <div
        className=" flex flex-col items-center justify-center max-w-2xl mx-auto mb-4"
        id="home"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold text-gray-800">
          You're Hired
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
            <div 
            className="testimonial_flex"
            
            style={{borderRadius: '50px', overflow: 'hidden', position: 'relative'}}            >
              <Image
                className="h-20 w-20"
                src={chinedu}
                alt=""
                width="100px"
                height="100px"
              />
            </div>

            <h1 className="font-bold"> Kaine Chinedu Arthur</h1>
            <h2> Crypto Trader/ Community Manager</h2>
            <h3 className="text-center mt-3 text-sm">
              When it comes to making eye catching CV's and Resumes both in the
              Web2 and Web3 space, The Crypto Doyen comes top of mind. With her
              services I was able to land a web3 gig role in a world class
              Crypto firm where I was paid in 6 figures. I choose her any day
              and any time and would always refer others to her for her
              services.
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
