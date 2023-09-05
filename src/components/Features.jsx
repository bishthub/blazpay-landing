import React from "react";
import EthIcon from "../assets/image 129.svg";
import PosImage from "../assets/image 133.svg";
import bnbImage from "../assets/image 132.svg";
import maticImage from "../assets/image 130.svg";
import circle from "../assets/Group 4.svg";
import merchantGroup from "../assets/Group 5.svg";

const Features = () => {
  return (
    <div className="mt-8 md:bg-feature-back bg-cover">
      <div className="  md:mx-auto lg:max-w-7xl md font-bvmp ">
        <div className="p-8 flex flex-col md:flex-row justify-center space-y-4 md:space-x-4 md:space-y-0">
          {/* First Red Card */}
          <div
            style={{ backgroundColor: "#FF3503" }}
            className="shadow-md min-w-[280px] rounded-md pt-9 px-5 sm:w-full md:w-1/4 flex flex-col justify-between"
            data-aos="fade-right"
            data-aos-duration="600"
          >
            <div className="space-y-4">
              <div className="text-4xl font-semibold text-white">
                Personalised Usernames
              </div>
              <div className="text-white font text-sm">
                Forget sharing the long string of characters. Just share your
                Username to receive payments
              </div>
            </div>
            <div
              style={{ backgroundColor: "#D9D9D9" }}
              className="p-5 rounded-tl-md rounded-tr-md space-y-6 mt-4"
            >
              <div className="flex justify-center items-end">
                <div className="bg-gradient-to-r from-[#FF3503] to-yellow-500 rounded-3xl py-1 px-5 max-w-fit">
                  user@blazpay
                </div>
              </div>
              <div className="bg-white rounded p-2 font-mono text-gray-700 flex items-center space-x-3 w-full">
                <div className="w-6 h-6">
                  <img src={EthIcon} alt="Eth Icon" className="w-full h-full" />
                </div>
                <div>0x231e45et05cf45</div>
              </div>
              <div className="bg-white rounded p-2 font-mono text-gray-700 flex items-center space-x-3 w-full">
                <div className="w-6 h-6">
                  <img
                    src={maticImage}
                    alt="Eth Icon"
                    className="w-full h-full"
                  />
                </div>
                <div>0x231e45et05cf45</div>
              </div>
              <div className="bg-white rounded p-2 font-mono text-gray-700 flex items-center space-x-3 w-full">
                <div className="w-6 h-6">
                  <img
                    src={bnbImage}
                    alt="Eth Icon"
                    className="w-full h-full"
                  />
                </div>
                <div>0x231e45et05cf45</div>
              </div>
              <div className="bg-white rounded p-2 font-mono text-gray-700 flex items-center space-x-3 w-full">
                <div className="w-6 h-6">
                  <img src={EthIcon} alt="Eth Icon" className="w-full h-full" />
                </div>
                <div>0x231e45et05cf45</div>
              </div>
            </div>
          </div>
          {/* Gray Cards Container */}
          <div className="flex flex-col space-y-4 sm:w-full md:w-1/3">
            {/* First Gray Card */}
            <div
              style={{ backgroundColor: "#525B61" }}
              className="shadow-md rounded-md flex flex-col min-w-[280px] sm:w-full"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <div className="flex justify-end pr-4 pt-2">
                <div className="text-3xl font-semibold text-white">
                  Merchant API
                </div>
              </div>
              <div className="flex flex-row items-center mt-4">
                <div>
                  <img src={merchantGroup} />
                </div>
                <div className="flex flex-col justify-start items-end w-1/2 pl-3 pr-3 pt-1">
                  <div className="text-white text-sm pb-3">
                    Blazpay provides a seamless integration with merchant APIs,
                    making payment processing effortless for businesses.
                  </div>
                </div>
              </div>
            </div>
            {/* Second Gray Card */}
            <div
              style={{ backgroundColor: "#E1E1E1" }}
              className="shadow-md rounded-md p-3 min-w-[280px] sm:w-full space-y-4"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="flex flex-row md:flex-row space-y-4 md:space-y-1 md:space-x-0 items-center">
                <div className="space-y-2 md:space-y-1">
                  <div className="text-3xl font-semibold text-black">
                    POS Machines and cards
                  </div>
                  <div className="text-sm text-black">
                    For businesses that operate offline, Blazpay offers POS
                    Point of Sale machines and cards.
                  </div>
                </div>
                <div className="w-2/3 flex-shrink-0">
                  <img
                    src={PosImage}
                    alt="POS Graphic"
                    className="w-auto h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Second Red Card */}
          <div
            style={{ backgroundColor: "#FF3503" }}
            className="shadow-md rounded-md p-4 min-w-[280px] sm:w-full md:w-1/4 space-y-4 flex justify-center items-center"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="space-y-4">
              <div className="text-4xl font-semibold text-white">
                Easy Payments
              </div>
              <div className="text-white text-sm">
                Pay your bills directly with cryptocurrency
              </div>
              <div>
                <img src={circle} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
