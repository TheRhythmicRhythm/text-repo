import React from "react";

const HomeCard = () => {
  return (
    <div
      className="homecard flex flex-col items-center justify-center  max-w-2xl mx-auto"
      id="home"
    >
      <p className="text-xs">Hi, welcome my name is </p>
      <h1 className="hero_text text-3xl sm:text-4xl lg:5xl text-center font-bold">
        The Crypto Doyen{" "}
      </h1>
      <h1 className="hero_text text-3xl sm:text-4xl lg:5xl text-center   font-bold">
        {" "}
        I am a full-stack dev.
      </h1>
      <h3 className="text-center mt-3  text-base lg:text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure
      </h3>
      <button className="border px-4 items-center py-1 rounded-full border-yellow-600 mt-3">
        {" "}
        Work with me
      </button>
    </div>
  );
};

export default HomeCard;


