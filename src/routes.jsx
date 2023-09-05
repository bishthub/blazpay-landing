import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Landing from "./components/Landing";
import AboutUs from "./components/AboutUs/AboutUs";
const BaseRoute = () => (
  <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/about-us" element={<AboutUs />} />
  </Routes>
);

export default BaseRoute;
