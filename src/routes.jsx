import React from 'react';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Landing from './components/Landing';
import AboutUs from './components/AboutUs/AboutUs';
import Claim from './components/ClaimEntryPass/Claim';
import Contact from './components/Contact/Contact';
import ContactMain from './components/Contact/ContactMain';
// import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer } from "react-toastify";

const BaseRoute = () => (
  <>
    <Routes>
      {/* <ToastContainer autoClose={2000} theme="dark" /> */}
      <Route path="/" element={<Landing />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactMain />} />
      <Route path="/claim-entry-pass/zeta" element={<Claim />} />
    </Routes>
  </>
);

export default BaseRoute;
