import React from "react";
import logoImage from "../assets/LOGO_IMG.svg";
import Twitter from "../assets/twitter_logo.svg";
import LinkedIn from "../assets/linkedin_logo.svg";
import Discord from "../assets/discord.svg";
import Telegram from "../assets/telegram.svg";
import Medium from "../assets/medium.svg";

const Footer = () => {
  // Define the social media URLs
  const twitterUrl = "https://twitter.com/BlazpayOfficial";
  const linkedInUrl = "https://www.linkedin.com/in/YourLinkedInProfile";
  const discordUrl = "https://discord.gg/kfyWv9hSjm";
  const telegramUrl = "https://t.me/Blazpay";
  const instagramUrl = "https://www.instagram.com/YourInstagramAccount";
  const mediumUrl = "https://medium.com/@blazpay";

  return (
    <div className="flex" style={{ zIndex: "9999" }}>
      <div
        className={`bg-gradient-to-r from-[#FF3503] to-yellow-500 shadow p-4 w-full`}
        style={{ zIndex: "9999" }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col items-center justify-center w-full p-4 mx-auto mb-4">
              <div className="md:w-[50%] mb-4 flex justify-center">
                <img src={logoImage} alt="Logo" className="w-[60%]" />
              </div>
              <div className="flex mb-4 ml-5 space-x-3 md:space-x-5 md:ml-0">
                {/* Add anchor tags with href and target="_blank" */}
                <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
                  <div className="p-4 bg-gray-200 rounded-full">
                    <img src={Twitter} alt="Twitter" className="w-5 h-5" />
                  </div>
                </a>
                <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
                  <div className="p-4 bg-gray-200 rounded-full">
                    <img src={LinkedIn} alt="Telegram" className="w-5 h-5" />
                  </div>
                </a>
                <a href={discordUrl} target="_blank" rel="noopener noreferrer">
                  <div className="p-4 bg-gray-200 rounded-full">
                    <img src={Discord} alt="Discord" className="w-5 h-5" />
                  </div>
                </a>
                <a href={telegramUrl} target="_blank" rel="noopener noreferrer">
                  <div className="p-4 bg-gray-200 rounded-full">
                    <img src={Telegram} alt="Medium" className="w-5 h-5" />
                  </div>
                </a>
                <a href={mediumUrl} target="_blank" rel="noopener noreferrer">
                  <div className="p-4 bg-gray-200 rounded-full">
                    <img src={Medium} alt="LinkedIn" className="w-5 h-5" />
                  </div>
                </a>
              </div>
              <div className="flex md:w-[65%] justify-center text-start">
                Blazpay emerges as an all-encompassing cryptocurrency platform,
                offering an extensive suite of services for overseeing
                cryptocurrency transactions and investments.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
