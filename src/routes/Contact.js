import React from "react";
import AlterHeroImg from "../components/AlterHeroImg";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <AlterHeroImg
        heading="CONTATO."
        text="Entre em contato para trabalharmos juntos! Será um grande prazer"
      />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
