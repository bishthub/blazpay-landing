import React from 'react';
import back1 from '../assets/blur.png';
import mobile1 from '../assets/mobile_4.png';
import mobile2 from '../assets/mobile_5.png';
import laptop from '../assets/laptop.png';
const Hero = () => {
  return (
    <>
      <div className='h-full bg-cover md:bg-hero-pattern md:h-80vh py-10'>
        <div
          className='flex flex-col justify-between gap-8 px-4 md:gap-0 md:flex-row md:mx-auto lg:max-w-7xl md:flex md:px-8 font-bvmp '
          style={{ overflow: 'hidden' }}
        >
          <div
            className=' rounded-3xl md:w-[55%] overflow-hidden bg-[#8E8C8C]/25 '
            data-aos='fade-right'
            data-aos-duration='1000'
            data-aos-easing='ease-in'
          >
            <div className=''>
              <div className=' bg-gradient-to-r from-[#FF3503] to-yellow-500 mx-auto px-8 rounded-lg  mb-8 py-6 md:py-4'>
                <h1 className='text-xl font-bold md:text-6xl md:p-6'>
                  Crypto Payments made easy
                </h1>
                <p className='text-xs font-thin md:text-lg md:px-6'>
                  Blazpay is a revolutionary and comprehensive crypto financial
                  system that has redefined the way individuals and businesses
                  interact with the world of cryptocurrencies. With its wide
                  array of features and services, Blazpay offers a seamless and
                  all-encompassing solution for anyone looking to navigate the
                  complexities of the crypto landscape.
                </p>
              </div>
            </div>
            <div className='p-10 bg-white '>
              <div className='bg flex justify-center bg-black mx-auto max-w-md rounded-lg p-2 cursor-pointer transition ease-linear hover:scale-[1.02] drop-shadow-md'>
                <a href='#' className='text-center'>
                  Get Started
                </a>
              </div>
            </div>
          </div>
          <div
            className='  rounded-tl-2xl rounded-bl-2xl rounded-br-[50%] md:w-[42%]  md:mt-0 bg-gradient-to-t from-[#110C09]/50 to-[#8E8C8C]/25  '
            data-aos='fade-left'
            data-aos-duration='1000'
            data-aos-easing='ease-in-sine'
          >
            <div className='relative flex items-center justify-center w-full h-full'>
              {/* <img
                src={mobile1}
                alt="mobile1"
                className="scale-[0.7] md:scale-[1]"
              />
              <img
                src={mobile2}
                alt="mobile2"
                className="absolute top-48 left-11 md:left-48 scale-[0.7] md:scale-[1]"
              /> */}
              <img className='mx-auto my-auto ' src={laptop} alt='' />
              {/* <img className="absolute" src={black1} alt="" /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
