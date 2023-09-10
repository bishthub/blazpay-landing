import React from "react";

const Faq = () => {
  return (
    <div className="flex flex-col justify-center w-full gap-3 p-8 mt-2 bg-cover md:p-20 bg-pattern-2 md:gap-10 ">
      <h1
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="400"
        className="mb-6 text-3xl font-semibold top-5 md:text-5xl md:mb-8"
      >
        FAQS
      </h1>
      <div className="flex flex-col items-center justify-center w-3/4 gap-3 m-auto md:gap-8">
        <div className="flex flex-col items-center justify-center gap-3 md:flex-row md:gap-10 ">
          <div
            className="flex flex-col w-full p-2 rounded-lg bg-gradient-to-br from-gray-800 via-gray-500 to-transparent md:p-8 backdrop-blur-md "
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <h1 className="text-base md:text-xl">What is Lorem Ipsum?</h1>
            <p className="text-xs md:text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div
            className="flex flex-col w-full p-2 rounded-lg bg-gradient-to-br from-gray-800 via-gray-500 to-transparent md:p-8 backdrop-blur-md"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <h1 className="text-base md:text-xl">What is Lorem Ipsum?</h1>
            <p className="text-xs md:text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 md:flex-row md:gap-10">
          <div
            className="flex flex-col w-full p-2 rounded-lg bg-gradient-to-br from-gray-800 via-gray-500 to-transparent md:p-8 backdrop-blur-md"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <h1 className="text-base md:text-xl">What is Lorem Ipsum?</h1>
            <p className="text-xs md:text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div
            className="flex flex-col w-full p-2 rounded-lg bg-gradient-to-br from-gray-800 via-gray-500 to-transparent md:p-8 backdrop-blur-md "
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <h1 className="text-base md:text-xl">What is Lorem Ipsum?</h1>
            <p className="text-xs md:text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <div className="p-2 m-auto font-semibold border-2 border-orange-700 rounded-lg backdrop-blur-lg">
          <h1>Get Support</h1>
        </div>
      </div>
    </div>
  );
};

export default Faq;
