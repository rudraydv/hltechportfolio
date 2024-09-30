import React from "react";
import myImage from '../assets/images/duj.png';
import myImage1 from '../assets/images/testimonial1.jpg';
import myImage2 from '../assets/images/testimonial2.jpg';
import myImage3 from '../assets/images/testimonial3.jpg';
import myImage4 from '../assets/images/testimonial4.jpg';
import myImage5 from '../assets/images/saurabh.jpg';
import myImage6 from '../assets/images/CircleImgsujeet.png';
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section  style={{
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('https://framerusercontent.com/images/TrJJuQ7sufSwUY5KvVdTUvR1xI.svg?scale-down-to=1024')",
        backgroundSize: "60%",
      }} className="bg-cover bg-center p-8 pt-6">
      <div className="container mx-auto grid lg:grid-cols-2 lg:gap-24">
        
        {/* Text Section */}
        <div className="md:w-full text-left lg:mt-8">
          <h1 className="sm:text-3xl text-xl font-medium leading-tight">
            Hey <span role="img" aria-label="wave">👋</span>, I am Sujeet
            <br />
            <span className="text-black">Your Technology partner.</span>
          </h1>
          <p className="mt-3 text-[13px] font-medium text-gray-600">
          Global IT Service Provider : 
          Empowering Businesses to achieve their
           goals through IT initiatives & advancing business.Let’s work together.
           Website development , App development , Digital marketing and IT Consulting.
          </p>

          {/* Social Proof */}
          <div className="flex flex-wrap items-center mt-6 space-x-4">
            <div className="flex -space-x-2">
              <img
                className="w-10 h-10 rounded-full border-2 border-white"
                src={myImage1}
                alt="client"
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-white"
                src={myImage2}
                alt="client"
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-white"
                src={myImage3}
                alt="client"
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-white"
                src={myImage4}
                alt="client"
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-white"
                src={myImage5}
                alt="client"
              />
            </div>
            <p className="text-gray-600 text-[13px]">Over 150+ Happy Clients</p>
          </div>

          {/* Call to Action Buttons */}
          <div className="mt-8 flex relative items-center flex-col sm:flex-row space-y-4 md:space-y-0 sm:space-x-5">
            <a
              href="tel:+91-9199025109"
              className="bg-black/85 text-white px-5 py-3 rounded-lg text-[12px] font-semibold hover:bg-gray-800 shadow-xl shadow-pink-100 hover:text-yellow-300 duration-500 hover:scale-110
              sm:hover:rotate-3"
            > <MdOutlineWifiCalling3 size={14} className="absolute left-1 mt-[1px] "/>
              Let's Talk</a>
        <div className="flex items-center">
        <Link
              to="/contactus"
              className="bg-white text-black shadow-md px-4 py-2 rounded-lg text-[12px] font-semibold hover:bg-gray-100 flex items-center border-dotted border-[1.4px] border-blue-300 hover:scale-105 sm:hover:rotate-3 duration-500"
            >
              <img
                className="w-6 h-6 rounded-full mr-2"
                src={myImage6}
                alt="Consultation"
              />
              Book a Consultation Call
            </Link>
        </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-[28rem] mt-10 lg:mt-0 border-2 border-dotted p-4 bg-white rounded-xl overflow-auto hover:rotate-2 duration-500">
          <img 
            className="rounded-xl shadow-lg w-full h-auto hover:scale-105 transition-all duration-500"
            src={myImage}
            alt="Varnit"
            oncontextmenu="return false"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
