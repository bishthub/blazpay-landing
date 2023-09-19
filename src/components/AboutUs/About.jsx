// import React from "react";
// import ellipse from "../../assets/ellipsenew.png";

// const About = () => {
//   return (
//     <>
//       <div
//         className="mt-2 bg-cover md:bg-pattern-2"
//         style={{
//           width: "100%",
//           display: "flex",
//           flexDirection: "column",
//           // Center content horizontally
//           padding: "4rem",
//           height: "100vh",
//           justifyContent: "center",
//         }}
//       >
//         <h1 style={{ fontSize: "5rem", fontWeight: "600" }}>ABOUT US</h1>

//         <div
//           className="container"
//           //   className="position-relative bg-gradient-to-t from-[#110C09] to-[#8E8C8C]/25 px-8 mb-20"
//           style={{
//             width: "100%",
//             maxWidth: "100%", // Limit container width for better responsiveness
//             border: "2px solid orange",
//             borderRadius: "1rem",
//             padding: "2.5rem",
//             position: "relative",
//             marginBottom: "1rem",
//             boxSizing: "border-box",
//             zIndex: "2",
//             marginTop: "3rem",
//             // Add the blur effect
//             backdropFilter: "blur(9px)",
//           }}
//         >
//           <img
//             style={{
//               width: "5rem",
//               position: "absolute",
//               right: "1rem",
//               bottom: "7.5rem", // Adjust the position
//               // Adjust the transform
//               // Send the image behind the container
//               zIndex: "1",
//               backdropFilter: "blur(9px)",
//             }}
//             src={ellipse}
//             alt="Ellipse"
//           />
//           <p>
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//             Consectetur sit sint porro odio non sequi expedita dolores.
//             Temporibus blanditiis ducimus, iusto deleniti provident tempora
//             sapiente ipsam aspernatur nam impedit dolorem mollitia esse debitis
//             assumenda odio quo voluptas maiores quaerat fugiat! Fugit non vel
//             quisquam ducimus ratione quos hic maiores delectus.
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default About;

import React from "react";
import ellipse from "../../assets/ellipsenew.png";

const About = () => {
  return (
    <div
      className="flex flex-col justify-center w-full p-8 mt-2 bg-cover md:p-20 bg-pattern-2 min-h-height md:h-80vh "
      // style={{ height: "80vh" }}
    >
      <h1
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="mb-6 text-3xl font-semibold top-5 md:text-5xl md:mb-8"
      >
        ABOUT US
      </h1>

      <div
        className="container relative p-8 mx-auto bg-opacity-25 border-2 border-orange-500 rounded-lg md:p-16 backdrop-blur-md"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="400"
      >
        {/* <img
          className="hidden md:block absolute w-20 right-4 bottom-[10.5rem] z-0 backdrop-blur-md"
          src={ellipse}
          alt="Ellipse"
        /> */}
        <p className="text-white-700 md:text-xl">
          Blazpay stands as an advanced online platform that seamlessly converts
          traditional fiat currencies like USD, Euro, and INR into
          cryptocurrencies and back. Beyond currency conversion, it offers
          secure storage, trading, real-time market data, and transaction
          history tracking. Blazpay's crypto gateway aids enterprises in
          accepting diverse cryptocurrencies, with features like the proprietary
          token "BLAZ," NFT rewards, merchant payment APIs, and wallet swap
          integration. It simplifies cryptocurrency onboarding, safeguarding
          digital assets, and holds the potential to revolutionize the global
          economy through secure, cost-effective, and inclusive transactions,
          promising a pivotal role in the evolving financial landscape.
        </p>
      </div>
    </div>
  );
};

export default About;
