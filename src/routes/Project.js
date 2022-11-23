import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AlterHeroImg from "../components/AlterHeroImg";
import Work from "../components/Work";

const Project = () => {
  return (
    <div>
      <Navbar />
      <AlterHeroImg heading="PROJETOS." text="Alguns projetos recentes" />
      <Work />
      <Footer />
    </div>
  );
};

export default Project;
