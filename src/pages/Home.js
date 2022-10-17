import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import ContactUs from "../components/ContactUs";
import Achievments from "../components/Achievments";

// home screen
const Home = () => {
  return (
    // components for the home screen
    <>
      <Hero />
      <Features />
      <Achievments />
      <ContactUs />
    </>
  );
};

export default Home;
