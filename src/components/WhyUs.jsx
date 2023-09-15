import React from "react";
import locImage from "../assets/Group 10.svg";
import clockImage from "../assets/Group 14.svg";
import userIcon from "../assets/Group 15.svg";
import worldIcon from "../assets/Group 17.svg";
import bg from "../assets/whyusbg.png";

const WhyUs = () => {
  return (
    <>
      <div
        className="bg-why-us bg-cover md:h-screen flex items-center justify-center"
        style={{ zIndex: "9999" }}
      >
        <div
          className="p-2 flex flex-col max-w-7xl mx-auto md:flex-row justify-center space-y-4 md:space-x-5 md:space-y-0 font-bvmp"
          style={{ zIndex: "9999" }}
        >
          <div className="order-1 w-full md:w-1/2 p-4">
            <div
              style={{
                background:
                  "linear-gradient(180deg, #4A4A4A 0%, rgba(74, 74, 74, 0) 100%)",
              }}
              className="rounded-3xl md:w-[80%] overflow-hidden bg-[#8E8C8C]/25 mb-4 p-4 shadow-lg"
              data-aos="fade-down"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              <div className="flex">
                <div>
                  <img src={locImage} className="w-6 pt-1" />
                </div>
                <div className="font-bold text-2xl mb-2 ml-3">
                  Enhanced Security
                </div>
              </div>
              <div>
                {" "}
                The majority of digital assets are stored in a highly secure
                offline storage system.
              </div>
            </div>
            <div
              style={{
                background:
                  "linear-gradient(180deg, #4A4A4A 0%, rgba(74, 74, 74, 0) 100%)",
              }}
              className="rounded-3xl md:w-[80%] overflow-hidden bg-[#8E8C8C]/25 mb-4 p-4 shadow-lg"
              data-aos="fade-down"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              <div className="flex">
                <div>
                  <img src={clockImage} className="w-6 pt-1" />
                </div>
                <div className="font-bold text-2xl mb-2 ml-3">
                  Round the clock Support
                </div>
              </div>
              <div>
                {" "}
                Our team provides 24/7 support, ensuring immediate solutions to
                any issues.
              </div>
            </div>
            <div
              style={{
                background:
                  "linear-gradient(180deg, #4A4A4A 0%, rgba(74, 74, 74, 0) 100%)",
              }}
              className="rounded-3xl md:w-[80%] overflow-hidden bg-[#8E8C8C]/25 mb-4 p-4 shadow-lg"
              data-aos="fade-down"
              data-aos-delay="700"
              data-aos-duration="1000"
            >
              <div className="flex">
                <div>
                  <img src={userIcon} className="w-6 pt-1" />
                </div>
                <div className="font-bold text-2xl mb-2 ml-3">
                  User Friendly Interface
                </div>
              </div>
              <div>
                {" "}
                We offer an easy-to-use interface for both users and merchants,
                ensuring a smooth experience.
              </div>
            </div>
            <div
              style={{
                background:
                  "linear-gradient(180deg, #4A4A4A 0%, rgba(74, 74, 74, 0) 100%)",
              }}
              className="rounded-3xl md:w-[80%] overflow-hidden bg-[#8E8C8C]/25 mb-4 p-4 shadow-lg"
              data-aos="fade-down"
              data-aos-delay="900"
              data-aos-duration="1000"
            >
              <div className="flex">
                <div>
                  <img src={worldIcon} className="w-6 pt-1" />
                </div>
                <div className="font-bold text-2xl mb-2 ml-3">
                  On-ramp and off-ramp solutions
                </div>
              </div>
              <div>
                {" "}
                Providing the fastest and safest conversion between
                cryptocurrencies and fiat currencies
              </div>
            </div>
          </div>
          <div className="order-0 md:order-2 w-full md:w-1/3 p-4">
            <div className="font-bold text-5xl mb-20" data-aos="fade-in">
              Why us?
            </div>
            <div className="pb-4" data-aos="fade-in" data-aos-delay="100">
              Blazpay's emergence as a crypto payment gateway and end-to-end
              financial solution provider marks a significant milestone in the
              evolution of the fintech sector. By bridging the gap between
              traditional finance and the cryptocurrency world.
            </div>
            <div className="pb-5" data-aos="fade-in" data-aos-delay="200">
              Blazpay propels the industry towards greater accessibility,
              security, and usability. As it continues to innovate and refine
              its offerings, Blazpay is poised to play a pivotal role in shaping
              the future of finance.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
