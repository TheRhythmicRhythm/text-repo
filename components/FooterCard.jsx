import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
        <div className="p-5 ">
          <ul>
            <p className="NavBarCard_Text text-gray-800 font-bold text-3xl pb-6">
              The_Crypto_Doyen
            </p>
            <div className="flex gap-6 pb-5">
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
          </ul>
        </div>

        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Company</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <a href="#About">About</a>
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <a href="#Services">Services</a>
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <a href="#Pricing">Pricing</a>
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <a href="#Blog">Blog</a>
            </li>
          
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Support</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
			<a href="#Contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
        <h1 className=" text-gray-800 font-semibold">
          © 2022 All rights reserved | Built with{" "}
          <span className="text-pink-600">❤</span> by{" "}
          <span className="hover:text-blue-600 font-semibold cursor-pointer">
            Rhytmic_Rhythm{" "}
          </span>
        </h1>
      </div>
    </>
  );
}

export default Footer;
