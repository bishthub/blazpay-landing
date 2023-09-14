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
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col items-center justify-center w-full p-4 mx-auto mb-4">
              <div className="md:w-[50%] mb-4 flex justify-center">
                <img src={logoImage} alt="Logo" className="w-[60%]" />
              </div>
              <div className="flex mb-4 ml-5 space-x-3 md:space-x-5 md:ml-0">
                <div className="p-4 bg-gray-200 rounded-full">
                  <img src={Twitter} alt="Twitter" className="w-auto h-auto" />
                </div>
                <div className="p-4 bg-gray-200 rounded-full">
                  <img src={LinkedIn} alt="Telegram" className="w-5 h-5" />
                </div>
                <div className="p-4 bg-gray-200 rounded-full">
                  <img src={Discord} alt="Discord" className="w-5 h-5" />
                </div>
                <div className="p-4 bg-gray-200 rounded-full">
                  <img src={Telegram} alt="Instagram" className="w-5 h-5" />
                </div>
                <div className="p-4 bg-gray-200 rounded-full">
                  <img src={Instagram} alt="LinkedIn" className="w-5 h-5" />
                </div>
              </div>
              <div className="flex md:w-[65%] justify-center text-start">
                Blazpay emerges as an all-encompassing cryptocurrency platform,
                offering an extensive suite of services for overseeing
                cryptocurrency transactions and investments.
              </div>
            </div>
            {/* <div className="flex flex-row items-center justify-center flex-1 space-x-1">
              <div className="flex flex-col items-center justify-center w-1/2 p-4 space-y-5">
                <div>Menu</div>
                <div>Menu</div>
                <div>Menu</div>
                <div>Menu</div>
              </div>
              <div className="flex flex-col items-center justify-center w-1/2 p-4 space-y-5">
                <div>Menu</div>
                <div>Menu</div>
                <div>Menu</div>
                <div>Menu</div>
              </div>
              <div className="flex flex-col items-center justify-center w-1/2 p-4 space-y-5">
                <div>Menu</div>
                <div>Menu</div>
                <div>Menu</div>
                <div>Menu</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
