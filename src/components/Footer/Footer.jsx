import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div
      className="pt-10 px-4 md:px-20 lg:px-32 w-full bg-gray-900 overflow-hidden"
      id="Footer"
    >
      <div className="flex container mx-auto flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/3 mb-8 md:mb-0 ">
          <img src={assets.logo_dark} alt="" />
          <p className="text-gray-400 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam est
            quam asperiores cumque quas vero inventore, voluptatem
            exercitationem recusandae! Praesentium voluptatibus et optio
            nesciunt consequatur tenetur quo labore non veniam?
          </p>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Comapny</h3>
          <ul className="flex flex-col gap-2 font-bold mb-4 text-gray-400">
            <a href="#Header" className="hover:text-white">
              Home
            </a>
            <a href="#Projects" className="hover:text-white">
              Projects
            </a>
            <a href="#Testimonials" className="hover:text-white">
              Testimonials
            </a>
            <a href="#Contact" className="hover:text-white">
              Contact Us
            </a>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">
            Subscribe to our news Letter
          </h3>
          <p className="text-gray-400 mb-4 max-w-80">
            The latest news, articles, and resources , sent to your inbox
            weekly.
          </p>
          <div className="flex gap-2">
            <input
              className="p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto"
              type="email"
              placeholder="Enter Your Email"
            />
            <button className="py-2 px-4 rounded bg-blue-500 text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
        Copyright 2024 &copy; Real Estate. All Right Reserved.
      </div>
    </div>
  );
};

export default Footer;
