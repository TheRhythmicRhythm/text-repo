import React from "react";

const ContactCard = () => {
  return (
    <section className=" items-center justify-center max-w-2xl mx-auto p-5">
      <div
        className=" flex flex-col items-center justify-center max-w-2xl mx-auto mb-4"
        id="home"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold text-gray-800">
          Contact Me
        </h1>
      </div>

      <div className="contact_form ">
        
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          method="POST"
          target="_blank"
        >
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white
              rounded text-sm border-0 shadow outline-none focus:outline-yellow-400 w-full mb-4"
            required
          />

          <input
            type="email"
            placeholder="Email"
            name="email"
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative  
              bg-white rounded text-sm border-0 shadow outline-none focus:outline-yellow-400 w-full mb-4"
            required
          />

          <textarea
            placeholder="Your message"
            name="message"  
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative 
               bg-white rounded text-sm border-0 shadow outline-none focus:outline-yellow-400   w-full mb-4"
            required
          />

          <button
            className="bg-gradient-to-r from-orange-300 to-yellow-300 text-white font-bold 
            uppercase text-sm px-6 py-3 rounded shadow hover:px-10 outline-none 
            focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="submit"
          >
            Send a message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactCard;
