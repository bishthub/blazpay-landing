import React from "react";
import Navbar from "../Navbar";
import Contact from "./Contact";

const ContactMain = () => {
  return (
    <div className="h-screen bg-center bg-cover md:h-full bg-pattern-2">
      <Navbar />
      <Contact />
    </div>
  );
};

export default ContactMain;
