import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { BiCheckDouble } from "react-icons/bi";


const PricingCard = () => {
  return (
    <section className="pricing_card mt-10" id="pricing">
      <div
        className=" flex flex-col items-center justify-center  mx-auto mb-4 px-5 "
        id="Pricing"
      >
        <h1 className="text-2xl sm:text-4xl lg:text-5xl text-center font-bold text-gray-800">
          Pick a plan thats{" "}
        </h1>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl text-center font-bold text-gray-800">
          right for you
        </h1>
        <h3 className="text-center mt-3 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscure
        </h3>
      </div>

      <div className="gallery_contents">
        <div className="nfts">


        <div className="itemBox">
            <div className="itemboxbox bg-slate-50 p-5 rounded-lg ">
              <h3 className=" w-full px-1 mb-1 font-bold text-gray-800">Social Package </h3>

              <h1 className="text-4xl font-bold mb-2 text-gray-800">$50</h1>
              <p className="text-gray-600">lorem lorem_lorem_lorem</p>
              <div className="mt-10">
                <h2 className="mb-1 flex text-gray-800 font-semibold">
                  {" "}
                  <BiCheckDouble className="check_double text-yellow-400" />
                  Social Media Handling 
                </h2>

                <h2 className="mb-1 flex text-gray-800 font-semibold">
                  {" "}
                  <BiCheckDouble className="check_double text-yellow-400" />
                  Linkedin Optimisation
                </h2>

              
                <h2 className="mb-1 flex text-gray-800 font-semibold">
                  <BiCheckDouble className="check_double text-yellow-400" />14
                  Days Timeframe 
                </h2>
                <button
                  className="center_button border px-4 py-1 bg-gradient-to-r from-orange-300 
                    to-yellow-300 text-gray-900 font-bold 
                    uppercase text-sm hover:bg-gradient-to-l transition-transform duration-400 mt-10"
                >
                  {" "}
                  Work with me
                </button>
              </div>
            </div>
          </div>

        <div className="itemBox">
            <div className="itemboxbox bg-slate-50 p-5 rounded-lg ">
              <h3 className=" w-full px-1 mb-1 font-bold text-gray-800">Gold Package </h3>

              <h1 className="text-4xl font-bold mb-2 text-gray-800">$40</h1>
              <p className="text-gray-600">lorem lorem_lorem_lorem</p>
              <div className="mt-10">
                <h2 className="mb-1 flex text-gray-800 font-semibold">
                  {" "}
                  <BiCheckDouble className="check_double text-yellow-400" />2
                  Template for Cv/Resume
                </h2>

                <h2 className="mb-1 flex text-gray-800 font-semibold">
                  {" "}
                  <BiCheckDouble className="check_double text-yellow-400" />
                  Cover Letters
                </h2>

                <h2 className="mb-1 flex text-gray-800 font-semibold">
                  {" "}
                  <BiCheckDouble className="check_double text-yellow-400" />
                  Career Consultation 
                </h2>
                <h2 className="mb-1 flex text-gray-800 font-semibold">
                  <BiCheckDouble className="check_double text-yellow-400" />
                  Lifetime Cv/Resume Editing
                </h2>
                <h2 className="mb-1 flex text-gray-800 font-semibold">
                  <BiCheckDouble className="check_double text-yellow-400" />5
                  Days Delivery
                </h2>
                <button
                  className="center_button border px-4 py-1 bg-gradient-to-r from-orange-300 
                    to-yellow-300 text-gray-900 font-bold 
                    uppercase text-sm hover:bg-gradient-to-l transition-transform duration-400 mt-10"
                >
                  {" "}
                  Work with me
                </button>
              </div>
            </div>
          </div>

          <div className="itemBox">
            <div className="itemboxbox bg-slate-50 p-5 rounded-lg ">
              <h3 className=" w-full px-1 mb-1 font-bold text-gray-800">Express Package</h3>

              <h1 className="text-4xl font-bold mb-2 text-gray-800">$30</h1>
              <p>lorem lorem_lorem_lorem</p>
              <div className="mt-10">
              <h2 className="mb-1 flex text-gray-800 font-semibold">
                  {" "}
                  <BiCheckDouble className="check_double text-yellow-400" />1
                  Template for Cv/Resume
                </h2>

                <h2 className="mb-1 flex text-gray-800 font-semibold">
                  {" "}
                  <BiCheckDouble className="check_double text-yellow-400" />
                  Cover Letter
                </h2>
                <h2 className="mb-1 flex text-gray-800 font-semibold">
                  <BiCheckDouble className="check_double text-yellow-400" />
                  Career Consultation
                </h2>
            
                <h2 className="mb-1 flex text-gray-800 font-semibold">
                  <BiCheckDouble className="check_double text-yellow-400" />
                  Lifetime Cv/Resume Editing
                </h2>
                <h2 className="mb-1 flex text-gray-800 font-semibold">
                  <BiCheckDouble className="check_double text-yellow-400" />3
                  Days Delivery
                </h2>
                <button
                  className="center_button border px-4 py-1 bg-gradient-to-r from-orange-300
                      to-yellow-300 uppercase font-bold text-gray-900 hover:px-6 transition-transform duration-400 mt-10"
                >
                  {" "}
                  Work with me
                </button>
              </div>
            </div>
          </div>  

          <div className="itemBox">
            <div className="itemboxbox bg-slate-50 p-5 rounded-lg ">
              <h3 className=" w-full px-1 mb-1 font-bold text-gray-800">Professional Package</h3>

              <h1 className="text-4xl font-bold mb-2 text-gray-800">$25</h1>
              <p>lorem lorem_lorem_lorem</p>
              <div className="mt-10">
              <h2 className="mb-1 flex text-gray-800 font-semibold">
                  {" "}
                  <BiCheckDouble className="check_double text-yellow-400" />1
                  Template for Cv/Resume
                </h2>

                <h2 className="mb-2 flex  font-semibold text-gray-800">
                  {" "}
                  <BiCheckDouble className="check_double text-yellow-400" />
                  Cover Letter
                </h2>
             
                <h2 className="mb-2 flex  font-semibold text-gray-800">
                  <BiCheckDouble className="check_double text-yellow-400" />5
                  Days Delivery
                </h2>
                <button
                  className="center_button border px-4 py-1 bg-gradient-to-r from-orange-300 
                   to-yellow-300 uppercase text-gray-900 font-bold hover:bg-gradient-to-l transition-transform duration-400 mt-10"
                >
                  {" "}
                  Work with me
                </button>
              </div>
            </div>
          </div>

          <div className="itemBox">
            <div className="itemboxbox bg-slate-50 p-5 rounded-lg ">
              <h3 className=" w-full px-1 mb-1 font-bold text-gray-800">Standard Package </h3>

              <h1 className="text-4xl font-bold mb-2 text-gray-800 ">$10</h1>
              <p>lorem lorem_lorem_lorem</p>
              <div className="mt-10">
                <h2 className="mb-2 flex  font-semibold text-gray-800">
                  <BiCheckDouble className="check_double text-yellow-400" />1
                  CV / Resume
                </h2>

                <h2 className="mb-2 flex  font-semibold text-gray-800">
                  {" "}
                  <BiCheckDouble className="check_double text-yellow-400" />5
                  Days Delivery
                </h2>
                <button
                  className="center_button border px-4 py-1 bg-gradient-to-r from-orange-300 
                     to-yellow-300 uppercase text-gray-900 font-bold hover:bg-gradient-to-l transition-transform duration-400 mt-10"
                >
                  {" "}
                  Work with me
                </button>
              </div>
            </div>
          </div>

          <div className="itemBox">
            <div
              className="itemboxbox bg-slate-50 p-5 rounded-lg group-hover:bg-slate-100 
              transition-transform duration-200 ease-in-out"
            >
              <h3 className=" w-full px-1 mb-1 font-bold text-gray-800">Student Package</h3>

              <h1 className="text-4xl font-bold mb-2 text-gray-800  font-semibold text-gray-800">$6</h1>
              <p>lorem lorem_lorem_lorem</p>
              <div className="mt-10">
                <h2 className="mb-1 flex  font-semibold text-gray-800">
                  {" "}
                  <BiCheckDouble className="check_double text-yellow-400" /> 1
                  Resume
                </h2>

                <h2 className="mb-1 flex  font-semibold text-gray-800">
                  {" "}
                  <BiCheckDouble className="check_double text-yellow-400" /> 5
                  Days Delivery
                </h2>
                <button
                  className="center_button border px-4 py-1 bg-gradient-to-r from-orange-300 
                     to-yellow-300 uppercase text-gray-900 font-bold hover:bg-gradient-to-l transition-transform duration-400 mt-10"
                >
                  {" "}
                  Work with me
                </button>
              </div>
            </div>
          </div>

      

        

        

       
        </div>
      </div>
    </section>
  );
};

export default PricingCard;
