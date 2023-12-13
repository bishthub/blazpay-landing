import React from 'react';
import Navbar from '../Navbar';
import ClaimHero from './ClaimHero';
import Gradient from '../../utilities/Gradient';
import ClaimMint from './ClaimMint';
import ClaimZeta from './ClaimZeta';
import Footer from '../Footer';

const Claim = () => {
  return (
    <div className="w-full bg-black">
      <Navbar />
      <ClaimHero />
      <Gradient />
      <ClaimMint />
      <Footer />
    </div>
  );
};

export default Claim;
