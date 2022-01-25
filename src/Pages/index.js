import React, { useState } from "react";
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import HeroSection from "../Components/HeroSection/HeroSection";
import InfoSection from '../Components/InfoSection'
import Services from '../Components/Services'


import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../Components/InfoSection/Data";



const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <HeroSection/>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <Services id='services'/>
    </>
  );
};

export default Home;
