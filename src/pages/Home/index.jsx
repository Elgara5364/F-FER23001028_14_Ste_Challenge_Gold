import React from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import OurServices from "../../components/OurServices";
import WhyUs from "../../components/WhyUs";
import Testimonial from "../../components/Testimonial";
import Cta from "../../components/CTA";
import FrequentlyaQuestion from "../../components/FAQ";
import Footer from "../../components/Footer";
import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Header />
      <OurServices />
      <WhyUs />
      <Testimonial />
      <Cta />
      <FrequentlyaQuestion />
      <Footer />
    </div>
  );
};

export default Home;
