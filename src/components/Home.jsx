import React from "react";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Hobbies from "./Hobbies";
import Moti from "./Moti";
import NavBar from "./NavBar";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Top from "./Top";
import Skill from "./Skill";
import MnavBar from "./mobile/MnavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      {/* Only For Mobile */}
      <div>
        <MnavBar />
      </div>
      {/* --- */}
      <div className="container-fuild">
        <Top />
        <div className="w-[90%] md:w-[70%] mx-auto ">
          <About />
        </div>
        <Skill />
        <div className="w-[90%] md:w-[70%] mx-auto ">
          <Portfolio />
        </div>
        <Moti />
        <div className="w-[90%] md:w-[70%] mx-auto ">
          <Services />
        </div>
        <Hobbies />
        <div className="w-[90%] md:w-[70%] mx-auto">
          <Gallery />
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
