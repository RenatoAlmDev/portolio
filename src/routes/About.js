import React from "react";
import AboutContent from "../components/AboutContent";
import AlterHeroImg from "../components/AlterHeroImg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <AlterHeroImg
        heading="SOBRE."
        text="Front-end Dev em transição de carreira, com estudo através das plataformas Alura e OneBit Code."
      />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
