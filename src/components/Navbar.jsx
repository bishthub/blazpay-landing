import React, { useState } from 'react';
import Gradient from '../utilities/Gradient';
import logo from '../assets/latestlogo.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [navbar, setNavbar] = useState();
  return (
    <>
      <nav className="w-full mt-4 shadow " data-aos="fade-down">
        <div className="justify-between px-4 mx-4 md:mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <div className="flex items-center justify-center">
                <img src={logo} alt="" className=" w-40" />

                {/* <a href="#">
                  <h2 className="text-2xl ">
                    <span className="font-bold">laz</span>Pay
                  </h2>
                </a> */}
              </div>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-white hover:text-blue-600">
                  <a
                    href="/"
                    className="text-white transition duration-300 group"
                  >
                    Home
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gradient-to-r from-[#FF3503] to-yellow-500"></span>
                  </a>
                </li>
                <li className="text-white hover:text-gray-100">
                  <Link
                    to="/contact-us"
                    className="text-white transition duration-300 group"
                  >
                    Contact Us
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gradient-to-r from-[#FF3503] to-yellow-500"></span>
                  </Link>
                </li>
                <li className="text-white ">
                  <a
                    href="/#blogs"
                    className="text-white transition duration-300 group"
                  >
                    Blogs
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gradient-to-r from-[#FF3503] to-yellow-500"></span>
                  </a>
                </li>
                <li className="text-white ">
                  <Link
                    to="/about-us"
                    className="text-white transition duration-300 group"
                  >
                    About Us
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gradient-to-r from-[#FF3503] to-yellow-500"></span>
                  </Link>
                </li>
                <li className="transition ease-linear hover:scale-[1.02]">
                  <a
                    href="/"
                    className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 shadow-2xl rounded-2xl group"
                  >
                    <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-[#be8f32] rounded-full blur-md ease"></span>
                    <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                      <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-[#eb7e3f] rounded-full blur-md"></span>
                      <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-[#F3B53D] rounded-full blur-md"></span>
                    </span>
                    <Link to="/claim-entry-pass/zeta" className="w-full">
                      <span className="relative text-white">
                        Claim Entry Pass
                      </span>
                    </Link>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
