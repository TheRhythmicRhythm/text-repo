import React, { useState } from "react";
import Button from "./Button";

const NavBar = () => {
  let Links = [
    { name: "Home", link: "#Home" },
    { name: "About", link: "#About" },
    { name: "Service", link: "#Services" },
    { name: "Pricing", link: "#Pricing" }, 
    { name: "Contact", link: "#Contact" },
    { name: "Blog", link: "/Blog" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed  top-0 left-0 z-50">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div
          className="NavBarCard_Text nav_text font-bold text-sm cursor-pointer flex items-center"
        >
          <span className=" mr-1 pt-2"></span>
          TheCryptoDoyen
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-3  cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
          <img
          className="w-8 h-8"
          src="https://img.icons8.com/bubbles/50/000000/menu-2.png"
          alt="" 
             />
        </div>

        <ul
          className={`md:flex md:items-center bg-white md:pb-0 pb-12 absolute md:static 
      md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all 
      duration-500 ease-in ${open ? "top-20 " : "top-[-490px]"}`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8  text-base md:my-0 my-7">
              <a
                href={link.link}
                className="font-bold hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <Button>Get Started</Button>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
