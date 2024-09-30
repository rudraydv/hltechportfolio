import { MdOutlineWifiCalling3 } from "react-icons/md";
import sujeetImg from '../assets/images/CircleImgsujeet.png';
import { Link } from "react-router-dom";



function Enroll() {
  
  return (
    <div className='container mx-auto px-4'>
        <h1 className="text-3xl font-medium my-3">
        Get in touch with me today.
        </h1>
        <p className="text-gray-700 font-medium text-[15px]">
        Get in touch with me today to discuss your needs or inquiries. I’m here to help and look forward to connecting!
        </p>
        
         {/* Call to Action Buttons */}
         <div className="my-8 flex items-center flex-col sm:flex-row space-y-4 md:space-y-0 sm:space-x-5">
            <a
              href="tel:+91-9199025109"
              className="bg-black/85 text-white px-5 py-3 rounded-lg text-[12px] font-semibold hover:bg-gray-800 shadow-xl shadow-pink-100 hover:text-yellow-300 duration-500 hover:scale-110
              sm:hover:rotate-3"
            >
              <MdOutlineWifiCalling3 className="absolute left-1 mt-[3px]"/>
              Let's talk
            </a>
        <div className="flex items-center">
        <Link
              to="/contactus"
              className="bg-white text-black shadow-md px-4 py-2 rounded-lg text-[12px] font-semibold hover:bg-gray-100 flex items-center border-dotted border-[1.4px] border-blue-300 hover:scale-105 sm:hover:rotate-3 duration-500"
            >
              <img
                className="w-6 h-6 rounded-full mr-2"
                src={sujeetImg}
                alt="Consultation"
              />
              Book a Consultation Call
            </Link>
        </div>
          </div>
    </div>
  )
}

export default Enroll;