import React from 'react';
import Navbar from '../Navbar';
import ClaimHero from './ClaimHero';
import Gradient from '../../utilities/Gradient';
import Footer from '../Footer';
import Zeta from './Zeta';

const Claim = () => {
  return (
    <div className="w-full bg-black">
      <Navbar />
      <ClaimHero />
      <Gradient />
      <Zeta />
      <Footer />
    </div>
  );
};

export default Claim;
