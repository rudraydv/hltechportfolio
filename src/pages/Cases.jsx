import React from 'react';
import Layout from '../components/Layout';
import alokImg from '../assets/images/alok rai.JPG'
import alokCompany from '../assets/images/marquee8-removebg-preview.png';
import ramanImg from '../assets/images/raman.jpg'
import ramanCompany from '../assets/images/cases1.png'
import keshavImg from '../assets/images/keshav.jpg'
import keshavCompany from '../assets/images/cases2-removebg-preview.png'
import saurabhImg from '../assets/images/saurabh.jpg'
import saurabhCompany from '../assets/images/marquee11-removebg-preview.png';



const Cases = () => {
  return (
  <Layout>
    <div style={{
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('https://framerusercontent.com/images/TrJJuQ7sufSwUY5KvVdTUvR1xI.svg?scale-down-to=1024')",
        backgroundSize: "60%",
      }} 
    className="py-10 px-4">
    <div className=" bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500  text-white py-8 px-10 container mx-auto rounded-xl">
      <div className=" flex flex-col lg:flex-row items-center">
        {/* Left Side: Text Content */}
        <div className="lg:w-1/2 text-left">
          {/* Top Buttons */}
          <div className="space-x-2 mb-5">
            <button className="bg-white text-[10px] font-medium text-blue-600 px-3 py-1 rounded-full border border-white hover:bg-transparent hover:text-white transition duration-500">
              Algo Trading
            </button>
            <button className="bg-white text-[10px] font-medium text-blue-600 px-3 py-1 rounded-full border border-white hover:bg-transparent hover:text-white transition duration-500">
              Share Market
            </button>
            <button className="bg-white text-blue-600 px-3 py-1 text-[10px] font-medium rounded-full border border-white hover:bg-transparent hover:text-white transition duration-500">
              Auto Trading
            </button>
          </div>

          {/* Main Title */}
          <h1 className="sm:text-2xl text-xl font-medium sm:font-bold leading-tight mb-6">
            We helped with developing comprehensive software solution for Algo Trading
            and also providing support & maintenance of IT services
          </h1>

          {/* Testimonial Section */}
          <div className="mt-5">
            <p className=" italic max-w-2xl">
              HL Tech supplied us with the skilled engineers we needed to meet our ambitious goals.
              Their HR manager proactively addressed concerns, ensuring our expectations were met.
            </p>
            <div className="flex items-center gap-2 mt-5">
            <img src={alokImg} alt="" className='w-10 h-10 border-[2px] rounded-md' />
            <p className="font-medium">Aalok Rai</p>
            </div>
            <p className="sm:text-sm text-xs mt-1">CEO at Brightex Technologies Pvt. Ltd.</p>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
          <img
            src={alokCompany} 
            alt="Brightex Logo"
            className="h-64 lg:h-72"
          />
        </div>
      </div>
    </div>
    </div>


    <div style={{
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('https://framerusercontent.com/images/TrJJuQ7sufSwUY5KvVdTUvR1xI.svg?scale-down-to=1024')",
        backgroundSize: "60%",
      }} 
    className="py-10 px-4">
    <div className=" bg-purple-700  text-white py-8 px-10 container mx-auto rounded-xl">
      <div className=" flex flex-col lg:flex-row items-center">
        {/* Left Side: Text Content */}
        <div className="lg:w-1/2 text-left">
          {/* Top Buttons */}
          <div className="space-x-2 mb-5">
            <button className="bg-white text-[10px] font-medium text-blue-600 px-3 py-1 rounded-full border border-white hover:bg-transparent hover:text-white transition duration-500">
              website
            </button>
            <button className="bg-white text-[10px] font-medium text-blue-600 px-3 py-1 rounded-full border border-white hover:bg-transparent hover:text-white transition duration-500">
              corporate
            </button>
          </div>

          {/* Main Title */}
          <h1 className="sm:text-2xl text-xl font-medium sm:font-bold leading-tight mb-6">
          Our team is providing Support,Maintanance & SEO service to make sure website run smoothly and get top ranking on google search engine.
          </h1>

          {/* Testimonial Section */}
          <div className="mt-5">
            <p className=" italic max-w-2xl">
            The HL Tech team are very supportive ,they take care of our website and ensuring that our portal is running smoothly.
            </p>
            <div className="flex items-center gap-2 mt-5">
            <img src={ramanImg} alt="" className='w-10 h-10 border-[2px] rounded-md' />
            <p className="font-medium">Raman Agrawal</p>
            </div>
            <p className="sm:text-sm text-xs mt-1">Wisshy (Digital Marketing Client )</p>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
          <img
            src={ramanCompany}
            alt="Brightex Logo"
            className="h-64 lg:h-72"
          />
        </div>
      </div>
    </div>
    </div>

    <div style={{
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('https://framerusercontent.com/images/TrJJuQ7sufSwUY5KvVdTUvR1xI.svg?scale-down-to=1024')",
        backgroundSize: "60%",
      }} 
    className="py-10 px-4">
    <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  text-white py-8 px-10 container mx-auto rounded-xl">
      <div className=" flex flex-col lg:flex-row items-center">
        {/* Left Side: Text Content */}
        <div className="lg:w-1/2 text-left">
          {/* Top Buttons */}
          <div className="space-x-2 mb-5">
            <button className="bg-white text-[10px] font-medium text-blue-600 px-3 py-1 rounded-full border border-white hover:bg-transparent hover:text-white transition duration-500">
              Website
            </button>
            <button className="bg-white text-[10px] font-medium text-blue-600 px-3 py-1 rounded-full border border-white hover:bg-transparent hover:text-white transition duration-500">
              Finance
            </button>
          </div>

          {/* Main Title */}
          <h1 className="sm:text-2xl text-xl font-medium sm:font-bold leading-tight mb-6">
          We’ve developed a business website for CA Firm
          </h1>

          {/* Testimonial Section */}
          <div className="mt-5">
            <p className=" italic max-w-2xl">
            We were impressed by HL Tech approach to the development process and how they engineer new solutions.
            </p>
            <div className="flex items-center gap-2 mt-5">
            <img src={keshavImg} alt="" className='w-10 h-10 border-[2px] rounded-md' />
            <p className="font-medium">Keshav Sharma</p>
            </div>
            <p className="sm:text-sm text-xs mt-1">Protax Solutions (Website Development Client)</p>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
          <img
            src={keshavCompany}
            alt="Brightex Logo"
            className="lg:h-72 lg:w-72"
          />
        </div>
      </div>
    </div>
    </div>

    <div style={{
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('https://framerusercontent.com/images/TrJJuQ7sufSwUY5KvVdTUvR1xI.svg?scale-down-to=1024')",
        backgroundSize: "60%",
      }} 
    className="py-10 px-4">
    <div className="bg-gradient-to-tr from-cyan-600 to-yellow-400  text-white py-8 px-10 container mx-auto rounded-xl">
      <div className=" flex flex-col lg:flex-row items-center">
        {/* Left Side: Text Content */}
        <div className="lg:w-1/2 text-left">
          {/* Top Buttons */}
          <div className="space-x-2 mb-5">
            <button className="bg-white text-[10px] font-medium text-blue-600 px-3 py-1 rounded-full border border-white hover:bg-transparent hover:text-white transition duration-500">
              website
            </button>
            <button className="bg-white text-[10px] font-medium text-blue-600 px-3 py-1 rounded-full border border-white hover:bg-transparent hover:text-white transition duration-500">
              corporate
            </button>
          </div>

          {/* Main Title */}
          <h1 className="sm:text-2xl text-xl font-medium sm:font-bold leading-tight mb-6">
          We Develop An Ecommerce Website For a Footwear Brand And Also Providing Digital Marketing Services.
          </h1>

          {/* Testimonial Section */}
          <div className="mt-5">
            <p className=" italic max-w-2xl">
            Sujeet  are very supportive ,He take care of our website and ensuring that our portal is running smoothly!
            </p>
            <div className="flex items-center gap-2 mt-5">
            <img src={saurabhImg} alt="" className='w-10 h-10 border-[2px] rounded-md' />
            <p className="font-medium">Saurabh sharma</p>
            </div>
            <p className="sm:text-sm text-xs mt-1">Owner (ASE Sports)</p>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
          <img
            src={saurabhCompany}
            alt="Brightex Logo"
            className="h-64 lg:h-80"
          />
        </div>
      </div>
    </div>
    </div>
  </Layout>
  );
};

export default Cases;
