import React from "react";
import marquee1 from '../assets/images/marquee1.jpg';
import marquee2 from '../assets/images/marquee2.jpeg';
import marquee3 from '../assets/images/marquee3.jpg';
import marquee4 from '../assets/images/marquee4.jpg';
import marquee5 from '../assets/images/marquee5.jpeg';
import marquee6 from '../assets/images/marquee6.jpg';
import marquee7 from '../assets/images/marquee7.jpg';
import marquee8 from '../assets/images/marquee8.jpg';
import marquee9 from '../assets/images/marquee9.jpg';
import marquee10 from '../assets/images/marquee10.jpeg';
import marquee11 from '../assets/images/marquee11.jpg';
import marquee12 from '../assets/images/marquee12.jpg';
import marquee13 from '../assets/images/marquee13.jpeg';
import marquee14 from '../assets/images/marquee14.jpg';





const Marquee = () => {
  return (
    <div style={{
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('https://framerusercontent.com/images/TrJJuQ7sufSwUY5KvVdTUvR1xI.svg?scale-down-to=1024')",
        backgroundSize: "60%",
      }} className="bg-cover bg-center py-2 relative xl:px-7">
       <div className="container mx-auto">
       <p className="md:absolute text-center my-8 pt-2 md:my-0 font-bold">Working With</p>
      <div className="overflow-hidden relative md:mx-32">
        <div className="marquee whitespace-nowrap flex items-center space-x-8">
          {/* Add your logos here */}
          <img
            src={marquee1}
            alt="Partner 1"
            className="h-14 w-24 "
          />
          <img
            src={marquee2}
            alt="Partner 2"
            className="h-14 w-24 "
          />
          <img
            src={marquee3}
            alt="Partner 3"
            className="h-14 w-24 "
          />
          <img
            src={marquee4}
            alt="Partner 4"
            className="h-14 w-24 "
          />
          <img
            src={marquee5}
            alt="Partner 5"
            className="h-14 w-24 "
          />
          {/* Duplicate logos for seamless scrolling */}
          <img
            src={marquee6}
            alt="Partner 1"
            className="h-14 w-24 "
          />
          <img
            src={marquee7}
            alt="Partner 2"
            className="h-14 w-24 "
          />
          <img
            src={marquee8}
            alt="Partner 3"
            className="h-14 w-24 "
          />
          <img
           src={marquee9}
           alt="partner 4"
           className="h-14 w-24 "
          />

           <img
            src={marquee10}
            alt="Partner 2"
            className="h-14 w-24 "
          />

           <img
            src={marquee11}
            alt="Partner 2"
            className="h-14 w-24 "
          />

           <img
            src={marquee12}
            alt="Partner 2"
            className="h-10 w-20 "
          />

           <img
            src={marquee13}
            alt="Partner 2"
            className="h-10 w-20 "
          />

           <img
            src={marquee14}
            alt="Partner 2"
            className="h-10 w-20 "
          />
        </div>
      </div>
       </div>
    </div>
  );
};

export default Marquee;
