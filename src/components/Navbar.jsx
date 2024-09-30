import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import myImage from '../assets/images/CircleImgsujeet.png';


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);



  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav
      style={{
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('https://framerusercontent.com/images/TrJJuQ7sufSwUY5KvVdTUvR1xI.svg?scale-down-to=1024')",
        backgroundSize: "60%",
      }}
      className="bg-cover bg-center pt-3"
    >
      <div className="container mx-auto md:px-0 px-4 xl:px-7 ">
        <div className="flex justify-between h-16 items-center ">
          {/* Logo */}
          <div className="flex items-center gap-2 h-6">
            <img
              className="h-6 w-6 rounded-full"
              src={myImage}
              alt="Logo"
            />
            <p className="font-bold">Sujeet Kumar Singh</p>
          </div>

          {/* Menu Links for Desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex space-x-2 bg-gray-50 rounded-md p-2">
              <NavLink
                to="/"
                className={({isActive})=> 

                isActive ? 'bg-white shadow-lg rounded-md px-2 py-1 text-xs font-medium' : 'text-gray-800 hover:bg-white px-2 py-1 rounded-md text-xs font-medium hover:shadow-md duration-500'
              }
              >
                Home
              </NavLink>

              <NavLink
                to="/cases"
                className={({isActive})=> 

                isActive ? 'bg-white shadow-lg rounded-md px-2 py-1 text-xs font-medium' : 'text-gray-800 hover:bg-white px-2 py-1 rounded-md text-xs font-medium hover:shadow-md duration-500'
              }
              >
                Cases
              </NavLink>

              <NavLink
                to="/about"
                className={({isActive})=> 

                isActive ? 'bg-white shadow-lg rounded-md px-2 py-1 text-xs font-medium' : 'text-gray-800 hover:bg-white px-2 py-1 rounded-md text-xs font-medium hover:shadow-md duration-500'
              }
              >
                About
              </NavLink>

               <NavLink
                to="/blog"
                className={({isActive})=> 

                isActive ? 'bg-white shadow-lg rounded-md px-2 py-1 text-xs font-medium' : 'text-gray-800 hover:bg-white px-2 py-1 rounded-md text-xs font-medium hover:shadow-md duration-500'
              }
              >
                Blog
              </NavLink>


              <NavLink
                to="/contactus"
                className={({isActive})=> 

                isActive ? 'bg-white shadow-lg rounded-md px-2 py-1 text-xs font-medium' : 'text-gray-800 hover:bg-white px-2 py-1 rounded-md text-xs font-medium hover:shadow-md duration-500'
              }
              >
                Contact
              </NavLink>

            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon changes based on menu state */}
              {isOpen ? (
                // Close Icon
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger Icon
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLink
                to="/"
                className={({isActive})=> 

                isActive ? 'text-base font-medium px-3 py-2' : 'text-gray-800 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium'
              }
              >
                Home
              </NavLink>

              <NavLink
                to="/cases"
                className={({isActive})=> 

                isActive ? 'text-base font-medium px-3 py-2' : 'text-gray-800 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium'
              }
              >
                Cases
              </NavLink>

              <NavLink
                to="/about"
                className={({isActive})=> 

                isActive ? 'text-base font-medium px-3 py-2' : 'text-gray-800 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium'
              }
              >
                About
              </NavLink>

              <NavLink
                to="/blog"
                className={({isActive})=> 

                isActive ? 'text-base font-medium px-3 py-2' : 'text-gray-800 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium'
              }
              >
                Blog
              </NavLink>


              <NavLink
                to="/contactus"
                className={({isActive})=> 

                isActive ? 'text-base font-medium px-3 py-2' : 'text-gray-800 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium'
              }
              >
                Contact
              </NavLink>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
