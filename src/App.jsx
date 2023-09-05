import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./App.css";
// import Navbar from "./components/Navbar";
// import Features from "./components/Features";
// import Hero from "./components/Hero";
// import Gradient from "./utilities/Gradient";
// import Description from "./components/Description";
// import WhyUs from "./components/WhyUs";
// import Footer from "./components/Footer";
// import About from "./components/AboutUs/About";
// import Roadmap from "./components/AboutUs/Roadmap";
// import Team from "./components/AboutUs/Team";
// import TokeNomics from "./components/AboutUs/TokeNomics";
// import AboutUs from "./components/AboutUs/AboutUs";

import { BrowserRouter as Router } from "react-router-dom";
import BaseRoute from "./routes";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Router>
      <BaseRoute />
    </Router>
  );
}

export default App;
