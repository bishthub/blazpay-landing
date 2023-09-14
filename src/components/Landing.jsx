import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Gradient from "../utilities/Gradient";
import Features from "./Features";
import Description from "./Description";
import WhyUs from "./WhyUs";
import Footer from "./Footer";

const Landing = () => {
  return (
    <>
      <div className="w-full">
        <Navbar />
        <Hero />
        <Gradient />
        <Features />
        <Gradient />
        <Description />
        <Gradient />
        <WhyUs />
        {/* <Gradient /> */}
        <Footer />
      </div>
    </>
  );
};

export default Landing;
