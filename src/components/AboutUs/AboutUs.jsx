import React from "react";
import Navbar from "../Navbar";
import About from "./About";
import Roadmap from "./Roadmap";
import Team from "./Team";
import TokeNomics from "./TokeNomics";
import Footer from "../Footer";
import Gradient from "../../utilities/Gradient";
import Faq from "./Faq";

const AboutUs = () => {
  return (
    <div className="w-full">
      <Navbar />
      <About />
      <Gradient />
      <Roadmap />
      <Gradient />
      <Team />
      <Gradient />
      <TokeNomics />
      <Faq />
      <Footer />
    </div>
  );
};

export default AboutUs;
