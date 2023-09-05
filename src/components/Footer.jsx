import React from "react";
import logoImage from "../assets/LOGO_IMG.svg";
import Twitter from "../assets/twitter_logo.svg";
import LinkedIn from "../assets/linkedin_logo.svg";
import Discord from "../assets/discord.svg";
import Telegram from "../assets/telegram.svg";
import Instagram from "../assets/insta.svg";

const Footer = () => {
  return (
    <div className="flex">
      <div
        className={`bg-gradient-to-r from-[#FF3503] to-yellow-500 shadow p-4 w-full`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mx-auto flex flex-col items-center justify-center p-4 mb-4 md:mb-0 md:ml-10">
              <div className="md:w-[50%] mb-4 flex justify-center">
                <img src={logoImage} alt="Logo" className="w-[60%]" />
              </div>
              <div className="flex space-x-3 md:space-x-5 mb-4 ml-5 md:ml-0">
                <div className="bg-gray-200 p-4 rounded-full">
                  <img src={Twitter} alt="Twitter" className="h-auto w-auto" />
                </div>
                <div className="bg-gray-200 p-4 rounded-full">
                  <img src={LinkedIn} alt="Telegram" className="h-5 w-5" />
                </div>
                <div className="bg-gray-200 p-4 rounded-full">
                  <img src={Discord} alt="Discord" className="h-5 w-5" />
                </div>
                <div className="bg-gray-200 p-4 rounded-full">
                  <img src={Telegram} alt="Instagram" className="h-5 w-5" />
                </div>
                <div className="bg-gray-200 p-4 rounded-full">
                  <img src={Instagram} alt="LinkedIn" className="h-5 w-5" />
                </div>
              </div>
              <div className="flex md:w-[65%] justify-center text-start">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </div>
            </div>
            <div className="flex-1 flex flex-row space-x-1 justify-center items-center">
              <div className="w-1/2 flex flex-col p-4 space-y-5 justify-center items-center">
                <div>Menu</div>
                <div>Menu</div>
                <div>Menu</div>
                <div>Menu</div>
              </div>
              <div className="w-1/2 flex flex-col p-4 space-y-5 justify-center items-center">
                <div>Menu</div>
                <div>Menu</div>
                <div>Menu</div>
                <div>Menu</div>
              </div>
              <div className="w-1/2 flex flex-col p-4 space-y-5 justify-center items-center">
                <div>Menu</div>
                <div>Menu</div>
                <div>Menu</div>
                <div>Menu</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
