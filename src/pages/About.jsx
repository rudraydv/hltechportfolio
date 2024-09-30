import React from 'react';
import Layout from '../components/Layout';
import myImage from '../assets/images/duj.png';
import Marquee from '../components/Marquee';
import PortfolioGallery from '../components/PortfolioGallary';
import BookGallery from '../components/BookGallary';
import Enroll from '../components/Enroll';
import { IoIosStar } from "react-icons/io";
import sujeetsignatureImg from '../assets/images/sujeet sig.JPG';


const About = () =>{
    return(
        <>
        <Layout>
       <div  style={{
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('https://framerusercontent.com/images/TrJJuQ7sufSwUY5KvVdTUvR1xI.svg?scale-down-to=1024')",
        backgroundSize: "60%",
      }}  
         className="py-5 px-3">
       <div style={{
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('https://framerusercontent.com/images/TrJJuQ7sufSwUY5KvVdTUvR1xI.svg?scale-down-to=1024')",
        backgroundSize: "100%",
      }}  className="bg-cover bg-center max-w-lg mx-auto rounded-lg shadow-xl hover:shadow-2xl bg-white relative border-[1px] border-gray-400">
      <div className="flex flex-col items-center p-6" >
        {/* <div className="hidden lg:block bg-pink-200 absolute -left-6 w-24 h-80 -z-10 rounded-bl-2xl rounded-tl-xl -rotate-12  top-20"></div>
        <div className="hidden lg:block bg-purple-200 absolute -right-6 w-24 h-80 -z-20  rounded-bl-2xl rounded-tr-xl rotate-12 top-20"></div> */}
        <img
          className="w-24 h-24  rounded-full shadow-lg mb-4 border-[1.4px] p-1"
          src={myImage}
          alt="Sujeet"
        />
        <h2 className="text-xl font-semibold mb-5 text-gray-900">
          Hey, I am Sujeet 👋
        </h2>
        <div className="text-gray-800 text-sm space-y-2 text-left">
          
          <div className='flex gap-2 font-medium'>
            <p className="pt-1"><IoIosStar/></p>
            <p className=""> <span className='text-black font-semibold'>Creative Developer:</span> Passionate about building user-friendly, engaging websites & Mobile Applications.</p>
             </div>

          <div className='flex gap-2 font-medium'>
            <p className="pt-1"><IoIosStar/></p>
            <p className=""><span className='text-black font-semibold'>Full-Stack Skills:</span> Proficient in front-end and back-end technologies.</p>
            </div>

          <div className='flex gap-2 font-medium'>
              <p className="pt-1"><IoIosStar/></p>
              <p><span className='text-black font-semibold'>Digital Marketing Expert:</span> Experienced in Meta & Google Ads, and social media strategies.</p>
               </div>

          <div className='flex gap-2 font-medium'>
            <p className='pt-1'><IoIosStar/></p>
            <p><span className='text-black font-semibold'>User-Focused:</span> Tailors solutions based on client needs and user behavior.</p>
            </div>

          <div className='flex  gap-2 font-medium'>
            <p className='pt-1'><IoIosStar/></p>
            <p><span className='text-black font-semibold'>Lifelong Learner:</span> Stays updated with the latest industry trends and tools.</p>
            </div>

          <div className='flex gap-2 font-medium'>
            <p className='pt-1'><IoIosStar/></p>
            <p><span className='text-black font-semibold'>Proven Success:</span> Launched projects that boost traffic and conversions.</p>
            </div>

          <div className='flex  gap-2 font-medium'>
            <p className='pt-1'><IoIosStar/></p>
            <p><span className='text-black font-semibold'>Clear Communicator: </span> Simplifies complex concepts for clients and stakeholders.</p></div>

        </div>
        <div className="">
          <img src={sujeetsignatureImg} alt="Signature" className="w-20" />
        </div>
      </div>
    </div>
       </div>
       <Marquee/>
       <PortfolioGallery/>
       <BookGallery/>
       <Enroll/>
        </Layout>
        </>
    );
};

export default About;