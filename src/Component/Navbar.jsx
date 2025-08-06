import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [mobileSetting, setMobileSetting] = useState(false);
  // By using this UseState we will show and hide the Mobile menu || as of here the initial value of useState is false means mobile menu will be hidden
  useEffect(() => {
    if (mobileSetting) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
    // in return we have call a function to disable the scrolling if we directly open the large screen
  }, [mobileSetting]);
  //What it will do is it will disable the website from scrolling and if not then else condition will do its work
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src={assets.logo} alt="" />
        <ul className="hidden md:flex gap-7 text-white">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Dashboard
          </a>
          <a href="#About" className="cursor-pointer hover:text-gray-400">
            Who We Are
          </a>
          <a href="#Projects" className="cursor-pointer hover:text-gray-400">
            Case Studies
          </a>
          <a
            href="#Testimonials"
            className="cursor-pointer hover:text-gray-400"
          >
            Customer Voices
          </a>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full hover:bg-gray-500 cursor-pointer">
          Join Us
        </button>
        <img
          onClick={() => setMobileSetting(true)}
          //This will set the value to true when we click at that icon
          src={assets.menu_icon}
          className="md:hidden w-7 cursor-pointer"
          alt=""
        />
      </div>
      {/* web-view finished */}
      <div
        className={`md:hidden ${
          mobileSetting ? "fixed w-full" : "h-0 w-0"
        } right-0 top-0 bottom-0 overflow-hidden bg-[#407e96] transition-all`}
      >
        <div className="flex justify-end p-4 cursor-pointer">
          <img
            onClick={() => setMobileSetting(false)}
            //Now here it will set the value to false means it will close the menu
            src={assets.cross_icon}
            className="w-6 hover:bg-red-800"
            alt=""
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 mx-5 text-lg font-medium">
          <a
            onClick={() => setMobileSetting(false)}
            href="#Header"
            className="px-4 py-2 rounded-full inline-block"
          >
            Dashboard
          </a>
          <a
            onClick={() => setMobileSetting(false)}
            href="#About"
            className="px-4 py-2 rounded-full inline-block"
          >
            Who we are
          </a>
          <a
            onClick={() => setMobileSetting(false)}
            href="#Projects"
            className="px-4 py-2 rounded-full inline-block"
          >
            Case Studies
          </a>
          <a
            onClick={() => setMobileSetting(false)}
            href="#Testimonails"
            className="px-4 py-2 rounded-full inline-block"
          >
            Customer Voices
            {/* Here we have added onclick so that when user clicks any partiular anchor the other menu will close automatically */}
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
