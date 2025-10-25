import React from 'react';
import background from '../../assets/background.jpg'; 
import Navbar from './Navbar';
const Section1 = () => {
  return (
    <div
      className="h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
     <Navbar></Navbar> 
    </div>
  );
};

export default Section1;
