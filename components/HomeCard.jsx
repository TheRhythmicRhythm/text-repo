import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const HomeCard = () => {
  return (
    <div
      className="homecard flex flex-col items-center justify-center  max-w-2xl mx-auto"
      id="Home"
    >
      <p className="text-xs home_animie_1">Hi, welcome my name is </p>
      <h1 className="hero_text text-3xl sm:text-4xl lg:5xl text-center font-bold home_animie_1">
        The Crypto Doyen{" "}
      </h1>
      <h1 className="hero_text text-3xl sm:text-4xl lg:5xl text-center font-bold home_animie_1">
        {" "}
        A Crypto Brand Influencer, Writer/Tutor 
      </h1>
      <h3 className="text-center mt-3  text-base lg:text-lg home_animie_2">
      Hi there, Welcome to the Crypto Doyen's Crib. All we do here is
            centered on growth. Every Aspect of your life must Change for the
            better.
            This Place is a 'One-Man' quarters, I and the Holy Spirit, my one true partner
      </h3>
      <div className="flex gap-6 pb-5 home_animie_3">
              <li>
                <a href="#">
                  <FaInstagram className="text-2xl cursor-pointer hover:text-pink-600" />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaTwitter className="text-2xl cursor-pointer hover:text-blue-700" />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
                </a>
              </li>

              <li>
                <a href="#">
                  <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
                </a>
              </li>
            </div>
    </div>
  );
};

export default HomeCard;


