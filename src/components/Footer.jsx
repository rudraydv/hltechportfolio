import React,{useState} from 'react';
import { FaYoutube, FaInstagram, FaLinkedin, FaFacebook} from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from 'react-icons/fa';
import { NavLink } from "react-router-dom";



const Footer = () => {
    let time  = new Date().toLocaleTimeString()

    const [ctime,setTime] = useState(time)
    const UpdateTime=()=>{
      time =  new Date().toLocaleTimeString()
      setTime(time)
    }
    setInterval(UpdateTime);
  return (
   <footer className="mx-4">
     <div className="container mx-auto px-4 bg-black text-white py-12 sm:my-10 rounded-2xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Section: Name and Fun Statement */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Sujeet Kumar Singh</h2>
          <p>Let's connect and disscuss more about your project</p>
          
        </div>
        
        {/* Middle Section: Social Media Links */}
        <div className="space-y-4">
          <h3 className="font-bold text-lg">Connect With Me 👋</h3>
          <div className="flex space-x-4 text-xl">

          <a href="https://www.linkedin.com/in/sujeet-kumar-singh-740b011a1/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500">
              <FaLinkedin />
            </a>

            <a href="https://www.instagram.com/sujeetkumarsinghofficial/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500">
              <FaInstagram />
            </a>

            <a  href="https://wa.me/+919199025109"  target="_blank" rel="noopener noreferrer" className="hover:text-purple-500">
              <FaWhatsapp/>
            </a>

            <a href="https://www.facebook.com/ersujeetkumarhl" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500">
              <FaFacebook />
            </a>
           
          
            <a href="/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500">
              <FaXTwitter />
            </a>
          
          </div>
        </div>
        
        {/* Right Section: Navigation Links */}
        <div className="space-y-4">
          <h3 className="font-bold text-lg">Explore</h3>
          <ul className="space-y-2">
            <li>
              <NavLink to="/" className="hover:text-purple-500">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-purple-500">About</NavLink>
            </li>
            <li>
              <NavLink to="/cases" className="hover:text-purple-500">Cases</NavLink>
            </li>
            <li>
              <NavLink to="/blog" className="hover:text-purple-500">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/contactus" className="hover:text-purple-500">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="container mx-auto px-4 mt-12 border-t border-gray-700 pt-4 flex justify-between items-center">
        <p>Sujeet ©2024</p>
       <div className="flex items-center gap-2">
       <p>Bhopāl, IN</p>
       {ctime}
       </div>
      </div>
    </div>
   </footer>
  );
};

export default Footer;
