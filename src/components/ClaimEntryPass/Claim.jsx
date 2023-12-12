import React from 'react';
import Navbar from '../Navbar';
import ClaimHero from './ClaimHero';
import Gradient from '../../utilities/Gradient';
import ClaimZeta from './ClaimZeta';
import Footer from '../Footer';

const Claim = () => {
  return (
    <div className="w-full bg-black">
      <Navbar />
      <ClaimHero />
      <Gradient />
      <ClaimZeta />
      <Footer />
    </div>
  );
};

export default Claim;
