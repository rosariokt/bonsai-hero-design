
import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import Products from "../components/Products";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import MapLocation from "../components/MapLocation";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <>
      <Hero />
      <About />
      <WhyChooseUs />
      <Products />
      <Process />
      <Testimonials />
      <FAQ />
      <MapLocation />
      <Footer />
    </>
  );
};

export default Index;
