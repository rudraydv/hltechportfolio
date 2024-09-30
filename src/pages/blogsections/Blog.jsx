import React from 'react';
import Layout from '../../components/Layout';
import { Link } from 'react-router-dom';

const Blog = () => {

  return (
   <Layout>
     <div style={{
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('https://framerusercontent.com/images/TrJJuQ7sufSwUY5KvVdTUvR1xI.svg?scale-down-to=1024')",
        backgroundSize: "60%",
      }}
     className="min-h-screen flex flex-col items-center px-4 py-10">
      {/* Header Section */}
      <div className="pb-10 text-center">
        <h1 className="text-2xl font-bold text-gray-900">
          Latest Blog
        </h1>
      </div>

      {/* Blog List Section */}
      <div className="w-full max-w-lg border border-t border-b rounded-t-xl rounded-b-xl bg-white">
         <Link to="/blog1" className="">
         <div 
            className="flex justify-between items-center p-4 border rounded-t-xl hover:rounded-t-xl hover:border-black  border-gray-200 cursor-pointer hover:bg-black hover:text-white duration-500"
          >
            <div className=''>
              <h2 className="text-lg font-semibold">
              The Future of Web Development: Trends to Watch Introduction
              </h2>
              <p className=" text-sm">02 July, 2024</p>
            </div>
            <span className="text-xl">→</span>
          </div>
         </Link>

     <Link to="/blog2">
       <div 
            className="flex justify-between items-center p-4  border hover:border-black  border-gray-200 cursor-pointer hover:bg-black hover:text-white duration-500"
          >
            <div>
              <h2 className="text-lg font-semibold">
              Tips for Developing Successful Mobile Apps Introduction
              </h2>
              <p className=" text-sm">06 July, 2024</p>
            </div>
            <span className=" text-xl">→</span>
          </div>
       </Link>
       
        <Link to="/blog3">
        <div 
            className="flex justify-between items-center p-4 border hover:border-black  border-gray-200 cursor-pointer hover:bg-black hover:text-white duration-500"
          >
            <div>
              <h2 className="text-lg font-semibold">
              Digital Marketing Strategies for 2024 Introduction
              </h2>
              <p className=" text-sm">12 July, 2024</p>
            </div>
            <span className="text-xl">→</span>
          </div>
        </Link>

     <Link to="/blog4">
       <div 
            className="flex justify-between items-center p-4  border hover:border-black  border-gray-200 cursor-pointer hover:bg-black hover:text-white duration-500"
          >
            <div>
              <h2 className="text-lg font-semibold">
              The Basics of Social Media Marketing Introduction
              </h2>
              <p className=" text-sm">14 July, 2024</p>
            </div>
            <span className=" text-xl">→</span>
          </div>
       </Link>

     <Link to="/blog5">
       <div 
            className="flex justify-between items-center p-4  border hover:border-black  border-gray-200 cursor-pointer hover:bg-black hover:text-white duration-500"
          >
            <div>
              <h2 className="text-lg font-semibold">
              App Development Mistakes to Avoid Introduction
              </h2>
              <p className=" text-sm">19 July, 2024</p>
            </div>
            <span className=" text-xl">→</span>
          </div>
       </Link>

     <Link to="/blog6">
       <div 
            className="flex justify-between items-center p-4  border rounded-b-xl hover:rounded-b-xl hover:border-black  border-gray-200 cursor-pointer hover:bg-black hover:text-white duration-500"
          >
            <div>
              <h2 className="text-lg font-semibold">
              Building Your Brand Online Introduction
              </h2>
              <p className=" text-sm">27 July, 2024</p>
            </div>
            <span className=" text-xl">→</span>
          </div>
       </Link>
     </div>
    </div>
   </Layout>
  );
};

export default Blog;
