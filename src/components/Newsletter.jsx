// src/AutoSlider.js
import React, { useEffect, useState } from 'react';
import alokImg from '../assets/images/alok rai.JPG'
import alokcompany from '../assets/images/marquee8-removebg-preview.png'
import saurabhImg from '../assets/images/saurabh.jpg'
import saurabhCompany from '../assets/images/marquee11-removebg-preview.png'
import keshavImg from '../assets/images/keshav.JPG'
import keshavCompany from '../assets/images/cases2-removebg-preview.png'
import pujaguptaImg from '../assets/images/pujagupta.jpg'
import pujaguptaCompany from '../assets/images/skinkare.jpg'
import vikramshilaImg from '../assets/images/testimonial4.jpg'
import virakCompany from '../assets/images/marquee4.jpg'
import ramanImg from '../assets/images/raman.jpg'
import ramanCompany from '../assets/images/cases1.png';





const Newsletter = () => {
  const containers = [
    {
      title: 'We helped with developing comprehensive Website & software solution for Algo Trading and also providing support & maintenance of IT services And also Providing Digital Marketing Services.',
      
      testimonial: 'Sujeet & his team are very expert in software development and as well as digital marketing  from lead generation to social media management. They proactively addressed concerns, ensuring our expectations were met.',
      name: 'Aalok Rai',
      position: 'CEO at Brightex Technologies Pvt. Ltd.',
      imageSrc: alokImg,
      imageSrcbrand: alokcompany,
    },

    {
      title: 'We Develop An Ecommerce Website For a Footwear Brand And Also Providing Digital Marketing Services.',
      testimonial: '  Sujeet  are very supportive ,He take care of our website and ensuring that our portal is running smoothly!',
      name: 'Saurabh Sharma',
      position:"Owner (ASE Sports)",
      imageSrc: saurabhImg,
      imageSrcbrand: saurabhCompany,
      link: 'https://example.com/1',
    },

    {
      title: ' We’ve developed a business website for CA Firm.',
      testimonial: ' We were impressed by Sujeet approach to the development process and how he engineer new solutions.',
      name: 'Keshav Sharma',
      position: 'Founder (Protax Solutions)',
      imageSrc: keshavImg,
      imageSrcbrand: keshavCompany,
    },

    {
      title: ' We are Providing DIjgital Marketing Services For a Dermotologist Doctor Clinic.',
      testimonial: ' Sujeet have very good knowledge in digital marketing soltions,He is managing our social media very carefully ,I recommend his services.',
      name: 'Pooja Gupta',
      position: 'MD : Skincare Clinic Bhopal',
      imageSrc: pujaguptaImg,
      imageSrcbrand: pujaguptaCompany,
    },

    {
      title: ' We are Providing DIjgital Marketing Services For UPSC/MPPSC Coaching ',
      testimonial: ' Sujeet and his team is very helpfull and they are open 24*7 for a support. ',
      name: 'Kushlesh Singh Rajput',
      position: 'MD : Vikramshila Academy ',
      imageSrc: vikramshilaImg,
      imageSrcbrand: virakCompany,
    },

    {
      title: 'Our team is providing Social Media Marketing Services.',
      testimonial: 'Sujeet knows vey good mechanism of Social media marketing and also in building brand from scratch,If are you looking for Digital marketing I highly recommend sujeet. ',
      name: 'Raman Agrawal',
      position: 'Wisshy',
      imageSrc: ramanImg,
      imageSrcbrand: ramanCompany,
    },
   
  ];

  const [currentContainer, setCurrentContainer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContainer((prev) => (prev + 1) % containers.length);
    }, 3000);

    return () => clearInterval(interval); 
  }, [containers.length]);

  return (
    <div
     className="relative w-full mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentContainer * 100}%)` }}
      >
        {containers.map((container, index) => (
          <div key={index} 
          className="min-w-full flex justify-center px-4 h-full">
            <div 
             className="bg-black text-white py-6 px-10 container mx-auto rounded-xl">
              <div className="flex flex-col lg:flex-row items-center">
                {/* Left Side: Text Content */}
                <div className="lg:w-1/2 text-left">
                  {/* Top Buttons */}
                  <div className="space-x-2 mb-5">
                    <button className="bg-white text-[10px] font-medium text-blue-600 px-3 py-1 rounded-full border border-white hover:bg-transparent hover:text-white transition duration-500">
                      Website
                    </button>
                    <button className="bg-white text-[10px] font-medium text-blue-600 px-3 py-1 rounded-full border border-white hover:bg-transparent hover:text-white transition duration-500">
                      Corporate
                    </button>
                  </div>

                  {/* Main Title */}
                  <h1 className="sm:text-2xl text-xl font-medium sm:font-bold leading-tight mb-4">
                    {container.title}
                  </h1>

                  {/* Testimonial Section */}
                  <div className="mt-3">
                    <p className="italic max-w-2xl">
                      {container.testimonial}
                    </p>
                    <div className="flex items-center gap-2 mt-3">
                      <img src={container.imageSrc} alt={container.name} className='w-12 h-12 border-[2px] rounded-md' />
                      <div className="">
                      <p className="font-medium">{container.name}</p>
                    <p className="sm:text-sm text-xs">{container.position}</p>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Right Side: Image */}
                <div className="lg:w-1/2 mt-10 lg:mt-0 h-full lg:h-72 flex justify-center p-8">
                 <div className="border-[1.5px] border-white border-dotted p-2 rounded-lg">
                 <img
                    src={container.imageSrcbrand}
                    alt={container.name}
                    className="h-40 lg:h-52 w-52 p-4  rounded-lg bg-white"
                  />
                 </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default Newsletter;

