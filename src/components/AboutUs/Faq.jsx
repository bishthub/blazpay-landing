import React from "react";

const Faq = () => {
  return (
    <div className="flex flex-col justify-center w-full items-center gap-3 p-8  bg-cover md:p-20 bg-pattern-2 md:gap-10 md:h-screen ">
      <h1
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="400"
        className=" text-3xl font-semibold md:text-5xl "
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
            <h1 className="text-base md:text-xl">
              How Blazpay is different from other gateways.?
            </h1>
            <p className="text-xs md:text-base">
              Blazpay stands out in the crypto gateway market with robust
              security, versatile features, and all-in-one convenience. It
              ensures user fund safety, offers an Exchange, swap, and NFT
              marketplace, supports multiple cryptocurrencies, and provides
              seamless integration, prompt settlements, and detailed analytics.
              With testnet options, it's a secure, flexible, and efficient
              choice for crypto gateway needs.
            </p>
          </div>
          <div
            className="flex flex-col w-full p-2 rounded-lg bg-gradient-to-br from-gray-800 via-gray-500 to-transparent md:p-8 backdrop-blur-md"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <h1 className="text-base md:text-xl">
              How do we plan to implement KYC?
            </h1>
            <p className="text-xs md:text-base">
              Our KYC implementation will roll out gradually, beginning with the
              testnet phase where users will submit basic documents for
              verification. However, once the mainnet is live, an extensive KYC
              process will be enforced, involving video verification, government
              ID, and banking documents. This approach enhances security and
              compliance on the platform.
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
            <h1 className="text-base md:text-xl">
              What is Testnet V1 and testnet V2?
            </h1>
            <p className="text-xs md:text-base">
              Blazpay provides two testnet environments, Testnet V1 and Testnet
              V2, catering to users and merchants. These testnets ensure secure,
              reliable, and user-friendly payment integration, allowing thorough
              application testing before launching, contributing to a seamless
              payment experience.
            </p>
          </div>
          <div
            className="flex flex-col w-full p-2 rounded-lg bg-gradient-to-br from-gray-800 via-gray-500 to-transparent md:p-8 backdrop-blur-md "
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <h1 className="text-base md:text-xl">
              What is merchant account Testnet V2?
            </h1>
            <p className="text-xs md:text-base">
              Blazpay's Merchant Account Testnet V2 provides a secure sandbox
              for businesses and developers to test and integrate applications
              with virtual currency transactions. KYC is required for security,
              and users get a testnet pass for access. It closely resembles the
              live environment, facilitating reliable and comprehensive testing
              of payment gateway operations, including error handling and
              dispute resolution.
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
